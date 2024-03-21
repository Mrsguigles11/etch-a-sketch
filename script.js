const grid = document.querySelector('.grid');
const container = document.querySelector('.container');

let squaresRoot = 10;
let squaresTotal = (squaresRoot * squaresRoot);

function createSquare(num) {
    for (let i = 0; i < squaresTotal; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "square");
        div.style.width = (700 / num) + 'px';
        grid.appendChild(div);
    }
}

createSquare(squaresRoot);

let squares = document.querySelectorAll('#square');

function squareHover() {
    for (const square of squares) {
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
})} }

squareHover();


let newGrid = document.querySelector(".newGrid");

newGrid.addEventListener('click', () => {
    let userNumber = Number(prompt("Choose a number to set the size of the new grid!"));
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
    squaresTotal = (userNumber * userNumber);
    createSquare(userNumber);
    squares = document.querySelectorAll('#square');
    squareHover();
})
