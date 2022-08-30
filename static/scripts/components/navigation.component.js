import { navElements } from "../constants/constants";

class Navigation {
  toggleMenu() {
    navElements.burgerLine.classList.toggle("burger__line--active");
    document.body.classList.toggle("overflow");
    navElements.overlay.classList.toggle("site-overlay--visible");
    navElements.nav.classList.toggle("nav--visible");
    navElements.burger.classList.toggle("open");
  }

  addListeners() {
    const menuItems = document.querySelectorAll(".menu__item");
    [navElements.navIcon, navElements.overlay, ...menuItems].forEach((el) => {
      el.addEventListener("click", this.toggleMenu);
    });
  }
}

export { Navigation };
