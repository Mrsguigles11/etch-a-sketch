const grid = document.querySelector('.grid');
const container = document.querySelector('.container');

let squaresRoot = 4;
let squaresTotal = (squaresRoot * squaresRoot);

function createSquare(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "square");
        div.style.width = (700 / squaresRoot) + 'px';
        grid.appendChild(div);
    }
}

createSquare(squaresTotal);

let squares = document.querySelectorAll('#square');

for (const square of squares) {
square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "black";
})}


let newGrid = document.querySelector(".newGrid");

newGrid.addEventListener('click', () => {
    let userNumber = Number(prompt("Choose a number to set the size of the new grid!"));
    console.log(userNumber);
})
