const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


document.addEventListener('click', mouseClick);

function mouseClick(e) {
    let x = e.clientX - canvas.offsetLeft - linePadding;
    let y = e.clientY - canvas.offsetTop - linePadding;
    positionDet(x, y);
}



const linePadding = 20;
const lineSpacing = (canvas.width - linePadding*2)/3;
const lineLength = canvas.width - linePadding*2;

let circle = true;



function drawLine() {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(linePadding, linePadding + lineSpacing);
    ctx.lineTo(lineLength + linePadding, linePadding + lineSpacing);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(linePadding, linePadding + lineSpacing*2);
    ctx.lineTo(lineLength + linePadding, linePadding + lineSpacing*2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(linePadding + lineSpacing, linePadding);
    ctx.lineTo(lineSpacing + linePadding, linePadding + lineLength);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(linePadding + lineSpacing*2, linePadding);
    ctx.lineTo(linePadding + lineSpacing*2, linePadding + lineLength);
    ctx.stroke();
}


function positionDet(x, y) {
        for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if ((x > j * lineSpacing) && (x < (j+1) * lineSpacing) && (y > i * lineSpacing) && (y < (i+1) * lineSpacing)) {
                if (circle) {
                    drawCircle(i, j);
                } else {
                    drawCross(i, j);
                }
            }
        }
    }
}

function drawCircle(i, j) {
    ctx.beginPath();
    let a = linePadding + lineSpacing / 2 + lineSpacing * j;
    let b = linePadding + lineSpacing / 2 + lineSpacing * i;
    ctx.arc(a, b, 20, 0, Math.PI*2);
    ctx.fillStyle = "Black";
    ctx.stroke();
    ctx.closePath();
    circle = false;
}

function drawCross(i, j) {
    ctx.beginPath();
    let a = linePadding + (lineSpacing / 2) + lineSpacing * j;
    let b = linePadding + (lineSpacing/2) + lineSpacing * i;
    ctx.moveTo( a - 20, b - 20);
    ctx.lineTo(a + 20, b + 20);
    ctx.moveTo(a + 20, b - 20);
    ctx.lineTo(a - 20, b + 20);
    ctx.stroke();
    circle = true;
}

drawLine();
