//defining our variables
let currentOperand = '';
let previousOperand = '';
let operator = '';
const numberButtons = document.querySelectorAll('[data-numbers]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const backButton = document.querySelector('[data-backspace]');
const clearButton = document.querySelector('[data-clear]');
const currentOperandText = document.querySelector('[data-bottom-operand]');
const previousOperandText = document.querySelector('[data-top-operand]');


function add(num1, num2) { return num1 + num2; };

function subtract(num1, num2) { return num1 - num2 };

function multiply(num1, num2) { return num1 * num2 };

function divide(num1, num2) {
    if (num2 != 0) { return num1 / num2 };

    return "Black Hole"
};

function setOperator(operator) {
    if (currentOperand == '') return;
    operator = operator;
}

function operate(operator, num1, num2) {
    if (operator = "ADD") { return add(num1, num2) };

    if (operator = "SUBTRACT") { return subtract(num1, num2) };

    if (operator = "DIVIDE") { return divide(num1, num2) };

    if (operator = "MULTIPLY") { return multiply(num1, num2) };
}

function updateScreen() {
    currentOperandText.innerText = currentOperand;
    previousOperandText.innerText = previousOperand;
    return

}

function clear() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
}

function appendNumber(number) {
    if (number == '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateScreen();
};

function backspace() {
    currentOperand = currentOperand.toString().slice(0, -1);

}

//setting our listeners
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateScreen();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        setOperator(button.innerText);
        updateScreen();
    })
})

clearButton.addEventListener('click', button => {
    clear();
    updateScreen();
});

backButton.addEventListener('click', button => {
    backspace();
    updateScreen();
})