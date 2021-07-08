window.addEventListener("load", function (event) {
  document.querySelector("body").classList.remove("preload");
});

const wrapper = document.getElementById("wrapper");
const hamburger = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav-menu");
const close_menu = document.getElementById("close-menu");
const btn_bookmark = document.getElementById("bookmark-btn");
const img_bookmark = document.getElementById("icon-bookmark");
const span_bookmark = document.getElementById("span-bookmark");
const back_this_project_btn = document.getElementById("back-this-project-btn");
const selection_modal = document.getElementById("selection-modal");
const close_modal = document.getElementById("close-modal");
const modal_items = document.querySelectorAll(".modal-reward-item");
const continue_btns = document.querySelectorAll(".continue-btn");
const modal_success = document.getElementsByClassName("modal-success");
const got_it_btn = document.querySelector(".got-it-btn");
const select_reward_btns = document.querySelectorAll(".select-reward-btn");
const radiobtns = document.querySelectorAll("input[type='radio']");
const selectable = document.getElementsByClassName("selectable");

function toggleCyan(item) {
  item.classList.toggle("cyanBorder");
}

function displayPledgeAndChecked(item) {
  let radio = item.querySelector("input[type='radio'");
  let pledge = item.querySelector(".enter-your-pledge");
  pledge.classList.toggle("hide");
  radio.setAttribute("checked", "");
}

function addHide(item) {
  let hideItem = item.querySelector(".enter-your-pledge");
  hideItem.classList.add("hide");
}

modal_items.forEach(function (modal_item, y) {
  const pledge = document.querySelectorAll(".enter-your-pledge");
  const btn = modal_item.querySelector("input[type='radio']");
  btn.addEventListener("change", () => {
    modal_items.forEach(function (item) {
      if (item !== modal_item) {
        item.classList.remove("cyanBorder");
        pledge.forEach((pledge_item) => {
          pledge_item.classList.add("hide");
        });
      }
    });
    toggleCyan(modal_item);
    modal_item
      .getElementsByClassName("enter-your-pledge")[0]
      .classList.toggle("hide");
  });
});

select_reward_btns.forEach((btn, index) => {
  btn.onclick = () => {
    selection_modal.style.display = "block";
    displayPledgeAndChecked(selectable[index]);
    if (index === 0) {
      addHide(selectable[1]);
    } else {
      addHide(selectable[0]);
    }
  };
});

got_it_btn.onclick = () => {
  modal_success[0].style.display = "none";
  document.body.style.overflow = "visible";
};

continue_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selection_modal.style.display = "none";
    modal_success[0].style.display = "block";
  });
});

btn_bookmark.onclick = () => {
  if (img_bookmark.src.indexOf("bookmark.svg") !== -1) {
    img_bookmark.src = "../images/icon-bookmarked.svg";
    span_bookmark.innerText = "Bookmarked";
    span_bookmark.style.color = "hsl(176, 72%, 28%)";
  } else {
    img_bookmark.src = "../images/icon-bookmark.svg";
    span_bookmark.innerText = "Bookmark";
    span_bookmark.style.color = "hsl(0, 0%, 48%)";
  }
};

hamburger.onclick = () => {
  hamburger.style.display = "none";
  close_menu.style.display = "block";
  nav_menu.style.display = "block";
  wrapper.classList.remove("overlay");
  wrapper.classList.add("overlay-menu");
};

close_menu.onclick = () => {
  hamburger.style.display = "block";
  close_menu.style.display = "none";
  nav_menu.style.display = "none";
  wrapper.classList.remove("overlay-menu");
  wrapper.classList.add("overlay");
};

back_this_project_btn.onclick = () => {
  selection_modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

close_modal.onclick = () => {
  selection_modal.style.display = "none";
  document.body.style.overflow = "visible";
};