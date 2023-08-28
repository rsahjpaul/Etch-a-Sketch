const grid = document.getElementById("grid");
const pixelCountButton = document.getElementById("pixelCount");
const resetButton = document.getElementById("reset");


pixelCountButton.addEventListener("click", () => {
  console.log("hi");
  let count = prompt("How many squares per side? Max is 16");
  console.log(count);
  createGrid(count)
});


const createGrid = (count) => {
  for (let i = 0; i < (count*count); i++) {
    let div = document.createElement("div");
    div.classList.add("pixels");
    grid.appendChild(div);

    const pixels = document.querySelectorAll(".pixels");

    pixels.forEach((element) => {
      element.addEventListener("mouseover", () => {
        // console.log("hi");
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

createGrid();
