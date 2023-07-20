/*1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).*/
let arr = [];
for (let i = 20; i <= 30; i += 0.5){
  arr.push(i);
}
console.log(arr.join(' '));

/*2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. */
for(let i = 10; i <= 100; i += 10){
  console.log(i * 27);
  console.log(`${i} доларів = ${i * 27} гривень`);
}

/*3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N. */
let N = 100;
for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  }
}

/*4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).*/


/*5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).*/

function customSplit(str, sepr) {
  let arr = [];
  let older = 0;
  str += sepr;
  for (let i = 0; i <str.length; i++){
    if(str[i] == sepr) {
      let res = '';
      for (let j = older; j < i; j++) {
       res += str[j];
      }
      older = ++i;
      arr.push(res)
    }
  }
  return arr;
}

function customSplit(str, sepr) {
  let arr = [];
  let older = 0;
  str += sepr;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sepr) {
      arr.push(str.slice(older, i));
      older = ++i;
    }
  }
  return arr;
}

console.log(customSplit('stststr', 't'));