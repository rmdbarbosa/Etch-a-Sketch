const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  const item = document.querySelectorAll(".grid-item");
  item.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.background = "blue";
    });
  });
}

makeRows(16, 16);
