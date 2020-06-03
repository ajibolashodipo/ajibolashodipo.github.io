const hamburger = document.querySelector(".navbar-ish")
const navigation = document.querySelector(".my-nav-stopgap")
const myNav = document.querySelector(".my-nav")
// const square = document.getElementById("square1")

// loading animation
$(window).on("load", function () {
  $(".loader-wrapper").delay(1200).fadeOut(500)
})

hamburger.addEventListener("click", () => {
  console.log("ajibola")
  navigation.classList.toggle("animate")
})
