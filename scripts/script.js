function createGrid(size){
    const container = document.querySelector(".grid-container")
    const boxes= document.querySelectorAll(".box");
    boxes.forEach((box) => box.remove)
    for(let i=0;i<size*size;i++) {
        const box = document.createElement("div");
        container.append(box);
        box.classList.add("box");
    }
    container.style.setProperty('grid-template-columns',`repeat(${size},1fr)`);


}
function changeColor()
{

    if(click) {
        console.log("intra");
        this.style.setProperty("background-color", "black");
    }
}
function modifyBox()
{
    const boxes = document.querySelectorAll('.box');


    boxes.forEach((box) => {

        // and for each one we add a 'click' listener
        box.addEventListener('mouseover', changeColor);
        box.addEventListener('mouseover', changeColor);
    });
}
function changeSize(size)
{
    createGrid(size);
    modifyBox()
}
let click = false;
const container = document.querySelector(".grid-container")
container.addEventListener("click", () => {
    click = !click
    console.log(click)
})
createGrid(16);
modifyBox();