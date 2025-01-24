
        let display = document.getElementById('display');
        let currentInput = '';
        let operator = null;
        let firstOperand = null;

        function appendNumber(number) {
            if (currentInput === '' && number === 0) return;
            currentInput += number;
            if (operator && firstOperand !== null) {
                updateDisplay(`${firstOperand} ${operator} ${currentInput}`);
            } else {
                updateDisplay(currentInput);
            }
        }


        function setOperator(op) {
            if (currentInput === '') return;
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            }
            operator = op;
            updateDisplay(`${firstOperand} ${operator}`);
            currentInput = '';
        }


        function calculateResult() {
            if (operator && currentInput !== '') {
                let secondOperand = parseFloat(currentInput);
                let result = operate(operator, firstOperand, secondOperand);
                updateDisplay(result);
                currentInput = '';
                operator = null;
                firstOperand = null;
            }
        }

        function clearDisplay() {
            currentInput = '';
            operator = null;
            firstOperand = null;
            updateDisplay(0);
        }

        function updateDisplay(value) {
            display.textContent = value;
        }


        function operate(op, a, b) {
            switch (op) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
                default: return b;
            }
        }