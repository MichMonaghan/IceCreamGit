// route for feedback page
const express = require('express');
const router = express.Router();

module.exports = () => {

    // feedback route
    router.get('/', async (req, res, next) => {
        return res.render('Feedback');
    });

    // route that will respond to a post request to /feedback
    router.post('/', async (req, res, next) => {
        return res.send('Form sent');
        
    });

    return router; 
};

