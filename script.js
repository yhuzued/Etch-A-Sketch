const atas = document.getElementById("header");
const judul = document.createElement("div");
judul.className = "header"
judul.textContent = "Etch A Sketch Online"
atas.appendChild(judul);

const container = document.querySelector("#container");

function createGrid(dimension) {
    for (let row = 0; row < dimension; row++) {
        let gridCointainer = document.createElement("div");
        gridCointainer.className = "grid-container";
        container.appendChild(gridCointainer);
        for (let column = 0; column < dimension; column++) {
            let grid = document.createElement("div");
            grid.className = "cell";
            gridCointainer.appendChild(grid);
        }
    }
}


createGrid(16);

const element = document.querySelectorAll(".cell");
element.forEach(item => {
    item.addEventListener("mouseover", function(e){
        e.target.style = ("background-color: green");
    })
})
