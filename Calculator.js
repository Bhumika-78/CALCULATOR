let display = document.getElementById('display');
let currentInput = '';

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('divide').addEventListener('click', function() { appendToDisplay('/') });
document.getElementById('multiply').addEventListener('click', function() { appendToDisplay('*') });
document.getElementById('subtract').addEventListener('click', function() { appendToDisplay('-') });
document.getElementById('add').addEventListener('click', function() { appendToDisplay('+') });
document.getElementById('equal').addEventListener('click', calculate);
document.getElementById('seven').addEventListener('click', function() { appendToDisplay('7') });
document.getElementById('eight').addEventListener('click', function() { appendToDisplay('8') });
document.getElementById('nine').addEventListener('click', function() { appendToDisplay('9') });
document.getElementById('four').addEventListener('click', function() { appendToDisplay('4') });
document.getElementById('five').addEventListener('click', function() { appendToDisplay('5') });
document.getElementById('six').addEventListener('click', function() { appendToDisplay('6') });
document.getElementById('one').addEventListener('click', function() { appendToDisplay('1') });
document.getElementById('two').addEventListener('click', function() { appendToDisplay('2') });
document.getElementById('three').addEventListener('click', function() { appendToDisplay('3') });
document.getElementById('zero').addEventListener('click', function() { appendToDisplay('0') });

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    if (currentInput) {
        try {
            display.value = eval(currentInput);
            currentInput = display.value; 
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    }
}
