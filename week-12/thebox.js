//console.log('Dont look in the box');
const theBoxRef = document.getElementById("theBox");
const boxFormRef = document.getElementById("boxForm");
//console.log(boxFormRef);

theBoxRef.style.border = "3px solid black";
theBoxRef.style.minHeight = "300px";
theBoxRef.style.display = "grid";
theBoxRef.style.gridTemplateColumns = "1fr 1fr 1fr";

function addToBox(){
    const newThing = prompt("Thing to Add: ");

    const newDiv= document.createElement("div");
    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    newDiv.style.backgroundColor = "lightgrey";
    newDiv.style.margin = "5px";
    //adds the class as box
    newDiv.classList.add("box");
    newDiv.innerHTML = newThing;

    newDiv.dataset.text = newThing;

    theBoxRef.appendChild(newDiv);
    const allBoxes = document.querySelectorAll(".box");
    for(let i =0; i < allBoxes.length; i++)
        {
            const box = allBoxes[i];
            box.onclick = clickBox;
        }
}

function clickBox(e)
{
    if(e.currentTarget.style.backgroundColor === "red"){
        e.currentTarget.style.backgroundColor = "lightgrey";
    }
    else
    {
        e.currentTarget.style.backgroundColor = "red";
    }
    //console.log(e.currentTarget);
    //e.currentTarget.style.backgroundColor = "red";

    //debugger;

    boxFormRef.style.display = "block";
    document.getElementById("boxText").value = e.currentTarget.dataset.text;
    document.getElementById("changeBox").onclick = changeText.bind(e.currentTarget);
}

function changeText()
{
    //console.log(this);
    this.innerHTML = document.getElementById("boxText").value;

}

function toggleTheBoxHidden()
{
    if(theBoxRef.style.display !== "none")
    {
        theBoxRef.style.display = "none";
    }
    else
    {
        theBoxRef.style.display = "grid";
    }
    //theBoxRef.outerHTML += `<button onclick="toggleTheBoxHidden()"> Toggle Hidden </button>`;
}
