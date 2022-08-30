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
function colorBox(color,box)
{

    if(click) {
        box.style.setProperty("background-color", color);
    }
}
function modifyBox()
{
    const boxes = document.querySelectorAll('.box');


    boxes.forEach((box) => {

        // and for each one we add a 'click' listener
        box.addEventListener('mouseover', () => {
            colorBox(color,box);
        });
    });
}
function changeSize(size)
{
    createGrid(size);
    modifyBox()
}
function changeColor(choice)
{
    color=choice;
}
function clearGrid(){
    const boxes= document.querySelectorAll(".box");
    boxes.forEach((box) => box.style.setProperty("background-color","white"));
}
click=false;
const container = document.querySelector(".grid-container")
container.addEventListener("click", () => {
    click = !click
    printColorMode();
})
let erase=false;
const eraseButton=document.querySelector(".Erase")
eraseButton.addEventListener("click", () =>
{
    erase = !erase;
    if(erase)
    {
        prevColor=color;
        changeColor('white');
    }
    else
        changeColor(prevColor);
})

let color = 'black';

let prevColor;
function printColorMode(){
    const mode = document.querySelector(".mode");
    mode.textContent = (click) ? "Color Mode: ON" : "Color mode: OFF";
}
printColorMode();
createGrid(16);
modifyBox();

