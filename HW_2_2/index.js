var number = prompt("Enter a five-digit number:");
if (!isNaN(number) && number.length === 5) {
  var digits = number.split("");
  console.log(digits.join(" "));
} else {
  console.log("Invalid number entered. Please enter a five-digit number.");
}
