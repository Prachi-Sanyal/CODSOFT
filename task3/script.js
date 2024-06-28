let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentOperation = '';
let previousOperation = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            currentOperation = '';
            previousOperation = '';
            result = '';
            display.value = '';
        } else if (buttonText === '%') {
            currentOperation += '%';
            display.value = currentOperation;
        } else if (buttonText === '=' && currentOperation!== '') {
            try {
                result = eval(currentOperation);
                display.value = result;
                currentOperation = result;
                previousOperation = '';
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            if (previousOperation!== '') {
                currentOperation += buttonText;
                display.value = currentOperation;
                previousOperation = buttonText;
            } else {
                currentOperation += buttonText;
                display.value = currentOperation;
                previousOperation = buttonText;
            }
        } else {
            currentOperation += buttonText;
            display.value = currentOperation;
        }
    });
});