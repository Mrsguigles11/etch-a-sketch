const grid = document.querySelector('.grid');
const container = document.querySelector('.container');
const newGrid = document.querySelector(".newGrid");
const reset = document.querySelector(".reset");


function createSquare(num) {
    for (let i = 0; i < (num * num); i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "square");
        div.style.width = (700 / num) + 'px';
        grid.appendChild(div);
    }
}

createSquare(4);

function squareHover() {
    let squares = document.querySelectorAll('#square');
    for (const square of squares) {
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
})} }

squareHover();


newGrid.addEventListener('click', () => {
    let userNumber = Number(prompt("Choose a number to set the size of the new grid!"));

    if (userNumber === 0) {
        return;
    }

    while (userNumber > 100) {
        alert("Please dont choose more than 100!");
        userNumber = Number(prompt("Choose a number to set the size of the new grid!"));
    }
    
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
    createSquare(userNumber);
    squareHover();
})

reset.addEventListener('click', () => {
    let squares = document.querySelectorAll('#square');
    for (const square of squares) {
        square.style.backgroundColor = "white";
    }
})
