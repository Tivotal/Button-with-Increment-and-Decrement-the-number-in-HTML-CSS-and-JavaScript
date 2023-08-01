/* Created by Tivotal */

let minus = document.querySelector(".minus");
let num = document.querySelector(".num");
let plus = document.querySelector(".plus");

let i = 1;

plus.addEventListener("click", () => {
  i++;
  i = i < 10 ? "0" + i : i;
  num.innerText = i;
});

minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    i = i < 10 ? "0" + i : i;
    num.innerText = i;
  }
});
