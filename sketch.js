let canvas = document.querySelector(".canvas")
let onMouseDown = false
let inkColor = "black"

document.body.onmousedown = ()=> onMouseDown=true;
document.body.onmouseup = () => onMouseDown=false;


const column = document.createElement("div")

for (let i = 0; i < 32; i++) {
    let column = document.createElement("div")
    column.setAttribute("class","canvas-col")
    let colId = "canvas-col-" + i;
    column.setAttribute("id",colId)
    for (let j = 0; j < 32; j++) {
        let row = document.createElement("div")
        row.setAttribute("class","canvas-row")
        row.classList.add("tile")
        let tileId = "tile-"+i+"-"+j;
        row.setAttribute("id",tileId)
        column.appendChild(row)
        row.addEventListener("mousemove",(e)=>{
            if(onMouseDown) e.target.style.backgroundColor = inkColor;
        })
        row.addEventListener("click",(e)=>e.target.style.backgroundColor=inkColor)
        
    }
    canvas.appendChild(column)
    
}

function applyColor(e,color){
    if(onMouseDown) e.target.style.backgroundColor = "black";
}