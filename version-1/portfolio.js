// Nav bar toggle variables

var navbarToggle = document.querySelector("#navbarToggle");
var navbar = document.querySelector(".navbar");
var navbarShow = document.querySelector(".navbarShow");

// Making 'The Matrix' Effect in Javascript by Ganesh Prasad github logo Sep 20 '19 ・3 min read 

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);

// End of code from Mr Prasad

// Start of the toggle menu

navbarToggle.addEventListener("click", function() {
    navbar.classList.toggle("navbarShow");
});

// This is here to make the menu disappear after clickin on one of the links in the menu.

navbar.addEventListener("click", function() {
    navbar.classList.remove("navbarShow");
});