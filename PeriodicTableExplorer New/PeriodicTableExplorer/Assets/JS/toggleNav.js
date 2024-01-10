const toggleMenu = document.querySelector(".toggleMenu");
const header = document.querySelector(".header");

const searchDiv = document.getElementById("search");
const searchIcon = document.querySelector(".search_icon");

const toggleNavbar = () => {
  header.classList.toggle("active");
  searchDiv.classList.add("toggleSearch");
};

toggleMenu.addEventListener("click", () => toggleNavbar());

searchIcon.addEventListener("click", () => {
  header.classList.remove("active");
  searchDiv.classList.toggle("toggleSearch");
});
