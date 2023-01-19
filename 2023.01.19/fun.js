let funWidth = 500, 
    funHeight = 500, 
    funTop = (screen.availHeight - funHeight) / 2,
    funLeft = (screen.availWidth - funWidth) / 2
function getFun(){
    let w = window.open("", "", `width=${funWidth},height=${funHeight},left=${funLeft},top=${funTop}`);
    let content = `
        <html>
            <head>
            <title>Fun page</title>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        flex-wrap: wrap;
                    }
                </style>
            </head>
            <body>
    `;
    let n = 20;
    for (let i = 0; i < funWidth / n; i++){
        for (let j = 0; j < funHeight / n; j++){
            content += `<div style="
                background: ${getColor()};
                width: ${n}px;
                height: "${n}px;
            "></div>`;
        }
    };
    content += "Hello!";
    content += `</body></html>`;
    w.document.write(content);
}