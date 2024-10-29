//To make the it start as soon I open the page
window.onload = function startStoty(){
    //my constant to keep track of the p tag
    const storyElement = document.getElementById("story");

    //The inital prompt/question
    //Decision 1
    const closerLook = prompt(`You were walking to your kitchen to get a snack and saw a wild bunny outside. Do you want to take a closer look through the glass door? 
        \n(Enter the number of your choice)
        \n 1. Yes
        \n 2. No`);
    //If they choose yes
    if(closerLook == 1)
    {
        storyElement.innerHTML += "<br>You decided to get a closer look through the glass door";
        //Ask them to make another decision

        const watchingBunny = promt(`The bunny notices you and stops eating.
            What do you want to do?
            \n(Enter the number of your choice)
            \n 1. Stay still to keep looking at it
            \n 2. Open the door to get a closer look`);
        
            //what happens
        //if they choose to stay still
        if(watchingBunny == 1)
        {
            storyElement.innerHTML += "<br>You stayed still, and the bunny continues eating.";
            const takePhoto = confirm("Do you want to take a picture of the bunny?");
            if(takePhoto)
            {
                storyElement.innerHTML += "<br>You take a cute photo of the bunny through the glass door.";
            }
            else
            {
                storyElement.innerHTML +="<br>You decide to keep looking without taking a photo.";
            }
        }
        else if(watchingBunny==2)
        {
            //Asking them to confirm if they want to open the door
            //this is a bad choice!
            const openDoor = confirm(`Are you sure you want to open the door?`)
            if(openDoor)
                {
                    storyElement.innerHTML += "<br>The door makes a sound as you are opening it, and the bunny gets scared and runs away! :(";
                }
                else
                {
                    storyElement.innerHTML += "<br>You decide not to open the door, and the bunny keeps looking at you while it eats.";
                }
        };
        
    }
    else if(closerLook == 2)
    {
        storyElement.innerHTML += "<br>You decided to not get a closer look through the glass door. How boring!";
        const notWatchingBunny = promt(`As you decided to not look at the bunny, what do what to do next?
            \n (Enter the number of your choice)
            \n 1. Keep looking for the snack because you are hungry
            \n 2. Leave the kitchen, you are not hungry anymore`)
        //Not watching the but want to keep looking for a snack
        if(notWatchingBunny == 1)
        {
            //choose a snack
            storyElement.innerHTML += "<br>You decided to keep looking for a snack";
            const snacks = promt(`You found two types of snacks, which one do you want?
            \n (Enter the number of your choice)
            \n 1. Takis
            \n 2. Cookies`);
            //snack choices
            //if they choose takis
            if(snacks == 1)
            {
                storyElement.innerHTML += "<br>You decided to some takis, enjoy them!";
            }
            //if they choose cookies
            else if(snacks == 2)
            {
                storyElement.innerHTML += "<br>You decided to some cookies, enjoy them!";
            }
            //if they enter a wrong number
            else
            {
                storyElement.innerHTML += "<br>Invalid choice, try again!";
            }
        }
        //if they choose to leave the kitchen
        else if(notWatchingBunny == 2)
        {
            storyElement.innerHTML += "<br>You decided to not get a closer look through the glass door. How boring!";
            const anotherActivity = promt(`As you decided to leave the kitchen, what do what to do next?
                \n (Enter the number of your choice)
                \n 1. Go to Sleep
                \n 2. Do your homework`)
            //if they choose to go to sleep
            if(anotherActivity == 1)
            {
                storyElement.innerHTML += "<br>You decided to go to sleep, hope you can rest!";
            }
            //if they choose to do their hw
            else if(snacks == 2)
            {
                storyElement.innerHTML += "<br>You decided to do your homework, what a good student!";
            }
            //if they enter a wrong number
            else
            {
                storyElement.innerHTML += "<br>Invalid choice, try again!";
            }
        }
    }
    //if they choose a wrong number
    else
    {
        storyElement.innerHTML += "<br>Invalid choice, try again!";
    }


}