/*
    innerText - не работает с текстовыми узлами (получает текст только из узла элемента)
    innerHTML - изменяет содержимое элемента вместе с html-тегами
*/

// document.body.innerText += "<h1>Hello!</h1>";

// document.body.innerHTML += "<h1>Hello!</h1>";

document.body.innerHTML = "";

let names = [
    "Margarita",
    "Polina",
    "Kseniia",
    "Ilia",
    "Vladislav",
    "Maxsim",
    "Alexandra",
    "Mikhail",
    "Kamila",
    "Nikita",
    "Sonya",
    "Artemiy"
];

class Person {
    constructor(name) {
        this.name = name;
        this.age = getNumber(13, 20);
        this.color  = getColor();
        this.bg = getColor(40);
    }
}

const data = [];
let cnt = 9;
while (cnt--) {
    let randName = names[getNumber(names.length)];
    data.push(new Person(randName));
};
console.log(data);

function createCard(ppl){
    return `
        <div class="card" style="background-color: ${ppl.bg}">
            <h4>${ppl.name}</h4>
            <div>${ppl.age}</div>
        </div>
    `;
}

let content = "<div class=\"wrapper\">"
for (let ppl of data) {
    content += createCard(ppl);
}
content += "</div>";
document.body.innerHTML += content;