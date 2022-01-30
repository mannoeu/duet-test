var board = document.querySelector("#board");
var player = document.querySelector("#player");

const getTransformValue = (element) =>
  window
    .getComputedStyle(element)
    .getPropertyValue("transform")
    .match(/\((.*)\)/)
    .pop()
    .split(",");

const changeRotation = (matrix) => {
  console.log(matrix);
  let updated_matrix = matrix
    .slice(0, 4)
    .map((value) => Number(value) + 0.03)
    .concat(matrix.slice(4, 6));

  return `matrix(${updated_matrix.join(", ")})`;
};

const rotate = (key) => {
  if (key === 39) {
    // right
    let matrix = getTransformValue(player);
    let updated_matrix = changeRotation(matrix);
    player.style.transform = updated_matrix;
    console.log(updated_matrix);
  } else if (key === 37) {
    // left
    let matrix = getTransformValue(player);
    let updated_matrix = changeRotation(matrix);
    player.style.transform = updated_matrix;
    console.log(updated_matrix);
  }
};

window.addEventListener("keydown", (e) => rotate(e.keyCode));
