let display = document.getElementById('display');
        let currentInput = '';
        let operator = null;
        let firstOperand = null;
        let shouldResetDisplay = false;

        function appendNumber(number) {
            if (shouldResetDisplay) {
                currentInput = '';
                shouldResetDisplay = false;
            }
            currentInput += number;
            updateDisplay(currentInput);
        }

        function setOperator(op) {
            if (currentInput === '' && operator !== null) {
                operator = op;
                updateDisplay(`${firstOperand} ${operator}`);
                return;
            }
        
            if (currentInput !== '') {
                firstOperand = currentInput;
            }
        
            operator = op;
            currentInput += ` ${operator} `;
            updateDisplay(currentInput);
            shouldResetDisplay = false;
        }

        function calculateResult() {
            try {
                let result = new Function('return ' + currentInput)();
                updateDisplay(`${currentInput} = ${result}`);
                currentInput = result.toString();
                shouldResetDisplay = true;
            } catch (error) {
                updateDisplay("Error");
                currentInput = "";
            }
        }

        function clearDisplay() {
            currentInput = '';
            operator = null;
            firstOperand = null;
            shouldResetDisplay = false;
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

      
