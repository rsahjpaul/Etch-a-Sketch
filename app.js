const grid = document.getElementById("grid");


const pixelCount = document.getElementById('pixelCount')

pixelCount.addEventListener('click', () => {
  console.log('hi')
});


const startApp = () => {
  for (let i = 0; i < 256; i++) {
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

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
      pixels.forEach((element) => {
        element.classList.remove("hovered");
      });
    });
  }
};

startApp();
