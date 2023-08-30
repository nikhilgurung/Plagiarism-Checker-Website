const checkButton = document.getElementById('check-button');
const textInput = document.getElementById('text-input');
const resultsDiv = document.getElementById('results');

checkButton.addEventListener('click', () => {
    const text = textInput.value;
    // Perform plagiarism detection logic here
    const plagiarismPercentage = Math.random() * 100; // Simulated result
    resultsDiv.innerHTML = `Plagiarism Percentage: ${plagiarismPercentage.toFixed(2)}%`;
});
