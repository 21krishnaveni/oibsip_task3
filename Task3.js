function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unitSelect = document.getElementById("unit");
    var unit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    var convertedTemperature;
    var convertedUnit;

    if (unit === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        convertedUnit = "Fahrenheit";
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
        convertedUnit = "Celsius";
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + convertedUnit;
}
