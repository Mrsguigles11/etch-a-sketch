const grid = document.querySelector('.grid');

let squares = 16;
let squaresTotal = (squares * squares);

function createSquare(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "square");
        div.style.width = (800 / squares) + 'px';
        grid.appendChild(div);
    }
}

createSquare(squaresTotal);


