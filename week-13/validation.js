function validatePassword(){
    const passwordRef = document.getElementById("password");

    //console.log(password.value);

    //let validPassword = false;
    let containsNumber = false;
    let containsLowercase = false;

    console.log("Password: ", passwordRef.value);
    //let constainLowerCase = password.value == password.value.toLowerCase();
    for (let i = 0; i < passwordRef.value.length; i++)
    {
        //console.log(isNaN(password.value[i]));
        const currentCharacter = passwordRef.value[i];
        //is there at least one number
        if(isNaN(currentCharacter)===false)
        {
            containsNumber = true;
        }
        //is there at least one lowercase letter
        if (currentCharacter == currentCharacter.toLowerCase() && isNaN(currentCharacter))
        {
            containsLowercase = true;
        }
        //console.log(isNaN(currentCharacter)===false);
    }
    const validPassword = containsNumber && containsLowercase;
    if (validPassword) {
        alert("Woohoo!");
        passwordRef.value = "";
      } else {
        alert("Do better");
      }
      console.log(validPassword);
    
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Check Password";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);