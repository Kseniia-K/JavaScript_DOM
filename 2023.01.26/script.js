// document – всё, что работает с html

// console.log(document.body);

// node  - узел
/*
    childNodes - список всех дочерних узлов выбранного узла
*/

// const html = document.childNodes[1];
// const head = html.childNodes[0];
// console.log(head);

/*
    nodes
        nodeName
        nodeType
        nodeValue – работает только для текстового узла и комментарии

    Типы узлов:
        1 – узел элемента (тега)
        3 – текстовый узел
        10 – узел doctype
*/

// let headChild = [...head.childNodes];
// let headChild = Array.from(head.childNodes);
// console.log(headChild);
// let style = headChild.filter(el => el.nodeName === "STYLE")[0];
// console.log(style.childNodes[0].nodeValue);
// console.log(document.body.childNodes[1].nodeValue);

/*
    node.firstChild – первый дочерний узел
    node.lastChild – последний дочерний узел
    node.nextSibling – младший брат
    node.previousSibling – старший брат
    node.parentNode – родительский узел
*/

// let caption = document.body.firstChild.nextSibling.nextSibling.nextSibling; // нашли h1

/*
    node.firstElementChild
    node.lastElementChild
    node.nextElementChild
    node.previousElementChild
    node.parentElement
*/

// console.log(caption.firstChild.nodeValue);

// caption.firstChild.nodeValue = "Hey!";
// caption.nodeValue = "Mamama";

// caption.firstChild.textContent = "Hi!";
// caption.textContent = "Mamama";

/*
    textContent – перезаписать текстовое содержимое внутри элемента
*/

// Задание: добраться до тега span и изменить его текстовое содержимое

// Моё решение

// let findTag = document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;

// let changeTag = findTag.textContent = "12345";
// console.log(changeTag);

// Решение преподавателя

let span = document.body.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild;
console.log(span);
span.textContent = "2dev1 was here on Thursday, 26.01.2023 at 13:15"