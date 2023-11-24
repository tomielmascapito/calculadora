 function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }
    function clearDisplay() {
        document.getElementById('display').value = '';
    }
    function calculateResult() {
        const display = document.getElementById('display');
        const expression = display.value;
        try {
            const result = eval(expression);
            if (isNaN(result) || !isFinite(result)) {
                throw new Error(' no válido');
            }
            display.value = result;
        } catch (error) {
            display.value = 'Error: ' + error.message;
        }
  }
