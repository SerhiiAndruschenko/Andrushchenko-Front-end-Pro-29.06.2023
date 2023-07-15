const operation = prompt("What do you want to do? (add, sub, mult, div)");
const num1 = +prompt("Enter the first number: ");
const num2 = +prompt("Enter the second number: ");
let result;
let operationSymbol;

switch(true){
  case operation == 'add' && !isNaN(num1) && !isNaN(num2):
    result = num1 + num2;
    operationSymbol = '+';
    break;
  case operation == 'sub' && !isNaN(num1) && !isNaN(num2):
    result = num1 - num2;
    operationSymbol = '-';
    break;
  case operation == 'mult' && !isNaN(num1) && !isNaN(num2):
    result = num1 * num2;
    operationSymbol = '*';
    break;
  case operation == 'div' && !isNaN(num1) && !isNaN(num2):
    if (num2 !== 0) {
      result = num1 / num2;
      operationSymbol = '/';
    } else {
      alert("Error: cannot divide by 0!");
    }
    break;
  default:
    alert("Error: Wrong operation!");
}

if (result !== undefined) {
  alert(`${num1} ${operationSymbol} ${num2} = ${result}`);
}