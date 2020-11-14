// ----- FUNCTIONS -----
// Function: Add
function add(a, b) {
    console.log(a + b);
}

// Function: Subtract
function subtract(a, b) {
    console.log(a - b);
}

// Function: Multiply
function multiply(a, b) {
    console.log(a * b);
}

// Function: Divide
function divide(a, b) {
    console.log(a / b);
}

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

// ----- VARIABLES -----
let a, b, operator, input, displayValue;

// ----- SELECTORS -----
let buttons = document.getElementsByClassName('calc-write');

// ----- FLOW -----

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

// what if a number is multiple digits?
// -
// user enters digit, store digit into input variable
// user enters another digit, append digit into input variable
// continue to append until user clicks operator
// when operator is clicked, if variable a is empty, store into variable a
// otherwise, store into variable b
// operate



// what if the expression contains more than 2 numbers and 1 expression?
// -
// if variable a and b are both filled, operate
// update variable a with newly operated value
// store subsequent number into variable b
// operate
