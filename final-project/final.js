function validatePasswordAndUsername(){
    //reference to the password
    const passwordRef = document.getElementById("password");
    //reference to the username
    const usernameRef = document.getElementById("username");
    //ref to the div with all the login info
    const logInDivRef = document.getElementById("loginInfo");

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
    const validPassword = containsNumber && containsUpperCase && isNotEmpty && isLongEnough;
    if (validPassword)
    {
        alert("Woohoo!");
        passwordRef.value = "";
        //this will hide everything related to the login info
        //which is inside a div
        logInDivRef.style.visibility = "hidden";
        //reference: freeCodeCamp.org. (2020, February 25). How to hide a conditionally? The FreeCodeCamp Forum. https://forum.freecodecamp.org/t/how-to-hide-a-div-conditionally/353436


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

      console.log(validPassword);
    
}

// const newBtn = document.createElement("button");
// newBtn.innerHTML = "Login";
// newBtn.onclick = validatePasswordAndUsername;
// document.body.appendChild(newBtn);