function drawBoard(boardSize = 16, body) {
    for (let j=0; j<boardSize; j++) {
        for (let i=0; i<boardSize; i++) {    
            const div = document.createElement('div');
            div.style.width = '40px';
            div.style.height = '40px';   
            div.classList.add('pixel')
            body.appendChild(div);
        }
    }
}

const drawContainer = document.querySelector('.container');
drawBoard(16, drawContainer);

const pixels = document.querySelectorAll('.pixel');
console.log(pixels)
pixels.forEach(pixel => pixel.addEventListener('mouseover', (e) => {
    console.log(e);
    e.target.classList.add('pixel-red');
}))
