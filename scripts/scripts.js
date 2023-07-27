const drawContainer = document.querySelector('.sketch');
let currentColor = document.querySelector('#colorpicker');
const eraseAll = document.querySelector('.erase-all');
const canvasSizeButton = document.querySelectorAll('.canvas-size-button');
const rainbowButton = document.querySelector('.rainbow-button');
const overlapButton = document.querySelector('.overlap-button')
let pixelsCheck = 0;
let rainbowToggle = 0;
let overlapToggle = 0;
drawBoard();

let pixels= document.querySelectorAll(".pixel");


drawContainer.addEventListener('mouseover', colorPixel);
eraseAll.addEventListener('click', eraseBoard);
canvasSizeButton.forEach(button => button.addEventListener('click', redrawBoard))
rainbowButton.addEventListener('click', rainbowMode);
overlapButton.addEventListener('click', overlapMode);

function drawBoard(boardSize = "16x16") {
    let pixelDivider = 1;
    if (boardSize == "32x32") {
        pixelDivider = 2;
        boardSize = 32;
        canvasSizeButton.item(0).classList.remove("button-selected");
        canvasSizeButton.item(1).classList.add("button-selected");
        canvasSizeButton.item(2).classList.remove("button-selected");
    } else if (boardSize == "64x64") {
        pixelDivider = 4;
        boardSize = 64;
        canvasSizeButton.item(0).classList.remove("button-selected");
        canvasSizeButton.item(1).classList.remove("button-selected");
        canvasSizeButton.item(2).classList.add("button-selected");
    } else {
        pixelDivider = 1;
        boardSize = 16;
        canvasSizeButton.item(0).classList.add("button-selected");
        canvasSizeButton.item(1).classList.remove("button-selected");
        canvasSizeButton.item(2).classList.remove("button-selected");
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
        /*if (e.target.style.backgroundColor == "" || e.target.style.backgroundColor == "white") {
            e.target.style.backgroundColor = currentColor.value;
        }*/
        let colour = "";
        if (rainbowToggle == 0){
            colour = currentColor.value;
        } else {
            colour = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        }
        console.log(e.target.style.backgroundColor)

        if (overlapToggle == 0) {
            if (e.target.style.backgroundColor == "" || e.target.style.backgroundColor == "white") {
                e.target.style.backgroundColor = colour;  
            }              
        } else {
            e.target.style.backgroundColor = colour;
        }
    }))
}

function eraseBoard() {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white")
}

function rainbowMode() {
    if (rainbowToggle == 0) {
        rainbowToggle = 1;
        rainbowButton.classList.add('button-selected');
    } else {
        rainbowToggle = 0;
        rainbowButton.classList.remove('button-selected');
    }
}

function overlapMode() {
    if (overlapToggle == 0) {
        overlapToggle = 1;
        overlapButton.classList.add('button-selected');
    } else {
        overlapToggle = 0;
        overlapButton.classList.remove('button-selected');
    }
}
