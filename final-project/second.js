// Global variable to store current user's tasks
let myTasks = []; 
//reference to the password
const passwordRef = document.getElementById("password");
//reference to the username
const usernameRef = document.getElementById("username");
//ref to the div with all the login info
const logInDivRef = document.getElementById("loginInfo");
//ref to the dashboard div
const dashboardDivRef = document.getElementById("dashboardDiv");

const theUsers = [];

//function to validate both the username and password
function validatePasswordAndUsername(){
    
    //console.log(password.value);

    //FOR THE USERNAME

    let usernameNotEmpty = false;

    //as long and they do not leave it empty it will work
    if(usernameRef.value.length >0)
    {
        usernameNotEmpty = true;
       
    }
    else{
        alert("Enter an username");
    }
    
    //FOR THE PASSWORD

    let isNotEmpty = false;
    let isLongEnough = false;
    let containsNumber = false;
    let containsUpperCase = false;

    //checks if the password has at least a character but not 8
    //basically means not long enough, but at least it is not empty
    if(passwordRef.value.length > 0 && passwordRef.value.length < 8)
    {
        isNotEmpty = true;
    }
    //not empty and long enough
    if(passwordRef.value.length >= 8)
    {
        isLongEnough = true;
        isNotEmpty = true;
    }
    
    for (let i = 0; i < passwordRef.value.length; i++)
    {
        const currentCharacter = passwordRef.value[i];
        //is there at least one number
        if(isNaN(currentCharacter)===false)
        {
            containsNumber = true;
        }
        //is there at least one lowercase letter
            
        if (currentCharacter == currentCharacter.toUpperCase() && isNaN(currentCharacter))
        {
            containsUpperCase = true;
        }
            
    } 
    const validPasswordAndUsername = containsNumber && containsUpperCase && isNotEmpty && isLongEnough && usernameNotEmpty;
    if (validPasswordAndUsername)
    {
        //alert("Woohoo!");
        passwordRef.value = "";
        //this will hide everything related to the login info
        //which is inside a div
        logInDivRef.style.display = "none";
        //maskes the dashboard appear in the screen
        dashboardDivRef.style.visibility = "visible"
        dashboardDivRef.style.display = "inline"
        //this probably will be moved to another function, not sure
        document.getElementById("welcomeTag").innerHTML = `Welcome, ${usernameRef.value}`;

        // Check if user exists
        let found = false;
        for (let i = 0; i < theUsers.length; i++) {
            if (theUsers[i].username === usernameRef.value) {
                myTasks = [...theUsers[i].tasks]; // Load tasks for this user
                found = true;
                break;
            }
        }
        // If user does not exist, create a new user
        if (!found) {
            theUsers.push({ username: usernameRef.value, tasks: [] });
            myTasks = [];
        }
        showTasks();

    }
    //in case the password is empty
    else if(isNotEmpty==false){
        alert("Enter a valid password containing at least 8 characters, a capital letter, and a number.");
    }
    //in case is not long enough (8 characters)
    else if(isLongEnough ==false){
         alert("Enter a valid password that has at least 8 characters");
    }
    //in case it is missing a capital letter
    else if (containsUpperCase== false)
    {
        alert("Enter a valid password containing at least a capital letter");
    }
    //in case it is missing a number
    else if(containsNumber == false){
        alert("Enter a valid password containing at least a number ");
    }

      console.log(validPasswordAndUsername);
    
}

//Used similar logic as the friends list we did in class (Week-8)

//refence to my list in the html
const taskListRef = document.getElementById("taskList");

//variable to track my tasks
//const myTasks = [];

//function to add tasks
function addTask(){

    //get what the user types in the prompt
    const taskText = prompt("New task:");

    //add task to my tasks list
    myTasks.push({task: taskText, category: "(No Category)", completed: false});

    // Sync tasks with `theUsers`
    for (let i = 0; i < theUsers.length; i++) {
        if (theUsers[i].username === usernameRef.value) {
            theUsers[i].tasks = [...myTasks];
            break;
        }
    }

    //call function to show them
    showTasks();
}
function removeTask(taskName){
    //Use variable to track index of task to remove
    let taskIndex;
    
    //loop through current tasks to find the taskName
    for(let i =0; i < myTasks.length; i++)
    {
        //This is saying  if it match the taskName, that's the index i want
        if(myTasks[i].name=== taskName){
            taskIndex = i;
        }
    }
    //remove the task from the list
    myTasks.splice(taskIndex, 1);

    // Sync tasks with `theUsers`
    for (let i = 0; i < theUsers.length; i++) {
        if (theUsers[i].username === usernameRef.value) {
            theUsers[i].tasks = myTasks;
            break;
        }
    }
    //call function again
    showTasks(); 

}

//function to loop through myTasks and show them on the page
function showTasks(){
    taskListRef.innerHTML = "";

    //loop through tasks
    myTasks.forEach(function(tasks, taskIndex){
        //add the tasks to the tasks list
        //added "style="display: inline"" to make them be in the same line
        //found 
        taskListRef.innerHTML += `<li class="task">
    <span onclick="markingComplete('${taskIndex}', event.currentTarget)" style="${tasks.completed ? 'text-decoration: line-through;' : ''}"><h3 style="display: inline;">${tasks.task}</h3><h3 style="display: inline"> ${tasks.category}</h3></span>
    <br>
    
    <button class="red" onclick="removeTask('${tasks.task}')">Remove</button>
    <button class="blue" onclick="changeText('${tasks.task}')">Change Text </button>
    <select onchange="changeCategory('${taskIndex}', event.currentTarget)" name="categories" id="categories">
    <option value="category">Choose category</option>
    <option value="outdoors">Outdoor</option>
    <option value="indoor">Indoor</option>
    </select>
    </li>`;
    });
}

//function to change the text inside the task
function changeText(taskName) {

    //used a forloop to loop through the tasks to find the one that matches
    for (let i = 0; i < myTasks.length; i++) {
        if (myTasks[i].task === taskName) {
            //to ask the user for the new task
            //added the myTasks[i].task to make sure it is kept in the prompt like in the demo

            const newTaskName = prompt("New Name", myTasks[i].task);

            //to update the text inside the task
            myTasks[i].task = newTaskName;

            // //calling the function againn
            // showTasks();

            // //had to add this to make it stop
            // return;
            break;
        }
    }
    // Sync tasks with `theUsers`
    for (let i = 0; i < theUsers.length; i++) {
        if (theUsers[i].username === usernameRef.value) {
            theUsers[i].tasks = myTasks;
            break;
        }
    }
    showTasks();
}

//to change the categories
//used similar logic to the changing color function in the friend list we did in class
//just used the `` to make sure i still keep the cateogy inside the ()

function changeCategory(taskIndex, newCategory){
    
    const taskName = myTasks[taskIndex].task;

    //to get the new category
    myTasks.splice(taskIndex, 1, {task: taskName, category: `(${newCategory.value})`});
    showTasks();

}


function markingComplete(taskIndex, element) {
    // Toggle the strike-through style on the clicked task
    const h3Elements = element.querySelectorAll('h3');
    h3Elements.forEach(h3 => {
        if (h3.style.textDecoration === 'line-through') {
            h3.style.textDecoration = 'none';
        } else {
            h3.style.textDecoration = 'line-through';
        }
    });
}


//function to log out
function logOut()
{
    usernameRef.value = "";
    passwordRef.value = "";
    //this will hide everything related to the dashboard
    dashboardDivRef.style.display = "none";
    //maskes the login appear in the screen
    logInDivRef.style.visibility = "visible"
    logInDivRef.style.display = "inline"

    myTasks = [];
    
}