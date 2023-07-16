const operation = prompt("What do you want to do? (add, sub, mult, div)");
const num1 = +prompt("Enter the first number: ");
const num2 = +prompt("Enter the second number: ");
let result;
let operationSymbol;

switch(true){
  case isNaN(num1) || isNaN(num2):
    alert("Error: Wrong number!");
    break;
  case operation == 'add':
    result = num1 + num2;
    operationSymbol = '+';
    break;
  case operation == 'sub':
    result = num1 - num2;
    operationSymbol = '-';
    break;
  case operation == 'mult':
    result = num1 * num2;
    operationSymbol = '*';
    break;
  case operation == 'div':
    if (num2 !== 0) {
      result = num1 / num2;
      operationSymbol = '/';
    } else {
      alert("Error: Cannot divide by 0!");
    }
    break;
  default:
    alert("Error: Wrong operation!");
}

if (result !== undefined) {
  alert(`${num1} ${operationSymbol} ${num2} = ${result}`);
}