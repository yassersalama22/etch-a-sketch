const defaultGridSize = 16;
const minimumGridSize = 4;
const maximumGridSize = 100;
const gridWidthInPixels = 600;
const gridHeightInPixels = 600;

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
    this.style.background = "orange";
}

function gridSizePrompt() {
    let size = prompt("Please enter grid size (between 4 and 100)");
    while(isNaN(size) || size===null || (Number(size)< 4 || Number(size) > 100))
    {
        size = prompt("Please enter grid size (between 4 and 100)");
    }

    createDrawingGrid("container",Number(size),)
}
