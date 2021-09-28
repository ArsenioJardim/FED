// JavaScript Document

var deButton = document.querySelector("nav button:nth-of-type(1)");

var menu = document.querySelector("header nav ul");

var hartje = document.querySelector("article button:nth-of-type(1)")

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
menu.classList.toggle("toonMenu");
deButton.classList.toggle("feedback")
}

hartje.addEventListener("click", favorite);

function favorite() {
hartje.classList.toggle("favoriet");
console.log("test");
}