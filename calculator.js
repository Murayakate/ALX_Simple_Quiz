function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return number1 / number2;
}
document.getElementById("add").addEventListener("click", function() {// Event listener for add button

    const num1 = parseFloat(document.getElementById("number1").value || 0);// Get the first number from input
    const num2 = parseFloat(document.getElementById("number2").value || 0);// Get the second number from input
    const result = add(num1, num2);// Call the add function
    document.getElementById("calculation-result").textContent = result;// Display the result
});

document.getElementById("subtract").addEventListener("click", function() {// Event listener for subtract button
    const num1 = parseFloat(document.getElementById("number1").value || 0);// Get the first number from input
    const num2 = parseFloat(document.getElementById("number2").value || 0);// Get the second number from input
    const result = subtract(num1, num2);// Call the subtract function
    document.getElementById("calculation-result").textContent = result;// Display the result
});

document.getElementById("multiply").addEventListener("click", function() {// Event listener for multiply button
    const num1 = parseFloat(document.getElementById("number1").value || 0);// Get the first number from input
    const num2 = parseFloat(document.getElementById("number2").value || 0);// Get the second number from input
    const result = multiply(num1, num2);// Call the multiply function
    document.getElementById("calculation-result").textContent = result;// Display the result
});

document.getElementById("divide").addEventListener("click", function() {// Event listener for divide button
    const num1 = parseFloat(document.getElementById("number1").value || 0);// Get the first number from input
    const num2 = parseFloat(document.getElementById("number2").value || 0);// Get the second number from input
    const result = divide(num1, num2);// Call the divide function
    document.getElementById("calculation-result").textContent = result;// Display the result
});