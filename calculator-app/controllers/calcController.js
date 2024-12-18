const calculatorController = {
    addNumbers: (req, res) => {
        const { num1, num2 } = req.query;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            return res.status(400).json({ error: 'Invalid numbers provided' });
        }

        const result = number1 + number2;
        res.status(200).json({ result });
    },

    subtractNumbers: (req, res) => {
        const { num1, num2 } = req.query;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            return res.status(400).json({ error: 'Invalid numbers provided' });
        }

        const result = number1 - number2;
        res.status(200).json({ result });
    },

    multiplyNumbers: (req, res) => {
        const { num1, num2 } = req.query;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            return res.status(400).json({ error: 'Invalid numbers provided' });
        }

        const result = number1 * number2;
        res.status(200).json({ result });
    },

    divideNumbers: (req, res) => {
        const { num1, num2 } = req.query;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            return res.status(400).json({ error: 'Invalid numbers provided' });
        }

        if (number2 === 0) {
            return res.status(400).json({ error: 'Cannot divide by zero' });
        }

        const result = number1 / number2;
        res.status(200).json({ result });
    }
};

module.exports = calculatorController;