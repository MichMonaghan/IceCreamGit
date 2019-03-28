
const path = require('path'); // using the path module
module.exports = {
    development: {
        sitename: 'Ice Cream [Development]',
        data: {
            products: path.join(__dirname, '../data/products.json'),
            feedback: path.join(__dirname, '../data/feedback.json'),
        }

    },
    production: {
        sitename: 'Ice Cream',
        data: {
            products: path.join(__dirname, '../data/products.json'),
            feedback: path.join(__dirname, '../data/feedback.json'),
        }
    }
}