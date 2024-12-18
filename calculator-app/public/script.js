// Get references to the form elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');

// Function to calculate the result
function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.value = 'Please enter valid numbers';
        return;
    }

    // API call to the Express server
    fetch(`/calculator/${operation}?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDisplay.value = `Error: ${data.error}`;
            } else {
                resultDisplay.value = data.result;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDisplay.value = 'Error fetching data';
        });
}

// Event listeners for each operator button
addButton.addEventListener('click', () => calculate('add'));
subtractButton.addEventListener('click', () => calculate('subtract'));
multiplyButton.addEventListener('click', () => calculate('multiply'));
divideButton.addEventListener('click', () => calculate('divide'));

// Clear input fields and result display
clearButton.addEventListener('click', () => {
    num1Input.value = '';
    num2Input.value = '';
    resultDisplay.value = '';
});