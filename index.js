const container = document.createElement("div");

container.id = "container"

document.body.appendChild(container);


for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
    let block = document.createElement('div');
    block.className = "block";

    document.getElementById('container').appendChild(block);    

    block.addEventListener('mouseover', function() {
        block.style.backgroundColor = 'black'
    })
}
}







