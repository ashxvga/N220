/**
 * @type {{ currentColor: String, lastColor: String }[]}
 * @description This is a list of colors that the user added
 */
//array
const userColors = [];

/**
 * 
 * Get's the color from user input to add to the userColors list (array)
 */
//function to add new color
function addNewColorItem(){
    //reference variable
    const newColorRef = document.getElementById("newColorItem");
    const newColorValue = newColorRef.value;
    //console.log(newColorRef.value)
    userColors.push({currentColor: newColorValue});
    newColorRef.value = "#000000";

    showUserColors();
}
/**
 * @description Loops through userColors list and populates them on the page
 */
function showUserColors(){
    //reference variable'
    const colorSquares = document.getElementById("color-squares");
    colorSquares.innerHTML = "";

    for(let i =0; i < userColors.length; i++)
    {
        const userColor = userColors[i];
        colorSquares.innerHTML += `
        <div style="height: 200px; width: 200px; background-color: ${userColor.currentColor}" onclick="openColorChanger(${i})">
        <input
        type="color" 
        id="user-color-${i}" 
        name="user-color-${i}" 
        hidden
        value="${userColor.currentColor}"
        onchange="changeUserColor(${i})"
        />
        </div>
        <button onclick="revertUserColor(${i})"> Last Color</button>
        `;
    }

}

function changeUserColor(userColorIndex){
    const userColorRef = document.getElementById(`user-color-${userColorIndex}`);
    //console.log(userColorRef.value);
    const lastColor = userColors[userColorIndex].currentColor;
    const newUserColor = {
        currentColor: userColorRef.value,
        lastColor: lastColor,
    };
    userColors.splice(userColorIndex, 1, newUserColor);
    showUserColors();
}
function revertUserColor(userColorIndex){
    const lastColor = userColors[userColorIndex].lastColor;
    if(lastColor){
        const newUserColor = {
            currentColor: lastColor,
            lastColor: "",
        };
        userColors.splice(userColorIndex, 1, newUserColor);
        showUserColors();

    }
}

function openColorChanger(userColorIndex){
    //console.log(userColorIndex)
    document.getElementById(`user-color-${userColorIndex}`).click();
}