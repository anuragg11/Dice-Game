
var randomNumber1 = Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var DiceImg="dice"+ randomNumber1 + ".png";
var imgSource="./images/"+DiceImg;

var image1=document.querySelector(".img1");

image1.setAttribute("src" , imgSource);

var randomNumber2 = Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var DiceImg="dice"+ randomNumber2 + ".png";
var imgSource="./images/"+DiceImg;

var image2=document.querySelector(".img2");

image2.setAttribute("src" , imgSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent="🚩Draw🚩";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins🚩";
}