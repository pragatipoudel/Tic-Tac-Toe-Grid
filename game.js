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

const states = [];
for (let c = 0; c < 3; c++) {
    states[c] = [];
    for (let r = 0; r < 3; r++) {
        states[c][r] = 0;
    }
}



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
                if (states[j][i] == 0) {
                    if (circle) {
                        states[j][i] = 1;
                        drawCircle(i, j);
                    } else {
                        states[j][i] = 2;
                        drawCross(i, j);
                    }
                }

                checkWin();
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

function checkWin() {
    let winner = 0;
    for (let i = 0; i < 3; i++) {
        if (states[0][i] == states[1][i] && states[1][i] == states[2][i]) {
            winner = states[0][i];
        } 
    }

    for (let j = 0; j < 3; j++) {
        if (states[j][0] == states[j][1] && states [j][1] == states[j][2]) {
            winner = states[j][0];
        }
    }

    if (states[0][0] == states[1][1] && states[1][1] == states[2][2]) {
        winner = states[0][0];
    }

    if (states[0][2] == states[1][1] && states[1][1] == states[2][0]) {
        winner = states[0][2];
    }

    if (winner == 1) {
        alert ("circle Won");
        clear();
    } else if (winner == 2) {
        alert ("Cross Won");
        clear();
    } else {
        let draw = 1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (states[i][j] == 0) {
                    draw = 0;
                } 
            }
        }
        if (draw == 1) {
            alert("It's a draw!");
            clear();
        }
    }

}

function clear() {
    document.location.reload();
}
drawLine();
