//Звичайна послідовність фібоначчі
function fibonacciSequencer(n){
  
  if(n <= 0){
    return [];
  } else if(n === 1){
    return [0, 1];
  } else{
    var previousValue = fibonacciSequencer(n - 1);
    previousValue.push(previousValue[n - 1] + previousValue[n - 2]);
    return previousValue;
  }
  
}

const number = 10;
console.log(fibonacciSequencer(number));

//Трикутник паскаля

function pascalTriangleGenerator(rows){

    if (rows === 0) {
      return [];
    } else if(rows === 1) { 
       return [[1]]; //при значенні 1 ми повернемо масив, який міститиме тільки один елемен, це і буде перший рядок піраміди
    } else{
      let pascalTriangle = pascalTriangleGenerator(rows - 1); 
      let triangleRow = pascalTriangle[pascalTriangle.length - 1]; //тут я беру останній рядок, який ми зберегли в піраміду
      let newRow = [1]; //тут стоворюю новий рядок, який буде містити по дефолту 1
      for(let i = 1; i < triangleRow.length; i++){
        newRow.push(triangleRow[i - 1] + triangleRow[i]);//перебираю елементи попереднього рядка і пушу в новий рядок значення, яке буде сумою двох верхніх значень
      }
      newRow.push(1);//додаю в кінець рядка 1, бо так як і на початку рядка - тут одиниця завжди стала і її можна просто вставити, щоб не проводити зайві розрахунки
      pascalTriangle.push(newRow);
      return pascalTriangle;
    }
    

}

const rows = 5;
const triangleArray = pascalTriangleGenerator(rows);
//triangleArra буде масивом з внутрішніми масивами, які і будуть рядками піраміди
//тут просто виводжу їх по черзі в консоль 
for(let i = 0; i <= triangleArray.length - 1; i++){
  console.log(triangleArray[i].join('   '));
}