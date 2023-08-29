const grid = document.getElementById("grid");
const pixelCountButton = document.getElementById("pixelCount");
const resetButton = document.getElementById("reset");

pixelCountButton.addEventListener("click", () => {
  let count = prompt("How many squares per side? Max is 100");
  clearGrid();
  createGrid(count);
});

const clearGrid = () => {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
};

const createGrid = (count) => {
  if (count > 100 || count < 0) {
    window.alert("Invalid choice, choose between 0 and 100");
    return;
  } else {
    const gridSize = 560; // Total size of the container
    const squareSize = ((gridSize / count)-1); // Calculate size of each square

    for (let i = 0; i < count * count; i++) {
      let div = document.createElement("div");
      div.classList.add("pixels");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;

      grid.appendChild(div);
    }  

    const pixels = document.querySelectorAll(".pixels");

    pixels.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add("hovered");
      });
    });

    resetButton.addEventListener("click", () => {
      pixels.forEach((element) => {
        element.classList.remove("hovered");
      });
    });
  }
};
