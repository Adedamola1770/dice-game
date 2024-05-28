 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

// dice + randomNumber1+".png"
// ./images/dice6.png
// document.querySelector(img1) = images/dice + randomNumber1 + ".png"


// var diceImage = `dice${randomNumber1}.png`;
// var imgElement = document.querySelector('.img1');
// imgElement.setAttribute('src', diceImage);



var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var imagePath = 

document.querySelector('.img1').src = "images/dice" + randomNumber1 + ".png";
document.querySelector('.img2').src = "images/dice" + randomNumber1 + ".png";



// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var imagePath = "images/dice" + randomNumber1 + ".png";

// document.querySelector('.img2').src = imagePath;
