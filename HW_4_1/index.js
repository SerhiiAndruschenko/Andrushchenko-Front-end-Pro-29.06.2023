const operation = prompt("What do you want to do? (add, sub, mult, div)");

if(operation === 'add' || operation === 'sub' || operation === 'mult' || operation === 'div'){
  const num1 = +prompt("Enter the first number: ");
  const num2 = +prompt("Enter the second number: ");

  let result;
  let operationSymbol;

  if(!isNaN(num1) && !isNaN(num2)){
    switch(operation){
      case 'add':
        result = num1 + num2;
        operationSymbol = '+';
        break;
      case 'sub':
        result = num1 - num2;
        operationSymbol = '-';
        break;
      case 'mult':
        result = num1 * num2;
        operationSymbol = '*';
        break;
      case 'div':
        if (num2 !== 0) {
          result = num1 / num2;
          operationSymbol = '/';
        } else {
          alert("Error: cannot divide by 0!");
        }
        break;
    }

    if (result !== undefined) {
      alert(`${num1} ${operationSymbol} ${num2} = ${result}`);
    }

  } else {
    alert("Error: Please enter numbers only.");
  }
  
} else {
  alert("Error: Wrong operation!");
}

