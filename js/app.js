const hamburger = document.querySelector(".navbar-ish")
const navigation = document.querySelector(".my-nav-stopgap")
const myNav = document.querySelector(".my-nav")

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("my-nav")
  myNav.style.transition = "background-image 3s ease-in"
  console.log("ajibola")
})

// alert("sdfgsdfgsd")
