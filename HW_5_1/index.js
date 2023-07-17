// length enter
var length = parseInt(prompt("Enter array length:"));

// array creation
var array = [];
Array.from({ length }).forEach((element, index) => {
  element = prompt("Enter the element of the array with the index " + index + ":");
  array.push(element);
});

// contents of the array before sorting
alert("Array before sorting: " + array);

// sorting
array.sort((a, b) => a - b);

// contents of the array after sorting
alert("Array after sorting: " + array);

// deleting of elements 
array.splice(1, 3);

// result
alert("Result: " + array);
