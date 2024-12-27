const button = document.getElementById("actionButton");
const button1 = document.getElementById("actionButton1");
const button2 = document.getElementById("actionButton2");
const button3 = document.getElementById("actionButton3");
const button4 = document.getElementById("actionButton4");
const mode = document.getElementById("actionButton4");
const image = document.getElementById("image");
const imgBtn = document.getElementById("actionButton5");

button.onclick = () => {
  document.write("Button was clicked...");
};
button1.ondblclick = () => {
  document.write("Button was double clicked...");
};
button2.onmouseover = () => {
  document.write("Button was double clicked when mouse over...");
};
button3.onkeypress = () => {
  document.write("Button was double clicked on key press...");
};

// 1. Create one button Dark mode and light Mode

let currentMode = "light";

mode.addEventListener("click",()=>{
  if(currentMode === "light"){
    currentMode = "dark";
    document.querySelector("body").style.backgroundColor = "black"
  }
  else{
    currentMode = "light";
    document.querySelector("body").style.backgroundColor = "#f0f0f0"
  }
  console.log(currentMode);
});

// 2. Create on button to display Image, after 3 sec

/* function showImage(){
  setTimeout(function (){
    image.style.display = "block";
  },3000);
} */

  imgBtn.addEventListener("click",()=>{
    setTimeout(()=>{
      image.style.display = "block";
    },3000)
  });
