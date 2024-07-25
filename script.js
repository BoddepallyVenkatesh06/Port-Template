
var i = 0;
var txt = "Venky Kumar";
var speed = 400;
var typewriter1 = document.getElementById("typewriter");
window.onload = function typewriter() {
    if (i < txt.length) {
        typewriter1.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}