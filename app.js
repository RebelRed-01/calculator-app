const display = document.querySelector('.display');
const numsBtn = document.querySelectorAll('.numbers');
let num1 = 10;
let num2 = 2;
let operator = '/';

const add = (num1, num2) => {
    return num1 + num2;
}
const subtract = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    switch (operator) {
        case '+': 
            console.log(add(num1, num2));
            break;
        case '-':
            console.log(subtract(num1, num2));
            break;
        case '*':
            console.log(multiply(num1, num2));
            break;
        case '/':
            console.log(divide(num1, num2));
            break;
        default: 
            alert('something went wrong!')
    }
}
operate(operator, num1, num2)

const populateDisplay = () => {
    numsBtn.forEach(number => {
        number.addEventListener('click', () => {
            display.textContent += number.textContent;
        })
    });
}
populateDisplay();
