window.addEventListener("load", function(event) {
    document.querySelector('body').classList.remove('preload');
});

const wrapper = document.getElementById("wrapper");
const hamburger = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav-menu");
const close_menu = document.getElementById("close-menu");

hamburger.onclick = () => {
    hamburger.style.display = "none";
    close_menu.style.display = "block";
    nav_menu.style.display = "block";
    wrapper.classList.remove("overlay")
    wrapper.classList.add("overlay-menu");
}

close_menu.onclick = () => {
    hamburger.style.display = "block";
    close_menu.style.display = "none";
    nav_menu.style.display = "none";
    wrapper.classList.remove("overlay-menu");
    wrapper.classList.add("overlay");
}



