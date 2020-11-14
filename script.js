// ----- FUNCTIONS -----
// Function: Add
function add(a, b) {
    return(a + b);
}

// Function: Subtract
function subtract(a, b) {
    return(a - b);
}

// Function: Multiply
function multiply(a, b) {
    return(a * b);
}

// Function: Divide
function divide(a, b) {
    return(a / b);
}

// Function: Operate
function operate(a, b, operator) {
    switch (operator) {
        case '+': 
            return add(a, b);
            break;
        case '-': 
            return subtract(a, b);
            break;
        case '*': 
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default: console.log('huh?');
    }
}

// ----- VARIABLES -----
let a, b, operator, input, displayValue;
input = '';
displayValue = '';
operator = '';

// ----- SELECTORS -----
let buttons = document.getElementsByClassName('calc-write');

// ----- FLOW -----

// add event listener to each button
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
            input = '';
        // if button is an operator & variable b is empty, store input into variable b
        } else if (buttons[i].classList.contains('operator') && b == undefined) {
            b = input;
            input = '';
            document.querySelector('.solution').textContent = (operate(parseInt(a), parseInt(b), operator));
        }
    }
)}