function drawBoard(boardSize = 16) {
    console.log("DRAWING BOARD!")
    let pixelDivider = 1;
    boardSize = this.innerText;
    console.log(boardSize);
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
}

function redrawBoard () {
    let canvasSize = drawContainer.childElementCount;
    console.log("Redrawing board!")
    for (let i=0; i<canvasSize; i++) {
        drawContainer.removeChild(drawContainer.lastElementChild)
    }
    drawBoard()
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

const drawContainer = document.querySelector('.sketch');
drawBoard(16, drawContainer);

const currentColor = document.querySelector('#colorpicker');
const eraseAll = document.querySelector('.erase-all');
const pixels = document.querySelectorAll('.pixel');
const canvasSizeButton = document.querySelectorAll('.canvas-size-button');


drawContainer.addEventListener('mouseover', colorPixel());
eraseAll.addEventListener('click', eraseBoard.bind());
canvasSizeButton.forEach(button => button.addEventListener('click', (e) => {
    redrawBoard();
}))

