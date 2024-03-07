let boxes = document.querySelectorAll(".box");
let turns = document.getElementById("turns");
let turn = true;
let hidedisplay = document.querySelector(".display");
let printwinner = document.querySelector(".displaywinner");
let reset = document.getElementById("reset");
let winnerpatter = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
      turns.innerText = "O";
    } else {
      box.innerText = "O";
      turn = true;
      turns.innerText = "X";
    }
    box.disabled = true;
    winner();
  });
});
const disableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "white";
  });
};

reset.addEventListener("click", () => {
  enableboxes();
  turn = true;
  turns.innerText = "X";
  hidedisplay.style.display = "block";
  printwinner.style.display = "none";
});
const winner = () => {
  for (pattern of winnerpatter) {
    let val1 = pattern[0];
    let val2 = pattern[1];
    let val3 = pattern[2];

    if (
      boxes[val1].innerText != "" &&
      boxes[val3].innerText != "" &&
      boxes[val2].innerText != ""
    ) {
      if (
        boxes[val1].innerText == boxes[val2].innerText &&
        boxes[val2].innerText == boxes[val3].innerText
      ) {
        boxes[val1].style.color = "red";
        boxes[val2].style.color = "red";
        boxes[val3].style.color = "red";
        hidedisplay.style.display = "none";
        printwinner.style.display = "block";
        disableboxes();
      }
    }
  }
};
