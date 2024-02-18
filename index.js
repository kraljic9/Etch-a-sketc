const container = document.createElement("div");

container.innerText = "hello";

container.id = "container"

document.body.appendChild(container);

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
     var block = document.createElement('div');
    block.className = "block";

    block.innerText = "HELLO    "

    document.getElementById('container').appendChild(block);
    }
}

const divCount = document.querySelectorAll('div').length;
console.log("Number of divs:", divCount);

