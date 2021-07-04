window.addEventListener("load", function(event) {
    document.querySelector('body').classList.remove('preload');
});

const wrapper = document.getElementById("wrapper");
const hamburger = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav-menu");
const close_menu = document.getElementById("close-menu");
const btn_bookmark = document.getElementById("bookmark-btn")
const img_bookmark = document.getElementById("icon-bookmark");
const span_bookmark = document.getElementById("span-bookmark");
const back_this_project_btn = document.getElementById("back-this-project-btn");
const selection_modal = document.getElementById("selection-modal")
const close_modal = document.getElementById("close-modal");

btn_bookmark.onclick = () => {
    if(img_bookmark.src.indexOf('bookmark.svg') !== -1) {
        img_bookmark.src = "../images/icon-bookmarked.svg"
        span_bookmark.innerText = "Bookmarked";
        span_bookmark.style.color = "hsl(176, 72%, 28%)";

    } else {
        img_bookmark.src = "../images/icon-bookmark.svg"
        span_bookmark.innerText = "Bookmark";
        span_bookmark.style.color = "hsl(0, 0%, 48%)";
    }
}

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

back_this_project_btn.onclick = () => {
    selection_modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

close_modal.onclick = () =>  {
    selection_modal.style.display = "none";
    document.body.style.overflow = "visible";
}