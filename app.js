// arithmetic operator functions
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b)
            break;
        case 'subtract':
            return subtract(a, b)
            break;
        case 'multiply':
            return multiply(a, b)
            break;
        case 'divide':
            return divide(a, b)
            break;
    }
}

const buttons = document.querySelector('.buttons')
let screenCurr = document.querySelector('.screen-current')
// let screenLast = document.querySelector('.screen-last')

let current = 0;
let last;
let operator;

buttons.addEventListener("click", function(event) {

        if (event.target.textContent === 'clear') {
            current = 0;
            last = 0;
            operator = null
            screenCurr.textContent = 0
        } else if (event.target.textContent === '=') {
            const answer = operate(operator, parseInt(last), parseInt(current)) // returns answer
            console.log(`answer: ${answer}`)
            screenCurr.textContent = answer
        } else if (event.target.dataset.key.startsWith("operator")) {
            operator = event.target.dataset.key.substring(9)
            last = current
            } else if (!isNaN(parseInt(event.target.dataset.key)) && !isNaN(last)) {
            current = event.target.textContent
            screenCurr.textContent = event.target.dataset.key
        } else if (!isNaN(event.target.textContent)) {
            current += event.target.textContent
            screenCurr.textContent += event.target.dataset.key
        }



     console.log(`current: ${current}`)
     console.log(`last: ${last}`)
     console.log(`operator: ${operator}`)
})


