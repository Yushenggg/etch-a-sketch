let canvas = document.querySelector("#canvas")
let onMouseDown = false
let isEraser = false
let inkColorSelector = document.querySelector("#inkColor")
let canvasSize = 32
let borderOn = true
let isRainbow = false
function inkColor() {
    if(isEraser){
        return "transparent"
    }
    if (isRainbow){
        return "rgb("+Math.random()*256+","+Math.random()*256+","+Math.random()*256+")"
    }
    return inkColorSelector.value
}


document.body.onmousedown = (e)=> {
    e.preventDefault()
    onMouseDown=true};
document.body.onmouseup = () => onMouseDown=false;


const column = document.createElement("div")

// Initiate Canvas
function createCanvas(size=32){
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div")
        column.setAttribute("class","canvas-col")
        let colId = "canvas-col-" + i;
        column.setAttribute("id",colId)
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div")
            if(borderOn){row.setAttribute("class","canvas-row border")}else{row.setAttribute("class","canvas-row")}
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
}
createCanvas(canvasSize)
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
        borderOn = false
    }else{
        e.target.classList.remove("toggle-false");
        e.target.classList.add("toggle-true")
        document.querySelectorAll(".tile").forEach((tile)=>tile.classList.add("border"))
        borderOn = true
    }
}
borderBtn.addEventListener("click",toggleBorder)

//Eraser Toggle Btn
let eraserBtn = document.querySelector("#toggleEraser")

function toggleEraser(e){
    if(!isEraser){
        e.target.classList.remove("toggle-false");
        e.target.classList.add("toggle-true")
        isEraser = true
        document.body.style.cursor = "url(./images/eraser.cur),auto"
        document.querySelectorAll(".tile").forEach((tile)=>tile.style.cursor = "url(./images/eraser.cur),auto")
    }else{
        e.target.classList.remove("toggle-true");
        e.target.classList.add("toggle-false")
        isEraser = false
        document.body.style.cursor = "default"
        document.querySelectorAll(".tile").forEach((tile)=>tile.style.cursor = "pointer")
    }
}
eraserBtn.addEventListener("click",toggleEraser)

//New Canvas
let newCanvasBtn = document.querySelector("#newCanvas")

function newCanvas(e){
    if(confirm("Create new canvas? Your current canvas will be deleted")){
        canvas.innerHTML = ""
        createCanvas(canvasSize)
    }
}

function selectSize(e){
    selected = e.target
    parent = selected.parentNode
    canvasSize = selected.value
    parent.querySelector(".selected").classList.remove("selected")
    selected.classList.add("selected")
}
document.querySelectorAll("#sizeBtn button").forEach((button)=>button.addEventListener("click",selectSize))
newCanvasBtn.addEventListener("click",newCanvas)

//Rainbow

let rainbowBtn = document.querySelector("#toggleRainbow")
function toggleRainbow(e){
    if(!isRainbow){
        e.target.classList.remove("toggle-false");
        e.target.classList.add("toggle-true")
        isRainbow = true

    }else{
        e.target.classList.remove("toggle-true");
        e.target.classList.add("toggle-false")
        isRainbow = false

    }
}
rainbowBtn.addEventListener("click",toggleRainbow)