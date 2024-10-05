var a = Math.floor(Math.random()*6) + 1;
var b = Math.floor(Math.random()*6) + 1;

var img1= "images/dice"+ a +".png";
var img2= "images/dice"+ b +".png";

console.log(img1)
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(a < b){
    document.querySelector(".container h1").textContent = "🚩Player 2 won";
} else if (a > b) {
    document.querySelector(".container h1").textContent = "🚩Player 1 won";
}else {
    document.querySelector(".container h1").textContent = "Its a draw.";
}
