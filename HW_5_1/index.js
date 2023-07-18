// length enter
var length = parseInt(prompt("Enter array length:"));

// array creation
var array = new Array(length).fill().map((element, index) => {
  element = prompt("Enter the element of the array with the index " + index + ":");
  return element;
});
//console.log(array);

var containsOnlyNumbers = array.every(element => !isNaN(+element));

// contents of the array before sorting
alert("Array before sorting: " + array);

// sorting
if (containsOnlyNumbers) {
  array.sort((a, b) => a - b);
} else {
  array.sort();
}

// contents of the array after sorting
alert("Array after sorting: " + array);

// deleting of elements 
array.splice(1, 3);

// result
alert("Result: " + array);
