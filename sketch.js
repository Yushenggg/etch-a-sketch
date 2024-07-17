let canvas = document.querySelector("#canvas")
let onMouseDown = false
let isEraser = false
let inkColorSelector = document.querySelector("#inkColor")
function inkColor() {return !isEraser ?inkColorSelector.value:"transparent"}


document.body.onmousedown = (e)=> {
    e.preventDefault()
    onMouseDown=true};
document.body.onmouseup = () => onMouseDown=false;


const column = document.createElement("div")

// Initiate Canvas
for (let i = 0; i < 32; i++) {
    let column = document.createElement("div")
    column.setAttribute("class","canvas-col")
    let colId = "canvas-col-" + i;
    column.setAttribute("id",colId)
    for (let j = 0; j < 32; j++) {
        let row = document.createElement("div")
        row.setAttribute("class","canvas-row border")
        row.setAttribute("draggable", false)
        row.classList.add("tile")
        let tileId = "tile-"+i+"-"+j;
        row.setAttribute("id",tileId)

        column.appendChild(row)
        row.addEventListener("mouseover",(e)=>{
            if(onMouseDown) e.target.style.backgroundColor = inkColor();
        })
        row.addEventListener("click",(e)=>e.target.style.backgroundColor=inkColor())
        
    }
    canvas.appendChild(column)
    
}

// Clear Btn
let clearBtn = document.querySelector("#clearBtn")
function clearBoard(){
    if(confirm("Are you sure you want to clear your canvas?"))document.querySelectorAll(".tile").forEach((tile)=>tile.style.backgroundColor="transparent");
}
clearBtn.addEventListener("click",clearBoard)

//Border Toggle Btn
let borderBtn = document.querySelector("#toggleBorder");

function toggleBorder(e){
    if(e.target.classList.contains("toggle-true")){
        e.target.classList.remove("toggle-true");
        e.target.classList.add("toggle-false")
        document.querySelectorAll(".tile").forEach((tile)=>tile.classList.remove("border"))
    }else{
        e.target.classList.remove("toggle-false");
        e.target.classList.add("toggle-true")
        document.querySelectorAll(".tile").forEach((tile)=>tile.classList.add("border"))
    }
}
borderBtn.addEventListener("click",toggleBorder)

//Eraser Toggle Btn
let eraserBtn = document.querySelector("#toggleEraser")

function toggleEraser(e){
    if(e.target.classList.contains("toggle-false")){
        e.target.classList.remove("toggle-false");
        e.target.classList.add("toggle-true")
        isEraser = true
        
    }else{
        e.target.classList.remove("toggle-true");
        e.target.classList.add("toggle-false")
        isEraser = false
    }
}
eraserBtn.addEventListener("click",toggleEraser)




