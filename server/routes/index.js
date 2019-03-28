// This is the Main Routes file
const express = require('express'); // bring in express
const productsRoute = require('./products'); // bring in products route, mount the route
const feedbackRoute = require('./feedback'); // bring in feedback route, mount the route

const router = express.Router(); // using express.Router gives instance of express router

module.exports = (param) => {

    const { productService } = param;

   // add route that will respond the get request // getting index route
    router.get('/', async (req, res, next) => {

        const productslist = await productService.getListShort();

        return res.render('index', {
            page: 'Home',
            productslist,
        });
});

    //Pass the data into the products/feedback route as a param
    router.use('/products', productsRoute());
    router.use('/feedback', feedbackRoute());
    

    return router; // need to return something, otherwise we get an error
};

