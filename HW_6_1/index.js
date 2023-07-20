/*1. Вивести на сторінку в один рядок через кому числа від 10 до 20.*/
let arr = [];
for (let i = 10; i <= 20; i++){
  arr.push(i);
}
console.log(arr.join(', '));


/*2. Вивести квадрати чисел від 10 до 20.*/
for (let i = 10; i <= 20; i++){
  console.log(i * i);
}

/*3. Вивести таблицю множення на 7.*/
for (let i = 1; i <= 10; i++){
  console.log(`7 x ${i} = ${7 * i}`);
}

/*4. Знайти суму всіх цілих чисел від 1 до 15.*/
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

/*5. Знайти добуток всіх цілих чисел від 1 до 15.*/
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);

/*6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500. */
let average = 0;
for (let i = 1; i <= 500; i++) {
  average += i;
}
console.log(average/500);

/*7. Вивести суму лише парних чисел в діапазоні від 30 до 80. */
let sumEven = 0;
for (let i = 30; i <= 80; i++) {
  if(i % 2){
    sumEven += i;
  }
}
console.log(sumEven);

/*8. Вивести всі числа в діапазоні від 100 до 200 кратні 3. */
for (let i = 100; i <= 200; i++) {
  if(i % 3 === 0){
    console.log(i);
  }
}

/*9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.*/
let number = 10;
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

/*10. Визначити кількість його парних дільників. 
  11. Знайти суму його парних дільників.
*/
let numberForEven = 10;
let numberEvenSum = 0;
for (let i = 1; i <= numberForEven; i++) {
  if (numberForEven % i === 0 && i % 2 === 0) {
    console.log(i);
    numberEvenSum += i;
  }
}
console.log(numberEvenSum);

/*12.Надрукувати повну таблицю множення від 1 до 10.*/
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}