const container = document.querySelector(".words"),
    form = document.forms.words,
    searchEl = form.elements.search,
    cntEl = form.elements.cnt;

console.log(container, searchEl, cntEl);

let wordsLength = [];
words.forEach(w => {
    // Если длина нового слова  уже находится в массиве, то пропускаем её
    if(!wordsLength.includes(w.length))  {
        wordsLength.push(w.length);
    }
});
wordsLength.sort((a,b) => a - b);
console.log(wordsLength);
for (let cnt of wordsLength) {
    // new Option("innerText", value (аттрибут))
    // new Option("Пятница", 5)
    // <option value="5">Пятница</option>
    const opt = new Option(cnt);
    cntEl.append(opt);
}

function setWords(arr, cnt = 0, txt = "") {
    if (txt) {
        arr = arr.filter(w => w.includes(txt.toLowerCase()));
    }
    if (+cnt) {
        arr = arr.filter(w => w.length === +cntEl.value);
    }
    container.innerHTML = "";
    arr = arr.slice(0, 1000);
    console.log(arr.length);
    arr.forEach(w => {
        container.innerHTML += `<span>${w}</span>`
    });
}

// function searchWords(arr, txt){
//     container.innerHTML = "";
//     arr = arr.filter(w => w.includes(txt.toLowerCase()));
//     console.log(arr.length);
//     arr.forEach(w => {
//         container.innerHTML += `<span>${w}</span>`
//     });
// }

// События формы:
// onselected
// onchecked
// onchange
// oninput

// cntEl.addEventListener("change", e => {
//     if (cntEl.value !== "0") {
//         let newArr = words.filter(w => w.length === +cntEl.value)
//         console.log(newArr);
//         setWords(newArr);
//     } else {
//         setWords(words);
//     }
// });
// searchEl.addEventListener("change", e => {
//     if (searchEl.value) {
//         searchWords(words, searchEl.value);
//     } else {
//         setWords(words);
//     } 
// })

cntEl.addEventListener("change", e => {
    setWords(words, e.target.value, searchEl.value);
});
searchEl.addEventListener("change", e => {
    setWords(words, cntEl.value, e.target.value);
});

setWords(words);

const txtEl = form.elements.text;
console.log(txtEl);

txtEl.addEventListener("input", e => {
    console.log(e.target.value);
    setWords(words, 0, e.target.value);
})