//1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function findAverage(arr) {
  const numbers = arr.filter(item => typeof item === 'number');

  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const average = sum / numbers.length;
  return average;
}

const myArray = [2, 'test1', 4, 'test2'];
const averageValue = findAverage(myArray);
console.log(averageValue);

//2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y){
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '^':
      return x ** y;
    default:
      return 'Wrong operation';
  }
}

const x = 5;
const y = 3;
const operation = '+';
const result = doMath(x, operation, y);
console.log(result);

//3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fill2DArray() {
  const arr = [];
  const rows = +prompt("Введіть довжину основного масиву:");

  for (let i = 0; i < rows; i++) {
    const innerArr = [];
    const cols = +prompt(`Введіть довжину внутрішнього масиву №${i+1}:`);

    for (let j = 0; j < cols; j++) {
      const userInput = prompt(`Введіть значення для елемента №${j+1} масиву №${i+1}:`);
      innerArr.push(userInput);
    }

    arr.push(innerArr);
  }

  return arr;
}

const userArray = fill2DArray();

console.log(userArray);


//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

//Зробив два варіанти, спочатку придумав варіант з методами filter і includes, але потім подумав про split - тому вирішив щалишити два варіанти))

//Варіант 1
function removeCharacters(inputString, charactersToRemove) {
  for (let i = 0; i < charactersToRemove.length - 1; i++ ) {
    let char = charactersToRemove[i];
    inputString = inputString.split(char).join('');
  }
  return inputString;
}

const inputString = "hello world";
const charactersToRemove = ['l', 'd'];
const resultString = removeCharacters(inputString, charactersToRemove);
console.log(resultString);


//Варіант 2

function removeCharacters(inputString, charactersToRemove) {
  let inputStringArray = inputString.split('');
  const filteredChars = inputStringArray.filter((char) => {
    return !charactersToRemove.includes(char);
  });
  return filteredChars.join('');
}

const inputStringSecond = "hello world";
const charactersToRemoveSecond = ['l', 'd'];
const resultStringSecond = removeCharactersSecond(inputStringSecond, charactersToRemoveSecond);
console.log(resultStringSecond);
