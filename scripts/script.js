// JavaScript Document

var deButton = document.querySelector("nav button:nth-of-type(1)");

var menu = document.querySelector("header nav ul");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
menu.classList.toggle("toonMenu");
}