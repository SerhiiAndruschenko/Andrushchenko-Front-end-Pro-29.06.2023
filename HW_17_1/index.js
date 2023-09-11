function generateList(array) {
  function createUl(items) {
    let html = '<ul>';
    items.forEach((item) => {
      if (Array.isArray(item)) {
        html += '<li>';
        html += createUl(item);
        html += '</li>';
      } else {
        html += `<li>${item}</li>`;
      }
    });
    html += '</ul>';
    return html;
  }

  return createUl(array);
}

const array = [1, [1.1, 1.2, 1.3], 2, 3, [3.1, 3.2, 3.3], 4];
const result = generateList(array);

document.body.innerHTML = result;