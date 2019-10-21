var conversion = function(temperature) {
  return (temperature * (9 / 5)) + 32;
};

var temperature = parseFloat(prompt("Enter the temperature in Celsius"));
var result = conversion(temperature);
alert(("It is ") + result.toFixed(1) + " degrees fahrenheit!");
