// Main Application File - index.js for server
const express = require('express');  //instantiate express
const createError = require('http-errors'); // bring in module for errors
const path = require('path'); // module to help create proper absolute paths
const bodyParser = require('body-parser');
const configs = require('./config');
const ProductService = require('./services/ProductService');
//const FeedbackService = require('./services/FeedbackService');
const app = express(); // instance of the express object

const config = configs[app.get('env')];

const productService = new ProductService(config.data.products); // class instance
//const feedbackService = new FeedbackService(config.data.feedback);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); // setting the view engine - we require ejs
if(app.get('env') === 'development') {
    app.locals.pretty = true; // if app in dev mode, then i need pretty printing
}
app.set('views', path.join(__dirname, './views'));  // have to tell express where to look for the templates 'views'
app.locals.title = config.sitename; // this is a variable that is valid for whole app

// create variable that makes time when rendered
app.use((req, res, next) => {
    res.locals.rendertime = new Date();
    return next();
})

// bring in the routes
const routes = require('./routes'); // mount the routes
app.use(express.static('public')); // built in middleware of express, middleware gets the folder where public assets are

app.use(bodyParser.urlencoded({ extended: true }));

// in regards to favicon - tell the browser nothing to see here
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});


app.use(async (req, res, next) => {
    try {
        const names = await productService.getNames();
        res.locals.productNames = names;
        return next();
    } catch(err) {
        return next(err);
    }
});

// routing middleware, will react to index route
app.use('/', routes({
    productService
}));

// use createError module // if no other route matches - we end up here at 404
app.use((req, res, next) => {
    return next(createError(404, 'File not found')); // create a handler for file not found
});

// implement the real error handler here // error handler that takes 4 arguments
app.use((err, req, res, next) => {
    res.locals.message = err.message; // makes the error message avail in the template
    const status = err.status || 500; // create status set on error object if no status provided then 500
    res.locals.status = status; // make message avail in the template
    res.locals.error = req.app.get('env') === 'development' ? err : {}; // if in dev mode show stack of errors
    res.status(status);
    return res.render('error'); // render the error page
});

app.listen(3000); // listen on port 3000

module.export = app;

