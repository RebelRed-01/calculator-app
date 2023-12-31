const display = document.querySelector('.display');
const numsBtn = document.querySelectorAll('.numbers');
const opBtns = document.querySelectorAll('.operators');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');

let num1 = 0;
let num2 = 0;
let operator = '';

// function to perform operations
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

// conditional to determine which operation to perform
const operate = (operator, num1, num2) => {
    switch (operator) {
        case '+': 
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default: 
            alert('something went wrong!')
    }
}

// input numbers to the display
const populateDisplay = () => {
    numsBtn.forEach(number => {
        number.addEventListener('click', () => {
            display.textContent += number.textContent;
        })
    });
}
populateDisplay();

//clear display and reset values
clearBtn.addEventListener('click', () => {
    display.textContent = '';
    num1 = 0;
    num2 = 0;
})

// store operation values and reset display
const setOperation = () => {
    opBtns.forEach(operation => {
        operation.addEventListener('click', () => {
            if (num1 == 0) {
                num1 = parseFloat(display.textContent);
            } else {
                num2 = parseFloat(display.textContent);
                display.textContent = operate(operator, num1, num2);
                num1 = parseFloat(display.textContent);
            }
            operator = operation.textContent;
            display.textContent = '';
        })
    })
}
setOperation();


// execute operation and display result
equalBtn.addEventListener('click', () => {
    num2 = parseFloat(display.textContent);
    display.textContent = operate(operator, num1, num2);
    num1 = 0;
    num2 = 0;
})