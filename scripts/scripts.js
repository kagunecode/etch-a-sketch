const drawContainer = document.querySelector('.sketch');
let pixelsCheck = 0;
drawBoard();

const currentColor = document.querySelector('#colorpicker');
const eraseAll = document.querySelector('.erase-all');
const canvasSizeButton = document.querySelectorAll('.canvas-size-button');
let pixels= document.querySelectorAll(".pixel");


drawContainer.addEventListener('mouseover', colorPixel);
eraseAll.addEventListener('click', eraseBoard);
canvasSizeButton.forEach(button => button.addEventListener('click', redrawBoard))

function drawBoard(boardSize = "16x16") {
    let pixelDivider = 1;
    if (boardSize == "32x32") {
        pixelDivider = 2;
        boardSize = 32;
    } else if (boardSize == "64x64") {
        pixelDivider = 4;
        boardSize = 64;
    } else {
        pixelDivider = 1;
        boardSize = 16;
    }
    for (let j=0; j<boardSize; j++) {
        for (let i=0; i<boardSize; i++) {    
            const div = document.createElement('div');
            let pixelSize = 40 / pixelDivider;
            div.style.width = `${pixelSize}px`;
            div.style.height = `${pixelSize}px`;   
            div.classList.add('pixel')
            drawContainer.appendChild(div);
        }
    }    
    if (pixelsCheck != 0) {
        pixels = document.querySelectorAll(".pixel");
    } else {
        pixelsCheck = 1;
    }
}

function redrawBoard (e) {
    let canvasSize = drawContainer.childElementCount;
    for (let i=0; i<canvasSize; i++) {
        drawContainer.removeChild(drawContainer.lastElementChild)
    }
    drawBoard(e.target.innerText);
}

function colorPixel() {
    pixels.forEach(pixel => pixel.addEventListener('mouseover', (e) => {
        if (e.target.style.backgroundColor == "" || e.target.style.backgroundColor == "white") {
            e.target.style.backgroundColor = currentColor.value;
        }
    }))
}

function eraseBoard() {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white")
}
