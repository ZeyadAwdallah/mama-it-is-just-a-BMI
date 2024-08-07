const height = document.getElementById("height");
const weight = document.getElementById("weight");
const result = document.getElementById("result");
const btn = document.getElementById("submit");

btn.addEventListener("click", function () {
    // Retrieve and parse input values
    let heightValue = parseFloat(height.value);
    let weightValue = parseFloat(weight.value);

    // Initialize variables
    let bmi = 0;
    let status = "Invalid";
    let color = "gray";

    // Validate inputs
    if (heightValue > 0 && weightValue > 0) {
        // Convert height from cm to meters if necessary
        if (heightValue > 3) {
            heightValue = heightValue / 100;
        }

        // Calculate BMI
        bmi = (weightValue / (heightValue * heightValue)).toFixed(2);

        // Determine BMI status and color
        if (bmi < 18.5) {
            status = "Underweight";
            color = "blue";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Normal";
            color = "green";
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Overweight";
            color = "orange";
        } else {
            status = "Obese";
            color = "red";
        }
    } else {
        // Handle invalid input
        bmi = "N/A";
        status = "Invalid input";
        color = "gray";
    }

    // Display result
    result.style.color = color;
    result.innerHTML = `BMI: ${bmi}<br>Status: ${status}`;

    // Clear input fields
    weight.value = "";
    height.value = "";
});