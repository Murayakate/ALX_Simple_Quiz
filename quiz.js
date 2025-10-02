function checkAnswer() {// Function to check the answer
    const correctAnswer = "4";//

const selectedRadio = document.querySelector('input[name="quiz"]:checked');// Get the selected radio button
//if the user did not pick anything
    if (!selectedRadio) {document.getElementById("feedback").textContent = "Please select an answer.";// Display message if no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer.";// Display message if no answer is selected
        return; // Stop the function if no answer is selected
    }
    const userAnswer = selectedRadio.value;

    // If an answer is selected, check if it's correct
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent ="That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
    document.getElementById("submit-answer").addEventListener("click",checkAnswer);// Disable the button after submission
}

