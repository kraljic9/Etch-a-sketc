const container = document.getElementById('container');
const btn = document.getElementById('resetBtn');
const btnColor = document.getElementById('colorBtn');
const btnDark = document.getElementById('dark')

function createGrid(size) {
     container.innerText = "";
     container.style.width = `${size * 3}rem`;
     for (let i = 0; i < size * size; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block);

        block.addEventListener('mouseover', function() {
            block.style.backgroundColor = 'black';
        })
        
     }

}

btn.addEventListener('click', () => {
    let newSize = prompt('How many block would you like inside your grid?')
    newSize = parseInt(newSize);

    if(!isNaN(newSize) && newSize > 0 && newSize < 100) {
        createGrid(newSize);
    } else {
        alert('Put in a valid number that is more then 0 and less then 100');
    }
})

btnColor.addEventListener('click', () => {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = getRandomColor();
        });
    });
 });



function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}


function darker(block) {
    let currentColor = block.style.backgroundColor;
    let rgbaValues = currentColor.match(/\d+/g);
    let currentOpacity = parseFloat(rgbaValues[3]);
    let newOpacity = currentOpacity + 0.1;
    if (newOpacity > 1) {
        newOpacity = 1;
    }
    block.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
}

btnDark.addEventListener('click', () => {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            darker();
        });
    });
});


    
    






