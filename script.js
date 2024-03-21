const grid = document.querySelector('.grid');

let squaresRoot = 4;
let squaresTotal = (squaresRoot * squaresRoot);

function createSquare(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "square");
        div.style.width = (800 / squaresRoot) + 'px';
        grid.appendChild(div);
    }
}

createSquare(squaresTotal);

let squares = document.querySelectorAll('#square');

for (const square of squares) {
square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "black";
})}
