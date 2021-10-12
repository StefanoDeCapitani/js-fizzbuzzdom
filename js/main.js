const container = document.querySelector("main > .container");
let row = document.createElement("div");
row.classList.add("row", "g-3");
let cell = document.createElement("div");
cell.classList.add("col", "fizz");
let cellRatio = document.createElement("div");
cellRatio.classList.add("ratio", "ratio-1x1");
let cellContent = document.createElement("div");
cellContent.classList.add(
  "d-flex",
  "justify-content-center",
  "align-items-center"
);
cellContent.textContent = "1";

cellRatio.append(cellContent);
cell.append(cellRatio);
row.append(cell);
container.append(row);
