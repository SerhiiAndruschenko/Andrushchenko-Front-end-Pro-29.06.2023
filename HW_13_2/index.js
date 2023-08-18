const table = document.createElement('table');
const tbody = document.createElement('tbody');

let number = 1;
for(let i = 0; i < 10; i++){
  let row = document.createElement('tr');
  for(let j = 0; j < 10; j++){
    let cell = document.createElement('td');
    cell.textContent = number;
    row.appendChild(cell);
    number++;
  }
  tbody.appendChild(row);
}

table.appendChild(tbody);
document.body.appendChild(table);