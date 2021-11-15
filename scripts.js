const GRID = document.querySelector("#container");
const reset = document.querySelector("#reset");
const newGridSize = document.querySelector("#inputNumber");

let gridSize = 16;

function createGrid(e) {
    for (let i = 0; i < (e * e); i++) {
        let cell = document.createElement("div");
        GRID.appendChild(cell).className = i;
        shadeGray(cell);
    }
    GRID.setAttribute('style', `grid-template-columns:repeat(${gridSize}, auto`, `grid-template-rows:repeat(${gridSize}, auto)`);
}

function shadeGray(e) {
    e.addEventListener("mouseover", () => {
        e.style.cssText = 'Background-color: #ccc';
    });
    e.addEventListener('touches', () => {
        e.style.cssText = 'Background-color: #ccc';
    });
}

createGrid(gridSize);

reset.addEventListener('click', () => {
    gridSize = newGridSize.value;
    while (gridSize < 2 || gridSize > 99) {
        alert("Please enter a number from 2 to 99.");
        gridSize = 16;
        newGridSize.value = 16;
    }
    while (GRID.firstChild) {
        GRID.removeChild(GRID.lastChild);
    }
    createGrid(gridSize);
})