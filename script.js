//create header
const atas = document.getElementById("header");

const judul = document.createElement("div");
judul.className = "headerItem"
judul.textContent = "Etch A Sketch Online"
atas.appendChild(judul);

const button = document.createElement("button");

button.textContent = "Resize Canvas";
button.className = "headerItem";
atas.appendChild(button);

//create canvas
const container = document.querySelector("#container");
createGrid(16);

//change color when mouseover
const element = document.querySelectorAll(".cell");
changeBackgroundColor(element);

//change grid size
resizeGrid();


// function
function createGrid(dimension) {
    for (let row = 0; row < dimension; row++) {
        let gridCointainer = document.createElement("div");
        gridCointainer.className = "grid-container";
        container.appendChild(gridCointainer);
        for (let column = 0; column < dimension; column++) {
            let grid = document.createElement("div");
            grid.className = "cell";
            grid.style.cssText = `height: ${360 / dimension}px; width: ${360 / dimension}px`;
            gridCointainer.appendChild(grid);
        }
    }
}

function gridRemove(){
    document.querySelectorAll(".grid-container").forEach(item =>{
        item.remove();
    })
}

function changeBackgroundColor(element){
    element.forEach(item =>{
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "green";
        });
    })
}

function resizeGrid(){
    button.addEventListener("click", function(e){
        let howManySquare = prompt("Grid size? Please  input value between 1 an 100");
        if (howManySquare > 100 || howManySquare < 1){
            alert("Your input is too big or too small");
        } else {
            gridRemove();
            createGrid(howManySquare);
            const element = document.querySelectorAll(".cell");
            changeBackgroundColor(element);
        }
    })
}