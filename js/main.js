const container = document.querySelector("main > .container");
let row = document.createElement("div");
row.classList.add("row", "row-cols-6", "g-3");

for (let i = 1; i <= 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("col");
  let cellRatio = document.createElement("div");
  cellRatio.classList.add("ratio", "cell");
  let cellContent = document.createElement("div");
  cellContent.textContent = i;
  if (i % 3 === 0 && i % 5 === 0) {
    cellRatio.classList.add("fizzbuzz");
    cellContent.textContent = "FizzBuzz";
  } else {
    if (i % 3 === 0) {
      cellRatio.classList.add("fizz");
      cellContent.textContent = "Fizz";
    }
    if (i % 5 === 0) {
      cellRatio.classList.add("buzz");
      cellContent.textContent = "Buzz";
    }
  }
  cellRatio.append(cellContent);
  cell.append(cellRatio);
  row.append(cell);
}

container.append(row);
