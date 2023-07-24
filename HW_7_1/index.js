const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1. Знайти суму та кількість позитивних елементів.
const positiveElements = arr.filter((value) => {
  return value > 0;
});
let sumOfPositiveElements = positiveElements.reduce((accumulator, value) => {
  return accumulator + value;
});
console.log(`Сума позитивних елементів масиву: ${sumOfPositiveElements}
Кількість позитивних елементів: ${positiveElements.length}`);


//2. Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minElementIndex = 0;

arr.forEach((value, index) => {
  if (value < minElement) {
    minElement = value;
    minElementIndex = index;
  }
});
console.log(`Мінімальний елемент масиву: ${minElement}
Порядковий номер: ${minElementIndex}`);


//3. Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxElementIndex = 0;

arr.forEach((value, index) => {
  if (value > maxElement) {
    maxElement = value;
    maxElementIndex = index;
  }
});
console.log(`Максимальний елемент масиву: ${maxElement}
Порядковий номер: ${maxElementIndex}`);


//4. Визначити кількість негативних елементів.
const negativeElements = arr.filter((value) => {
  return value < 0;
});
console.log(`Кількість негативних елементів: ${negativeElements.length}`);


//5. Знайти кількість непарних позитивних елементів.
let oddPositiveElements = positiveElements.filter((value) => {
  return value % 2 !== 0;
});
console.log(`Кількість непарних позитивних елементів: ${oddPositiveElements.length}`);


//6. Знайти кількість парних позитивних елементів.
let evenPositiveElements = positiveElements.filter((value) => {
  return value % 2 === 0;
});
console.log(`Кількість парних позитивних елементів: ${evenPositiveElements.length}`);


//7. Знайти суму парних позитивних елементів.
let sumOfEvenPositiveElements = evenPositiveElements.reduce((accumulator, value) => {
  return accumulator + value;
});
console.log(`Сума парних позитивних елементів: ${sumOfEvenPositiveElements}`);


//8. Знайти суму непарних позитивних елементів.
let sumOfOddPositiveElements = oddPositiveElements.reduce((accumulator, value) => {
  return accumulator + value;
});
console.log(`Сума непарних позитивних елементів: ${sumOfOddPositiveElements}`);


//9. Знайти добуток позитивних елементів.
let productOfPositiveElements = positiveElements.reduce((accumulator, value) => {
  return accumulator * value;
});
console.log(`Добуток позитивних елементів: ${productOfPositiveElements}`);


//10.Знайти найбільший серед елементів масиву, остальні обнулити.
let maxElementValue = arr[0];

arr.forEach((value) => {
  if (value > maxElementValue) {
    maxElementValue = value;
  }
});
let modifiedArray = arr.map((value) => {
  return value === maxElementValue ? value : null
});
console.log(modifiedArray);