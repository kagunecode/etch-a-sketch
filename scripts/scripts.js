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

const drawContainer = document.querySelector('.sketch');
drawBoard(16, drawContainer);

const currentColor = document.querySelector('#colorpicker');
const eraseAll = document.querySelector('.erase-all');
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', (e) => {
    if (e.target.style.backgroundColor == "") {
        console.log('im working')
        e.target.style.backgroundColor = currentColor.value;
    } else {
    }
}));
