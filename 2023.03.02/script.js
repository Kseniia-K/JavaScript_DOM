const sq = document.querySelector(".square");

const changeBg = function() {
    this.style.backgroundColor = getColor();
}

let n = 0;
const span = document.createElement("span");
sq.append(span);
// sq.onclick = function() {
//     span.innerText = `Clicked ${++n} times`;
// }

// Регистрация события (добавить  слушатель события)
sq.addEventListener("click", changeBg);
sq.addEventListener("click", function() {
    span.innerText = `Clicked ${++n} times`;
})