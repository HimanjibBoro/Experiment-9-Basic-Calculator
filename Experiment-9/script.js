let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn, .operator");
let clearBtn = document.getElementById("clear");
let equalBtn = document.getElementById("equal");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.getAttribute("data-value");

        // If operator clicked
        if (button.classList.contains("operator")) {
            if (currentInput === "") return;

            operator = value;
            previousInput = currentInput;
            currentInput = "";
        } 
        else {
            currentInput += value;  
            display.value = currentInput;
        }
    });
});

equalBtn.addEventListener("click", () => {
    if (previousInput === "" || currentInput === "" || operator === "") return;

    let result = 0;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
});

clearBtn.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
});
