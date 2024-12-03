function validatePassword(){
    const passwordRef = document.getElementById("password");

    //console.log(password.value);

    //let validPassword = false;
    let isLongEnough = false;
    let containsNumber = false;
    let containsUpperCase = false;

    if(passwordRef.value.length >= 8)
    {
        isLongEnough = true;
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
    // if(passwordRef.value.length===0)
    // {
    //     alert("Enter a valid password containing at least 8 characters, a capital letter, and a number.");
    // }
    // else if(containsUpperCase== false){
    //     alert("Enter a valid password containing at least a capital letter");
    // }
    // else if(containsNumber == false)
    // {
    //     alert("Enter a valid password containing at least a number ");
    // }
    
    const validPassword = containsNumber && containsUpperCase && isLongEnough;
    if (validPassword)
    {
        alert("Woohoo!");
        passwordRef.value = "";
    }
    else if(passwordRef.value.length===0){
        alert("Enter a valid password containing at least 8 characters, a capital letter, and a number.");
    }
    // else if(passwordRef.value.length> 0 && < 8){
    //     alert("Enter a valid password containing at least 8 characters, a capital letter, and a number.");
    // }
    else if (containsUpperCase== false)
    {
        alert("Enter a valid password containing at least a capital letter");
    }
    else if(containsNumber == false){
        alert("Enter a valid password containing at least a number ");
    }

      console.log(validPassword);
    
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Login";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);