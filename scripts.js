//DEFINE CONTAINER
const container = document.querySelector(".container");
container.setAttribute("style",
    "height: 500px; width: 500px;"
);
// const gridSize = container.style.height.slice(0,-2);
// console.log(gridSize);
// console.log(container.getAttribute("style"));
// console.log(container.style.height);

//FUNCTIONS FOR CREATING GRID
function createElementsInRows(divFirstLevel, j) {
    const divSecondLevel = document.createElement("div");
    divSecondLevel.classList.add("divSecondLevel");
    divSecondLevel.classList.add(`divSecondLevelNumber${j+1}`);
    divSecondLevel.setAttribute("style",
        "flex: auto; background-color: white;"
    );
    divFirstLevel.appendChild(divSecondLevel);
};
function createRows(sidePixelCount) {
    for(i=0;i<sidePixelCount;i++){
        const divFirstLevel = document.createElement("div");
        // const pixelSize = Number(gridSize)/sidePixelCount;
        divFirstLevel.classList.add("divFirstLevel");
        divFirstLevel.classList.add(`divFirstLevelNumber${i+1}`);
        divFirstLevel.setAttribute("style",
            `display: flex; flex: auto; background-color: white;`
        );
        container.appendChild(divFirstLevel);
        for(j=0;j<sidePixelCount;j++){
            createElementsInRows(divFirstLevel, j);
        };
        
    };
    
};

//PROMPT USER FOR NUMBER OF PIXELS IN THE GRID. FOR NOT WE ARE DOING
//THIS MANUALLY AND WE WILL ADD FUNCTIONALITY LATER. 

createRows(20);
//THIS IS THE HOVER FUNCTIONALITY TO COLOR!
const divSecondLevelClass = document.querySelectorAll(".divSecondLevel");
let mouseDown = false;
let mouseOver = false;

divSecondLevelClass.forEach(divElementLogic);
function divElementLogic(item) {
    item.onmousedown = () => {
        mouseDown = true;
        console.log("mouseDown");
        item.setAttribute("style",
            "flex: auto; background-color: black;"
        );
    };
    item.onmouseup = () => {
        mouseDown = false;
        console.log("mouseUp");
    }
    item.onmouseover = () => {
        if(mouseDown == true) {
            item.setAttribute("style", 
                "flex: auto; background-color: black;"
            );
        };
    };
};


