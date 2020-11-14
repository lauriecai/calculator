// ----- VARIABLES -----
let a, b, operator;

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
let displayValue = '';

// select all buttons
let buttons = document.getElementsByClassName('calc-write');

// add event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // update display value
        displayValue += buttons[i].textContent;
        document.querySelector('.expression').textContent = displayValue;

        // if variable a is empty, store number into variable a
        if (buttons[i].classList.contains('number') && a == undefined) {
            // store number into variable a
            a = buttons[i].textContent;
            console.log('The first number is: ' + a);
        // otherwise, store into variable b
        } else {
            b = buttons[i].textContent;
            console.log('The second number is: ' + b);
        }        

        // if button is an operator:
        if (buttons[i].classList.contains('operator')) {
            // store operator into operator
            operator = buttons[i].textContent;
            console.log(operator + ' is an operator!');
        }

    });
}

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.