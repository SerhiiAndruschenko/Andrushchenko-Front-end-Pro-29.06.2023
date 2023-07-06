var number = prompt("Enter a five-digit number:");
var numberString = number.toString();
var digits = numberString.split("");
console.log(digits.join(" "));
