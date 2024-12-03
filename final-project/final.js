function validatePassword(){
    const passwordRef = document.getElementById("password");

    //console.log(password.value);


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

const newBtn = document.createElement("button");
newBtn.innerHTML = "Login";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);