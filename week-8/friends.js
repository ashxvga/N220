//Reference variables
const friendNameInput = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");

// Variable to track my friends
const myFriends = [];

//Function for adding friend
function addFriend(){
    //get the name the user typed in
    const nameValue = friendNameInput.value;
    //console.log(nameValue);

    //add friend to my Friend list
    myFriends.push({name: nameValue, color: "black"});
    //call function
    showFriends();

    //add the name to the friends list
    // friendsListRef.innerHTML += `<li>
    // ${nameValue} 
    // <button onclick="removeFriend('${nameValue}')">X</button>
    // </li>`;

    //clear the name the user typed
    friendNameInput.value = "";
}

function removeFriend(friendName){
    //Use variable to track index of friend to remove
    let friendIndex;
    
    //loop through current friends to find the friendName
    for(let i =0; i < myFriends.length; i++)
    {
        if(myFriends[i].name=== friendName){ //This is saying  if it match the name, that's the index i want
            friendIndex = i;
        }
    }
    //remove the person from the list
    myFriends.splice(friendIndex, 1);
    //call function
    showFriends();

}

//function to loop through myFriends and show them on the page
function showFriends(){
    //clear pages old friends list
    friendsListRef.innerHTML = "";
    //loop through friends
    myFriends.forEach(function(friend, friendIndex){
        //add the name to the friends list
        friendsListRef.innerHTML += `<li>
    <span style = "color: ${friend.color}">${friend.name}</span>
    <button onclick="removeFriend('${friend.name}')">X</button>
    <button onclick="moveFriend('${friend.name}', true)">&#8593;</button>
    <button onclick="moveFriend('${friend.name}', false)">&#8595;</button>
    <input 
    type="color" 
    name="friendTextColor${friendIndex}" 
    id="friendTextColor${friendIndex}"
    onchange="changeFriendTextColor('${friendIndex}', event.currentTarget)"/>
    </li>`;
    });
}

//function to clear list of friends
function clearList(){
    myFriends.splice(0, myFriends.length);
    //call function
    showFriends();
}


//function to move friend ranking
function moveFriend(friendName, isMovingUp){
    let friendIndex;
    let friendNewIndex;
    for(let i=0; i < myFriends.length;i++){
        if(myFriends[i].name=== friendName){
            friendIndex = i;
            //['A', 'B', 'C'] move 'B' up 1 space
            //index of 'B' is originally 1
            //This is what the result should be 
            //['B','A','C'] so the new index would be 0
            if(isMovingUp){
                friendNewIndex = friendIndex - 1;
            }
            //['A', 'B', 'C'] move 'B' down 1 space
            //index is originally 1
            //['A', 'B', 'C'] so the new index is 2
            else{
                friendNewIndex = friendIndex +1;
            }
        }
    }
    //remove friend from old space 
    myFriends.splice(friendIndex, 1);
    //add friend to new space
    myFriends.splice(friendNewIndex, 0, {name: friendName, color: "black"});
    showFriends();
}

function changeFriendTextColor(friendIndex, inputRef){
    //console.log(friendName + " text color to " + inputRef.value);
    const friendName = myFriends[friendIndex].name;
    myFriends.splice(friendIndex, 1, {name: friendName, color: inputRef.value});
    showFriends();
}