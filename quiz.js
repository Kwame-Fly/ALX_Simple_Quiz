// Function Declaration
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4"; // This is the correct answer

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if a radio button was selected
    if (userAnswer) {
        const userValue = userAnswer.value;

        // Compare the User’s Answer with the Correct Answer
        const feedbackElement = document.getElementById('feedback');
        if (userValue === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
