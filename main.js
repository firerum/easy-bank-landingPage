const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closebtn");
const nav = document.getElementById("main-links");

function showMenu(e) {
    nav.style.display = "block";
};

function closeMenu(e) {
    nav.style.display = "none";
}

hamburger.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);
