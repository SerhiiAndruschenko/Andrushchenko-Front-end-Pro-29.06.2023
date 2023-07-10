var hours = prompt('Enter the number of hours:');
if (isNaN(hours)) {
  alert('Invalid input. Please enter numbers only.');
} else{
  var seconds = hours * 3600;
  alert(`${seconds} seconds`);
}

