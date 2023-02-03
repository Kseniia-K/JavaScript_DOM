const getNumber = function(a = 100, b = 0) {
    return Math.floor(Math.random() * (a - b) + b);
}

const numbers = [];

for (let i = 0; i < 30; i++){
    numbers.push(getNumber());
}
// console.log(numbers);

function getIndex(){
    return (getNumber(0,29));
}
// console.log(getIndex());

function table(){
    let content = "<table>";
    for (let rows = 0; rows < 6; rows++) {
        content += `
        <tr>
            <td>${numbers[getIndex()]}</td>
            <td>${numbers[getIndex()]}</td>
            <td>${numbers[getIndex()]}</td>
            <td>${numbers[getIndex()]}</td>
            <td>${numbers[getIndex()]}</td>
        </tr>
        `;
    }
    content += "</table>";
    document.body.innerHTML += content;
}
table();

// let cells = document.body.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;

// let newCells = Array.from(cells.cells);
// console.log(newCells[0]);
// for (let i = 0; i < newCells.length; i++){
//     if (newCells[i].innerText >= "50"){
//         newCells[i].bgColor = "orange";
//     }
// }

function getAccess(){
    let cells = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
    // console.log(cells);
    let smallCells = cells.children;
    // console.log(smallCells[0].cells);
    for (let k = 0; k < smallCells.length; k++){
        let newCells = Array.from(smallCells[k].cells);
        // console.log(newCells[0]);
        for (let i = 0; i < newCells.length; i++){
            if (newCells[i].innerText >= 50){
            newCells[i].bgColor = "orange";
            }
        }
    }
}
getAccess();

function newNum (){
    let n = 0;
    let count = 0;
    let cells = document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
    let smallCells = cells.children;
    // while (n < 31){
        for (let k = 0; k < smallCells.length; k++){
            let newCells = Array.from(smallCells[k].cells);
            for (let i = 0; i < newCells.length;){
                newCells[i].textContent = "";
                newCells[i].bgColor = "transparent";
                // break;
            }
            for (let i = 0; i < newCells.length; i++){
                newCells[i].textContent = `${getNumber()}`;
                if (newCells[i].innerText >= 50){
                    newCells[i].bgColor = "orange";
                }
                // return n++;
                // break;
            }
        }
    // }
}
