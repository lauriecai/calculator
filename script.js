// ----- VARIABLES -----
let a, b, operator, input, displayValue, solution;
clear();

// ----- FUNCTIONS -----
// Function: Add
function add(a, b) {
    return (a + b).toFixed(2);
}

// Function: Subtract
function subtract(a, b) {
    return (a - b).toFixed(2);
}

// Function: Multiply
function multiply(a, b) {
    return (a * b).toFixed(2);
}

// Function: Divide
function divide(a, b) {
    return (a / b).toFixed(2);
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
    console.log('Expression cleared.');
    // update screen
    document.querySelector('.expression').textContent = displayValue;
    document.querySelector('.solution').textContent = '';
}

// Function: Reset input
function resetInput() {
    input = '';
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

        // if button is a number, store all digits into input variable
        if (buttons[i].classList.contains('number')) {
            input += buttons[i].textContent;
            console.log('input: ' + input + ' a: ' + a + ' b: ' + b);

        }
        
        // if user clicks operator & a is empty, store input into variable a
        if (buttons[i].classList.contains('operator') && a == undefined) {
            a = input;
            operator = buttons[i].textContent;
            resetInput();
            console.log('input: ' + input + ' a: ' + a + ' b: ' + b);

        // if user clicks equals & variable b is empty, store input into variable b & compute, display result
        } else if (buttons[i].id == 'equals') {
            b = input;
            resetInput();
            solution = (operate(parseFloat(a), parseFloat(b), operator));
            document.querySelector('.solution').textContent = solution;
            console.log('input: ' + input + ' a: ' + a + ' b: ' + b + ' solution: ' + solution);
        // if user clicks operator & variable b is empty, store input into variable b & compute, store result in variable a
        } else if (buttons[i].classList.contains('operator')) {
            b = input
            resetInput();
            solution = (operate(parseFloat(a), parseFloat(b), operator));
            a = solution;
            operator = buttons[i].textContent;
        }
    }
)}

// add event listener to clear button
document.getElementById('clear').addEventListener('click', clear);

// Support usage of decimals. Round answers with long decimals so they don't overflow the screen

