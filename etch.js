
const container = document.querySelector('#container')
const clearButton = document.querySelector('.clear')

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
  makeRows(16,16);

  const currentBox = Array.from(document.querySelectorAll('.grid-item'));

  function changeColor() {
      this.style.backgroundColor = 'black'
  }


  currentBox.forEach(box => {
      box.addEventListener('mouseover', changeColor)
  });