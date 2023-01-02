let body = document.querySelector("body");
let color = document.querySelector("#color");
let button = document.querySelector("#change-color");

const colors = [
  "Yellow",
  "Blue",
  "Black",
  "Gray",
  "Green",
  "Orange",
  "Purple",
  "Pink",
  "Red",
  "Aqua",
  "Gold"
];

let colorIndex;

const  changeColor = () => {
colorIndex=Math.floor( Math.random()*colors.length); 
body.style.backgroundColor=colors[colorIndex];
color.innerText=colors[colorIndex];
button.innerText=colors[colorIndex];





 }


 button.addEventListener("click",()=>{
    changeColor();
 })
