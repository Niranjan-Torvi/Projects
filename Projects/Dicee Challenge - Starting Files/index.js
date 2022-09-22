var play1 = Math.floor(Math.random()* 6 + 1); // Generates a random number for dice 1
var play2 = Math.floor(Math.random() * 6 + 1); // Generates a random number for dice 2
if(play1 > play2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS THE GAME!!";
}

else if(play2 > play1)
{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS THE GAME!!";
}
else{
    document.querySelector("h1").innerHTML = " GAME DRAW!!";
}

                                             //Changing old src to new src which can be random path of any dice       
document.querySelector(".img1").setAttribute("src","images/dice" + play1 + ".png"); // Generate a random dice number image for dice 1  
document.querySelector(".img2").setAttribute("src","images/dice" + play2 + ".png"); // Generate a random dice number image for dice 2
