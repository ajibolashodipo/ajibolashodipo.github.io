const hamburger = document.querySelector(".navbar-ish")
const hamburgerLg = document.querySelector(".navbar-ish-lg")
const navigation = document.querySelector(".my-nav-stopgap")
const myNav = document.querySelector(".my-nav")
// const square = document.getElementById("square1")

// loading animation
$(window).on("load", function () {
  $(".loader-wrapper").delay(800).fadeOut(500)
})

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("animate")
})
hamburgerLg.addEventListener("click", () => {
  console.log("ajibb")
  navigation.classList.toggle("animate")
})
