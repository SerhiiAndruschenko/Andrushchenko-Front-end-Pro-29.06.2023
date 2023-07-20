/*1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).*/
let arr = [];

for (let i = 20; i <= 30; i += 0.5){
  arr.push(i);
}
console.log(arr.join(' '));

/*2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. */
for(let i = 10; i <= 100; i += 10){
  console.log(`${i} доларів = ${i * 27} гривень`);
}

/*3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N. */
let N = 200;

for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  }
}

/*4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).*/
let isSimple = true;
let numberToCheck = 13;

if(numberToCheck <= 1){
  isSimple = false;
} else {
  for (let i = 2; i < numberToCheck; i++) {
    if(numberToCheck % i === 0){
      isSimple = false;
    }
  }
}

let result = isSimple ? `${numberToCheck} є простим числом` : `${numberToCheck} не є простим числом`;

console.log(result);

/*5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).*/
let number = 27;
let found = false;
let resultValue = 1;
let power = 0;

for (; resultValue < number; power++) {
  resultValue *= 3;
  if (resultValue === number) {
    found = true;
    break;
  }
}

let resulltMessage = found ? `${number} можна отримати шляхом зведення числа 3 у ступінь ${power}.` : `${number} не можна отримати шляхом зведення числа 3 у деякий ступінь.`;

console.log(resulltMessage);