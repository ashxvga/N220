//To make the it start as soon I open the page
window.onload = function startStory(){
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

        const watchingBunny = prompt(`The bunny notices you and stops eating. What do you want to do?
            \n(Enter the number of your choice)
            \n 1. Stay still to keep looking at it
            \n 2. Open the door to get a closer look`);
        
            //what happens
        //if they choose to stay still
        if(watchingBunny == 1)
        {
            storyElement.innerHTML += "<br>You stayed still, and the bunny continues eating.";
            const takePhoto = prompt(`Do you want to take a picture of the bunny?
                \n(Enter the number of your choice)
                \n 1. Yes
                \n 2. No`);
            //if they decide to take a pic
            if(takePhoto == 1)
            {
                storyElement.innerHTML += "<br>You decided to take a photo of the bunny through the glass door.";
                //extra credit
                //my three tools: zoom camera, carrots, apples
                const toolChoice = prompt(`To interact more with the bunny, choose a tool to use:
                    \n(Enter the number of your choice)
                    \n 1. Phone zoom
                    \n 2. Carrots
                    \n 3. Apples`);
                //if they choose the zoom    
                if(toolChoice === "1")
                {
                    storyElement.innerHTML += "<br>You got a better look and take a cute picture of the bunny using the zoom on your phone!";
                    //a picture will show up (Actual picture from my story)
                    document.getElementById("imgPic").src = "BUNNYPIC.jpeg"
                }
                //if they choose the carrots
                else if(toolChoice == "2")
                {
                    storyElement.innerHTML += "<br>You hold up some little pieces carrots. The bunny notices and looks interested but doesn’t get any closer.";
                }
                //if they choose the apples
                else if(toolChoice == "3")
                {
                    storyElement.innerHTML +="<br>You hold up some pieces of apple, but the bunny seems uninterested and continues eating the grass.";
                }
                //if they choose a wrong number 
                else
                {
                    storyElement.innerHTML +="<br>Invalid choice. The bunny continues eating without noticing you.";
                }
            }
            //not taking picture, just looking at it
            else if(takePhoto == 2)
            {
                storyElement.innerHTML +="<br>You decide to keep looking without taking a photo.";
            }
            //they choose the a wrong number
            else
            {
                storyElement.innerHTML += "<br>Invalid choice, try again!";
            }
        }
        else if(watchingBunny==2)
        {
            //Asking them to confirm if they want to open the door
            //this is a bad choice!
            const openDoor = confirm(`Are you sure you want to open the door?`)
            if(openDoor)
                {
                    storyElement.innerHTML += "<br>The door makes a sound as you are opening it, and the bunny gets scared and runs away! Try again :(";
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
        const notWatchingBunny = prompt(`As you decided to not look at the bunny, what do what to do next?
            \n (Enter the number of your choice)
            \n 1. Keep looking for the snack because you are hungry
            \n 2. Leave the kitchen, you are not hungry anymore`)
        //Not watching the but want to keep looking for a snack
        if(notWatchingBunny == 1)
        {
            //choose a snack
            storyElement.innerHTML += "<br>You decided to keep looking for a snack";
            const snacks = prompt(`You found two types of snacks, which one do you want?
            \n (Enter the number of your choice)
            \n 1. Takis
            \n 2. Cookies`);
            //snack choices
            //if they choose takis
            if(snacks == 1)
            {
                storyElement.innerHTML += "<br>You decided to eat some takis, enjoy them!";
                const drinks = prompt(`Now you found two types of drinks, which one do you want?
                    \n (Enter the number of your choice)
                    \n 1. Soda
                    \n 2. Juice`);
                    //if they choose soda
                    if(drinks == 1)
                    {
                        storyElement.innerHTML += "<br>You decided to drink some soda, enjoy it!";
                    }
                    //if they choose juice
                    else if(drinks == 2)
                    {
                        storyElement.innerHTML += "<br>You decided to drink some juice, enjoy it!";
                    }
                    //if they choose wrong number
                    else
                    {
                        storyElement.innerHTML += "<br>Invalid choice, try again!";
                    }
            }
            //if they choose cookies
            else if(snacks == 2)
            {
                storyElement.innerHTML += "<br>You decided to eat some cookies, enjoy them!";
                const drinks = prompt(`Now you found two types of drinks, which one do you want?
                    \n (Enter the number of your choice)
                    \n 1. Soda
                    \n 2. Milk`);
                    //if they choose soda
                    if(drinks == 1)
                    {
                        storyElement.innerHTML += "<br>You decided to drink some soda, enjoy it!";
                    }
                    //if they choose juice
                    else if(drinks == 2)
                    {
                        storyElement.innerHTML += "<br>You decided to drink some milk, enjoy it!";
                    }
                    //if they choose wrong number
                    else
                    {
                        storyElement.innerHTML += "<br>Invalid choice, try again!";
                    }
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
            const anotherActivity = prompt(`As you decided to leave the kitchen, what do what to do next?
                \n (Enter the number of your choice)
                \n 1. Go to Sleep
                \n 2. Do your homework`)
            //if they choose to go to sleep
            if(anotherActivity == 1)
            {
                storyElement.innerHTML += "<br>You decided to go to sleep!";
                const sleepOption = prompt(`How long will you sleep?
                    \n (Enter the number of your choice)
                    \n 1. 1-3 hours
                    \n 2. 4-5 hours`);
                    //if they choose 1-3h
                    if(sleepOption == 1)
                    {
                        storyElement.innerHTML += "<br>You decided to sleep for 1-3 hours, hope you can rest!";
                    }
                    //if they choose 4-5
                    else if(sleepOption == 2)
                    {
                        storyElement.innerHTML += "<br>You decided to sleep for 4-5 hours, hope you can rest!";
                    }
                    //if they choose wrong number
                    else
                    {
                        storyElement.innerHTML += "<br>Invalid choice, try again!";
                    }
            }
            //if they choose to do their hw
            else if(anotherActivity == 2)
            {
                storyElement.innerHTML += "<br>You decided to do your homework, what a good student!";
                const homeworkOption = prompt(`How long will you do homework?
                    \n (Enter the number of your choice)
                    \n 1. 1-3 hours
                    \n 2. 4-5 hours`);
                    //if they choose 1-3h
                    if(homeworkOption == 1)
                    {
                        storyElement.innerHTML += "<br>You decided to do hw for 1-3 hours, hope you get a good grade!";
                    }
                    //if they choose 1-5h
                    else if(homeworkOption == 2)
                    {
                        storyElement.innerHTML += "<br>You decided to do hw for 4-5 hours, hope you get a good grade!";
                    }
                    //if they choose wrong number
                    else
                    {
                        storyElement.innerHTML += "<br>Invalid choice, try again!";
                    }
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