const express = require('express');
const router = express.Router();

// new route for adding two numbers
/*router.get('/add', (req, res) => {
    console.log(req.query)
    res.send('Add')
});*/

//http://localhost:3000/calculator/add?num1=4&num2=10

router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
});

/*router.get('/subtract', (req, res) => {
    console.log(req.query)
    res.send('subtract')
});*/

router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({ result: difference })

});

/*router.get('/multiply', (req, res) => {
    console.log(req.query)
    res.send('Multiply')
});*/

router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiply = number1 * number2
    console.log(multiply)
    res.status(200)
    res.json({ result: multiply })

});

/*router.get('/divide', (req, res) => {
    console.log(req.query)
    res.send('Divide')
});*/

router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let quotient = number1 / number2
    console.log(quotient)
    res.status(200)
    res.json({ result: quotient })

});

module.exports = router;