// Route for Products

const express = require('express');

// bring in express router, gives us instance of express router
const router = express.Router();


module.exports = () => {

    router.get('/', (req, res, next) => {
        return res.render('products', {
            page: 'All Products',
        });
    });

    // create parameter route that takes speakers name
    router.get('/:name', (req, res, next) => {
        return res.render('products/detail', {
            page: req.params.name,
        });
     });

    return router;
       
};

