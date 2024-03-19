const container = document.querySelector('.container');

let squares = 16;

function createSquare(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
    }
}

createSquare(squares);

