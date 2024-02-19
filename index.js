const container = document.getElementById('container');
const btn = document.getElementById('resetBtn')


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





