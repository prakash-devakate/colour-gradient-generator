let but1 = document.getElementById("button1");
let but2 = document.getElementById("button2");
let copyCon = document.querySelector(".copyCon");
let rgb1 = "#23f54a";
let rgb2 = "#1815cd";

function getHexCode() {
  let colorcode = "#";
  let strhex = "0123456789abcdef";
  for (let i = 0; i <= 5; i++) {
    colorcode = colorcode + strhex[Math.floor(Math.random() * 16)];
  }
  return colorcode;
}

const clickbtn1 = () => {
  rgb1 = getHexCode();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2} )`;
  copyCon.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2} )`;
  but1.innerText = `${rgb1}`;
};
const clickbtn2 = () => {
  rgb2 = getHexCode();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2} )`;
  copyCon.innerHTML = `background-image: linear-gradient(to right,${rgb1},${rgb2} )`;
  but2.innerText = `${rgb2}`;
};

but1.addEventListener("click", clickbtn1);
but2.addEventListener("click", clickbtn2);
navigator.clipboard.writeText(copyCon.innerText);
copyCon.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCon.innerText) ;
});