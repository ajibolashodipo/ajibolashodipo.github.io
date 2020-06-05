const menuBtn = document.querySelector(".menu-btn")
const menuBtnMobile = document.querySelector(".menu-btn-mobile")
let menuOpen = false
let menuOpenMobile = false
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open")
    menuOpen = true
  } else {
    menuBtn.classList.remove("open")
    menuOpen = false
  }
})

menuBtnMobile.addEventListener("click", () => {
  if (!menuOpenMobile) {
    menuBtnMobile.classList.add("open")
    menuOpenMobile = true
  } else {
    menuBtnMobile.classList.remove("open")
    menuOpenMobile = false
  }
})
