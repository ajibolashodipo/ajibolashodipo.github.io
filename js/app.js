const hamburger = document.querySelector(".navbar-ish")
const navigation = document.querySelector(".my-nav-stopgap")
const myNav = document.querySelector(".my-nav")
const square = document.getElementById("square1")

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("my-nav")
  // square.style.left = "25%"
  // square1.style.transform = "translateX(25vw)"
  if (navigation.classList.contains("my-nav")) {
    $("#square1").animate({ right: "7.5vw" })
  }

  //animate hamburger. turn it to X on click.
  //animate exit of navbar
  //animate entry of navlinks
})
