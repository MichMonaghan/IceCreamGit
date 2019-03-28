const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// create a class called ProductService - that will provide us with the data when we need
class ProductService {
    constructor(datafile){
        this.datafile = datafile;
    }

    async getNames() {
        const data = await this.getData();

        return data.map((product) => {
            return {name: product.name, shortname: product.shortname}
        });
    }

    async getListShort() {
        const data = await this.getData();
        return data.map((product) => {
            return {name: product.name, shortname: product.shortname, title: product.title};
        });
    }



    async getData() {
        const data = await readFile(this.datafile, 'utf8');
        if(!data) return [];
        return JSON.parse(data).products;
    }
}

module.exports = ProductService;