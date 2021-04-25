/*================ MENU TOGGLE =======================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show__menu");
    });
  }
};
showMenu("nav__toggle", "nav__menu");
/*================ LINK REMOVE TOGGLE =======================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const nav = document.getElementById("nav__menu");
  nav.classList.remove("show__menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));
