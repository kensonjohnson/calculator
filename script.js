//Defining our variables
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

    alert('You cannot divide by zero!');
    clear();
    return null;
};

/*
This function adds the commas to the diplayed numbers. The given
number is split into two parts: The interger portion and the portion that
follows the decimal. After which, the interger is made pretty by adding 
those commas and is the recombined with the decimal portion if it exists. 
*/
function displayNumberHelper(number) {
    const stringNumber = number.toString();
    const integerPortion = parseFloat(stringNumber.split('.')[0]);
    const decimalPortion = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerPortion)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerPortion.toLocaleString('en', { maximumFractionDigits: 0 });
    };
    if (decimalPortion != null) {
        return `${integerDisplay}.${decimalPortion}`;
    } else {
        return integerDisplay
    }
}

function setOperator(chosenOperator) {
    if (currentOperand == '') return;
    if (previousOperand != '') { evaluate() };
    operator = chosenOperator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function updateScreen() {
    currentOperandText.innerText = displayNumberHelper(currentOperand);
    if (operator != '') {
        previousOperandText.innerText = `${displayNumberHelper(previousOperand)} ${operator}`
    } else {
        previousOperandText.innerText = '';
    }
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

function evaluate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = add(prev, current);
            break
        case '-':
            result = subtract(prev, current);
            break
        case '*':
            result = multiply(prev, current);
            break
        case '÷':
            result = divide(prev, current);
            break
        default:
            return
    }
    operator = '';
    previousOperand = '';
    if (result == null) return;
    currentOperand = result;
}

//Setting our listeners
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
});

equalsButton.addEventListener('click', button => {
    evaluate();
    updateScreen();
});