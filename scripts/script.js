const defaultGridSize = 16;
const minimumGridSize = 4;
const maximumGridSize = 100;
const gridStepValue = 1;
const gridWidthInPixels = 600;
const gridHeightInPixels = 600;

const gridSizeSelector = document.getElementById("gridSizeRangeSelector");
const rangeSelectedValue = document.getElementById("rangeSelectedValue");

gridSizeSelector.setAttribute("min",minimumGridSize);
gridSizeSelector.setAttribute("max",maximumGridSize);
gridSizeSelector.setAttribute("value",defaultGridSize);
gridSizeSelector.setAttribute("step",gridStepValue);

rangeSelectedValue.innerText = defaultGridSize;

createDrawingGrid("container", defaultGridSize);

function createDrawingGrid(parentElementId, size) {

    const parentElement = document.getElementById(parentElementId);

    if (size < minimumGridSize || size > maximumGridSize) {
        console.log(`Size (${size}) should be between ${minimumGridSize} and ${maximumGridSize}!`);
        return;
    }

    if (parentElement === null) {
        console.log(`Parent element (${parentElementId}) does not exists!`);
        return;
    }

    // clear the grid before start creating a new one!
    while(parentElement.hasChildNodes()){
        parentElement.removeChild(parentElement.firstChild);
    }

    for (let index = 0; index < Math.pow(size, 2); index++) {
        const sketchDiv = document.createElement("div");
        sketchDiv.style.width = gridWidthInPixels / size + "px";
        sketchDiv.style.height = gridHeightInPixels / size + "px";
        sketchDiv.addEventListener("mouseover",sketchDivMouseOverHandler);
        parentElement.appendChild(sketchDiv);
    }
}

function sketchDivMouseOverHandler() {
    this.style.background = randomRgbColor();
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
}


gridSizeSelector.addEventListener("change",(event)=>{
    createDrawingGrid("container",event.target.value);
    rangeSelectedValue.innerText = event.target.value;
});
gridSizeSelector.addEventListener("input",(event)=>{
    rangeSelectedValue.innerText = event.target.value;
});