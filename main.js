let toggleButton = document.querySelector("#nav-toggler")
let navbar = document.querySelector("#navbarResponsive")

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("navbar-mobile")
  toggleButton.classList.toggle('bi-list')
  toggleButton.classList.toggle('bi-x')
})