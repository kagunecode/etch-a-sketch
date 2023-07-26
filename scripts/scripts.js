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
const currentColor = document.querySelector('#colorpicker');
drawBoard(16, drawContainer);

const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => pixel.addEventListener('mouseover', (e) => {
    console.log(e.target.style.color == "")
    if (e.target.style.backgroundColor == "") {
        console.log(currentColor.value)
        e.target.style.backgroundColor = currentColor.value;
    } else {
    }
}))
