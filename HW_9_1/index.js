function sumCalculation() {
  let total = 0;
  return function (value) {
    return total += value;
  }
  
}

const sum = sumCalculation();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));