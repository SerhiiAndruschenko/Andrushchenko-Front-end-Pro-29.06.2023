const operation = prompt("What do you want to do? (add, sub, mult, div)");

if(operation != 'add' && operation != 'sub' && operation != 'mult' && operation != 'div'){
  alert("Error: Unknown operation!");
} else{
  let num1 = parseFloat(prompt("Enter the first number: "));
  let num2 = parseFloat(prompt("Enter the second number: "));

  let result;
  let operationSymbol;

  if(operation == 'add' && !isNaN(num1) && !isNaN(num2)){
    result = num1 + num2;
    operationSymbol = '+';
  } else if(operation == 'sub' && !isNaN(num1) && !isNaN(num2)){
    result = num1 - num2;
    operationSymbol = '-';
  } else if(operation == 'mult' && !isNaN(num1) && !isNaN(num2)){
    result = num1 * num2;
    operationSymbol = '*';
  } else if(operation == 'div' && !isNaN(num1) && !isNaN(num2)){
    if (num2 !== 0) {
      result = num1 / num2;
      operationSymbol = '/';
    } else {
      alert("Error: Division by zero!");
    }
  } else {
    alert("Invalid input. Please enter numbers only.");
  }

  if (result !== undefined) {
    alert(`${num1} ${operationSymbol} ${num2} = ${result}`);
  }

}

