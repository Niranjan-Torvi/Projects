for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{                                                       // what event, what action to be performed.   
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

    function handleclick()
{

    

   var btninnerHtml = this.innerHTML;
   makeSound(btninnerHtml);
   makeAnimation(btninnerHtml);

   
   
    
}
}



document.addEventListener("keypress", function(event){ // function(event) means action to take place after the event occurs
    makeSound(event.key)
    makeAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
    
    
                case "s":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                    
                    case "d":
                        var audio = new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
    
                        case "j":
                            var audio = new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
    
                            case "k":
                                var audio = new Audio("sounds/crash.mp3");
                                audio.play();
                                break;
    
                                case "l":
                                    var audio = new Audio("sounds/kick.mp3");
                                    audio.play();
                                    break;

                                    default: console.log(event.key);
        break;
    }
       

}

 // Adding animation to the buttons when the buttons get clicked it gives box shadow 
function makeAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); // Whenever any key gets pressed as a class so we give . + anykey 
    activeButton.classList.add("pressed");  // We add pressed class which is already declared in css file so that when key or button is pressed an event gets occured

    setTimeout(function() // This function is called so that when we press a key or button it should get back to normal version with any box shadow 
    {
        activeButton.classList.remove("pressed");
    },100);

}
   