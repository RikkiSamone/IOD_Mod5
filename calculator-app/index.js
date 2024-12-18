const app = require('./app');
const port = 3000

// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`)
});

const calculatorRoutes = require("./routes/calculatorRoutes");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerConfig');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
