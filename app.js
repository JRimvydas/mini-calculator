const button = document.querySelector('input[type=submit]');
const answer = document.getElementById('answer');

button.addEventListener('click', displayResult);

function displayResult() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let action = document.querySelector('input[type=radio]:checked').value;
    let result;

    function multiply(num1, num2) {
        return num1*num2;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }

    if (action === "multiply") {
        result = multiply(num1, num2);
    } else if (action === "divide") {
        result = divide(num1, num2);
    } else if (action === "add") {
        result = add(num1, num2);
    } else {
        result = subtract(num1, num2);
    }
    answer.innerHTML ="Atsakymas: " + " " +  result;
}

