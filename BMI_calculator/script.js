// Select the inputs and buttons
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const submitBtn = document.querySelector('#calculate-btn');
const resetBtn = document.querySelector('#reset-btn');
const input = document.getElementById('bmi-result');

// Add an event listener to the submit button
submitBtn.addEventListener('click', function() {
    // Get the input values and convert them to numbers
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validate the inputs to ensure they are valid numbers
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        input.value = 'Invalid input';
        return;
    }

    // Calculate the BMI using the formula: BMI = weight / (height * height)
    const bmi = weight / (height * height / 10000); // Convert height to meters squared

    // Display the calculated BMI, rounded to 2 decimal places
    input.value = bmi.toFixed(2);
});

// Add an event listener to the reset button
resetBtn.addEventListener('click', function() {
    // Reset the input fields and BMI result
    weightInput.value = '';
    heightInput.value = '';
    input.value = '';
});
