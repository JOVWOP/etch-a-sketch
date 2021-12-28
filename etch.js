let currentSize = 16;

const container = document.querySelector('#container');
const clearButton = document.querySelector('.clear');
const colorButton = document.querySelector("input[type='color']");
const rangeButton = document.querySelector("input[type='range']");


 function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement("div");
      cell.addEventListener('mouseover', changeBox);
      container.appendChild(cell);
    }
  }
  setupGrid(16);

  function clearGrid() {
    container.innerHTML = ''
  }

  function changeBox() {
      this.style.backgroundColor = colorButton.value;
  }

  function refreshGrid() {
      clearGrid()
      setupGrid(this.value);
      currentSize = this.value;
  }


  function clearCurrentGrid() {
    clearGrid()
    setupGrid(currentSize)
  }

  


  rangeButton.addEventListener('input', refreshGrid);
  clearButton.addEventListener('click', clearCurrentGrid);

