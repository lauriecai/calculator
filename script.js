// ----- VARIABLES -----
let a, b, operator, input, displayValue;
clear();

// ----- FUNCTIONS -----
// Function: Add
function add(a, b) {
    return a + b;
}

// Function: Subtract
function subtract(a, b) {
    return a - b;
}

// Function: Multiply
function multiply(a, b) {
    return a * b;
}

// Function: Divide
function divide(a, b) {
    return a / b;
}

// Function: Operate
function operate(a, b, operator) {
    switch (operator) {
        case ' + ': 
            return add(a, b);
            break;
        case ' - ': 
            return subtract(a, b);
            break;
        case ' * ': 
            return multiply(a, b);
            break;
        case ' / ':
            return divide(a, b);
            break;
        default: console.log('huh?');
    }
}

// Function: Clear
function clear() {
    input = '';
    displayValue = '';
    a = undefined;
    b = undefined;
    console.log('Expression cleared. Input: ' + input + ' displayValue: ' + displayValue + ' a: ' + a + ' b: ' + b);
    // update screen
    document.querySelector('.expression').textContent = displayValue;
    document.querySelector('.solution').textContent = '';
}

// ----- SELECTORS -----
let buttons = document.getElementsByClassName('calc-write');

// ----- FLOW -----

// add event listener to each calc-write button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

        // update display value & avoid displaying equals
        if (buttons[i].textContent != '=') {
            displayValue += buttons[i].textContent;
            document.querySelector('.expression').textContent = displayValue;
        }

        // if button is a number, keep storing additional digits into input variable
        if (buttons[i].classList.contains('number')) {
            input += buttons[i].textContent;

        // if button is an operator & variable a is empty, store input into variable a
        } else if (buttons[i].classList.contains('operator') && a == undefined) {
            a = input;
            operator = buttons[i].textContent;
            console.log(operator);
            input = '';

        // if button is an operator & variable b is empty, store input into variable b
        } else if (buttons[i].classList.contains('operator') && b == undefined) {
            b = input;
            input = '';
            document.querySelector('.solution').textContent = (operate(parseInt(a), parseInt(b), operator));
        }
    }
)}

// add event listener to clear button
document.getElementById('clear').addEventListener('click', clear());

// Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. 
// Note: Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.


