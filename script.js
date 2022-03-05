function add(num1, num2) {

    return num1 + num2;

};

function subtract(num1, num2) {

    return num1 - num2

}

function divide(num1, num2) {

    if (num2 != 0) {
        return num1 / num2
    };

    return undefined

};

function multiply(num1, num2) {

    return num1 * num2

}

function operate(operator, num1, num2) {
    if (operator = "ADD") { return add(num1, num2) };

    if (operator = "SUBTRACT") { return subtract(num1, num2) };

    if (operator = "DIVIDE") { return divide(num1, num2) };

    if (operator = "MULTIPLY") { return multiply(num1, num2) };
}