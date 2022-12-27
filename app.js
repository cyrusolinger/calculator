// arithmetic operator functions
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            return divide(a, b)
            break;
    }
}

const buttons = document.querySelector('.buttons')
let screenCurr = document.querySelector('.screen-current')
let screenLast = document.querySelector('.screen-last')
let current = 0


// Listener for button press
buttons.addEventListener("click", function(event) {
    let last = current
    const operator = event.target.dataset.
key
    // if (current === 'clear') {
    // } else if (current === 'delete') {
    //     return
    // } else if (current === 'decimal') {
    //     return
    // }
     if (operator.startsWith("operator")) {
        screenLast.textContent = `${screenCurr.textContent} ${event.target.textContent}`
        current = 0
    }
    //  else if (current === 'equals') {
    //     console.log('=')
    // }
     else if (!isNaN(event.target.textContent)) {
        current = event.target.dataset.key
        screenCurr.textContent += event.target.dataset.key
    }
        
    // IF delete
    // IF clear
    // IF operator
        // UPDATE screen-last with screen-current value and operator)
    // IF number
    // IF equals
    // IF decimal

})

