let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

function appendToDisplay(value) {
    currentDisplay += value;
    document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay);
        document.querySelector('#display').value = currentDisplay;
    } catch (error) {
        document.querySelector('#display').value = 'Error';
    }
}

function calculatePercentage() {
    try {
        currentDisplay = eval(currentDisplay + '/100');
        document.querySelector('#display').value = currentDisplay;
    } catch (error) {
        document.querySelector('#display').value = 'Error';
    }
}
