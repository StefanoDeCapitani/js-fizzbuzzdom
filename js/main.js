const container = document.querySelector("main > .container");
let row = document.createElement("div");
row.classList.add("row", "row-cols-6", "g-3");

for (let i = 1; i <= 100; i++) {
  let cellContainer = document.createElement("div");
  cellContainer.classList.add("col");
  let cell = document.createElement("div");
  cell.classList.add("cell", "ratio-1x1");
  let cellContent = document.createElement("div");
  cellContent.textContent = i;

  multipleOf3 = i % 3 === 0;
  multipleOf5 = i % 5 === 0;
  if (multipleOf3 && multipleOf5) {
    cell.classList.add("fizzbuzz");
    cellContent.textContent = "FizzBuzz";
  } else {
    if (multipleOf3) {
      cell.classList.add("fizz");
      cellContent.textContent = "Fizz";
    }
    if (multipleOf5) {
      cell.classList.add("buzz");
      cellContent.textContent = "Buzz";
    }
  }

  cell.append(cellContent);
  cellContainer.append(cell);
  row.append(cellContainer);
}

container.append(row);
