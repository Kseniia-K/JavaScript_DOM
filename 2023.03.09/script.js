const setBg = e => {
    e.preventDefault(); // остановить соббытие, заданное браузером по умолчанию (a / form / button)
    e.stopPropagation();
    console.log(e.currentTarget);
    e.currentTarget.style.backgroundColor = getColor(getNumber(101));
}

document.body.addEventListener("click", setBg);

const sq = document.querySelector(".square");
const link = sq.firstElementChild;

document.body.addEventListener("click", setBg);
sq.addEventListener("click", setBg);

const txtEl = document.querySelector(".card__text");
const picEl= txtEl.previousElementSibling;

console.log(txtEl, picEl);

let form = document.getElementsByTagName("form")[0];
form = document.querySelector("form");
form = document.querySelector("#fun_form");
form = document.forms[0];
form = document.forms.fun_form;
/*
    Форма входа
    Форма регистрации
    Форма корзины
    Форма заказа
    Форма отзыва
    Форма обратной связи
    Форма помощи (экспресс-сообщения)
*/
console.log(form);

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("Submit");
    console.log(form.children); // childNodes (только узлы элементов)
    console.log(form.elements); // Все управляющие элементы формы (они отвечают за данные, которые пойдут на сервер) – input / select  / button / textarea

    for (let i = 0; i < form.elements.length; i++){
        let el = form.elements[i];
        if (el.name) {
            console.log(el);
            switch (el.name) {
                case "txt":
                txtEl.innerHTML += el.value ? `<div>${el.value}</div>` : "";
                break;
                case "pic":
                    picEl.style.backgroundImage  = `url(${el/value})`;
                break;
            }
        }
    }
})

form.addEventListener("reset", e => {
    console.log("Reset");
})
