// ----- FUNCTIONS -----
// Function: Add
function add(a, b) {
    console.log(a + b);
}
add(5, 2);
add(42, 163);

// Function: Subtract
function subtract(a, b) {
    console.log(a - b);
}
subtract(5, 1);
subtract(1, 5);

// Function: Multiply
function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 3);
multiply(4, 4);

// Function: Divide
function divide(a, b) {
    console.log(a / b);
}
divide(4, 2);
divide(3, 2);

// Function: Operate
function operate(a, b, operator) {
    switch (operator) {
        case 'add': 
            add(a, b);
            break;
        case 'subtract': 
            subtract(a, b);
            break;
        case 'multiply': 
            multiply(a, b);
            break;
        case 'divide':
            divide(a, b);
            break;
        default: console.log('huh?');
    }
}
operate(7, 2, 'subtract');
operate(7, 2, 'multiply');

// Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.

// initiate displayValue, set to ' '
let displayValue = ' ';

// set expression.textContent to reflect displayValue
document.querySelector('.expression').textContent = displayValue;

// add event listener to every button


// on click, append text content into displayValue