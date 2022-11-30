const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


document.addEventListener('click', mouseClick);

function mouseClick(e) {

}



const linePadding = 20;
const lineSpacing = (canvas.width - linePadding*2)/3;
const lineLength = canvas.width - linePadding*2;



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



drawLine();