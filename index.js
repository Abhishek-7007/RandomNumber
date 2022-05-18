var randomNumber1 = Math.round(Math.random()*6); // gives number between 1 and 6

var randomDice = "dice" + randomNumber1 + ".png"; // gives the random dice

var randomImageSource = "images/" + randomDice; // gives the source of random dice

var imageOne = document.querySelectorAll("img") [0]
imageOne.setAttribute("src", randomImageSource);

var randomNumber2 = Math.round(Math.random() *6);

var randomDice2 = "dice" + randomNumber2 + ".png"; // gives the random dice

var randomImageSource2 = "images/" + randomDice2; 

var imageTwo = document.querySelectorAll("img") [1];
imageTwo.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player one wins🏆";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player two wins🏆";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}