function createGrid(){
    const container = document.querySelector(".grid-container")
    for(let i=0;i<256;i++) {
        const box = document.createElement("div");
        container.append(box);
        box.classList.add("box");
    }
    container.style.setProperty('grid-template-columns','repeat(16,1fr)');
    container.style.setProperty('grid-template-columns','repeat(16,1fr)');

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

let click = false;
const container = document.querySelector(".grid-container")
container.addEventListener("click", () => {
    click = !click
    console.log(click)
})
createGrid();
modifyBox();