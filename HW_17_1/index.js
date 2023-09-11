function generateList(array) {
  let html = '<ul>';

  array.forEach((item) => {
    if (Array.isArray(item)) {
      html += '<li>';
      html += '<ul>';
      item.forEach((subItem) => {
        html += `<li>${subItem}</li>`;
      });
      html += '</ul>';
      html += '</li>';
    } else {
      html += `<li>${item}</li>`;
    }
  });

  html += '</ul>';
  return html;
}

const array = [1, [1.1, 1.2, 1.3], 2, 3, [3.1, 3.2, 3.3], 4];
const result = generateList(array);

document.body.innerHTML = result;
