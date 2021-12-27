
const container = document.querySelector('#container')
const clearButton = document.querySelector('.clear')
const colorButton = document.querySelector("input[type='color'")

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
      document.documentElement.style.setProperty(`--${this.name}`, this.value)
  }

  function changeBox() {
      this.classList.add('color');
  }

  function clearGrid() {
      currentBox.forEach(box => {
          box.classList.remove('color');
      })
  }

  
  currentBox.forEach(box => {
      box.addEventListener('mouseover', changeBox);
  });

  clearButton.addEventListener('click', clearGrid);
  colorButton.addEventListener('change', changeColor);