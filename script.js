const hamburger = document.querySelector(".hamburger_navigation");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
}