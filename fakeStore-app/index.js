const cors = require('cors');
const express = require('express')
const app = express()
const port = 3000
const productRoutes = require('./routes/products');

app.use(cors());
app.use('/api/products', productRoutes);

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})