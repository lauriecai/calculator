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
input = '';
displayValue = '';

// ----- SELECTORS -----
let buttons = document.getElementsByClassName('calc-write');

// ----- FLOW -----

// add event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // update display value
        displayValue += buttons[i].textContent;
        document.querySelector('.expression').textContent = displayValue;

        // if button is a number, keep storing additional digits into input variable
        if (buttons[i].classList.contains('number')) {
            input += buttons[i].textContent;
            console.log('input: ' + input);
            console.log('a: ' + a);
        }

        // when user clicks operator, assign input variable value to variable

        // if variable a is empty, store number into variable a
        if (buttons[i].classList.contains('operator') && a == undefined) {
            // // store number into variable a
            a = input;
            console.log(a);
            // // store selected operator into operator variable
            // operator = buttons[i].textContent;
            // console.log('The first number is: ' + a + ' and the operator is: ' + operator);
        // otherwise, store into variable b
        } else {
            
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

