let n = 0;
function clk(){
    console.log(`Clicked ${++n} times`);
}
const getNumber = function(a = 101, b = 0){
    return Math.floor(Math.random() * ((a - b) + b));
}
const getColor = function(){
    return `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`;
}
let w;
let wins = [];
let point = {
    x: 0,
    y: 100
}
let step = {
    x: 70,
    y: 70
}
function show(){
    // window.open("https://wikipedia.org", "_self");
    let w = window.open("", "", `width=200,height=200,top=${point.y},left=${point.x}`);
    wins.push(w);
    w.document.write(`<body style="background-color: ${getColor()}"></body>`);
    point.x += step.x;
    point.y += step.y;
}
function exit(){
    let w = wins[wins.length - 1];
    if (w){
        wins.pop().close();
    }
}
function changeSize(){
    let width = getNumber(screen.width - 200, 100);
    let height = getNumber(screen.height - 200, 100);
    if (w){
        // w.resizeBy(100,100);
        w.resizeTo(width, height);
    }
}
function changePlace(){
    if  (w){
        let x = (screen.width - w.outerWidth) / 2;
        let y = (screen.height - w.outerHeight) / 2;
        // w.moveBy(100,0);
        w.moveTo(x, y);
    }
}
