### BMI Calculator JavaScript

This JavaScript code provides a simple BMI (Body Mass Index) calculator. It retrieves height and weight input from the user, calculates the BMI, and displays the result along with the BMI status. It also adjusts the calculation based on whether the height input is in centimeters or meters.

---
#### Code

```javascript
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

```

#### Description

- **Height and Weight Retrieval:** The code retrieves height and weight values from input fields and parses them as floating-point numbers.
- **Height Conversion:** If the height is greater than 3, it is assumed to be in centimeters and converted to meters.
- **BMI Calculation:** BMI is calculated using the formula:
  \[ \text{BMI} = \frac{\text{weight (kg)}}{\text{height (m)}^2} \]
- **Status Determination:** Based on the BMI value, the status is determined and assigned a color:
  - Underweight: BMI < 18.5 (Blue)
  - Normal: 18.5 ≤ BMI ≤ 24.9 (Green)
  - Overweight: 25 ≤ BMI ≤ 29.9 (Orange)
  - Obese: BMI ≥ 30 (Red)
- **Display Results:** The result is displayed in the specified color, and input fields are cleared after calculation.

#### Usage

Include this JavaScript in your HTML file and ensure the elements with IDs `height`, `weight`, `result`, and `submit` exist. The script calculates and displays the BMI based on user input.

---
