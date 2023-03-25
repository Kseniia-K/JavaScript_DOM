const sq = document.querySelector(".square");
const popup = document.querySelector(".popup");

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
// sq.addEventListener("click", changeBg, {once: true});
sq.addEventListener("click", changeBg);
sq.addEventListener("click", function() {
    span.innerText = `Clicked ${++n} times`;
    if (n >= 3) {
        this.removeEventListener("click", changeBg);
    }
});
// e / ev / event – само событие
sq.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.type); // тип события
    console.log(e.target); // конкретный тег, который спровоцировал событие
    console.log(e.currentTarget); // элемент, который является автором (инициатором события)
    console.log(e.shiftKey, e.ctrKey, e.altKey, e.metaKey);
    // meta – win / cmd
    if (e.shiftKey) {
        e.target.style.backgroundColor = getColor();
    }
});

sq.addEventListener("mouseover", e => {
    popup.style.opacity = "1";
    popup.style.top = e.y + "px";
    popup.style.left = e.x + "px";
    // popup.innerText = `x: ${e.x}, y: ${e.y}`;
    popup.innerText = `x: ${e.offsetX}, y: ${e.offsetY}`;
});
sq.addEventListener("mousemove", e => {
    popup.style.top = e.y + "px";
    popup.style.left = e.x + "px";
    popup.innerText = `x: ${e.offsetX}, y: ${e.offsetY}`;
})
sq.addEventListener("mouseout", e => {
    popup.style = null;
});

/*
    onclick – клик по элементу (зажать и отпустить)
    onmousedown – зажать левую кнопку мыши
    onmouseup – отжать левую кнопку мыши
    onmousemove – движение мыши
    onmouseover / onmouseenter – навести указатель мыши
    onmouseout / onmouseleave – убрать наведение
    ondblclick – двойной щелчёк левой кнопкой мыши
    oncontextmenu – правая кнопка мыши
*/