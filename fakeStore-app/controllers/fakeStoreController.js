const axios = require('axios');

const API_URL = 'https://fakestoreapi.com/products';

const productList = async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const products = response.data;
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

module.exports = { productList};