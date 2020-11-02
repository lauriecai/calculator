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