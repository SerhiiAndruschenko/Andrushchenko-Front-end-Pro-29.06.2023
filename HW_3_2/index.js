var number1 = +prompt('Enter the first number:');
var number2 = +prompt('Enter the second number:');
var number3 = +prompt('Enter the third number:');
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
  alert('Invalid input. Please enter numbers only.');
} else {
  var average = (number1 + number2 + number3) / 3;
  alert(`Average value is ${average}`);
}