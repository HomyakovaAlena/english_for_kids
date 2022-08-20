import { navElements } from "../constants/constants";
import { fragment } from "../constants/constants";

class Navigation {
  constructor(names, icons) {
    this.names = names;
    this.icons = icons;
  }

  addMenuItems() {
    this.names.forEach((item, index) => {
      const newItem = document.createElement("li");
      newItem.classList.add("menu__item", "menu__item--main", "toCardPage");
      newItem.id = index;
      const link = `
                <a class="menu__link menu__link--main" href="#${item}"
                  ><i class="${this.icons[index]}"></i> ${item}</a
                >
        `;
      newItem.innerHTML = link;
      fragment.append(newItem);
    });
    const statsElement = document.createElement("li");
    statsElement.classList.add("menu__item", "menu__item--main", "statistics");
    const statsLink = `
      <a class="menu__link menu__link--main" href="#statistics">
        <i class="fa-solid fa-calculator"></i> Statistics</a>
    `;
    statsElement.innerHTML = statsLink;
    fragment.append(statsElement);
    navElements.nav.append(fragment);
  }

  toggleMenu() {
    navElements.burgerLine.classList.toggle("burger__line--active");
    document.body.classList.toggle("overflow");
    navElements.overlay.classList.toggle("site-overlay--visible");
    navElements.nav.classList.toggle("nav--visible");
  }

  addListeners() {
    const menuItems = document.querySelectorAll(".menu__item");
    [navElements.navIcon, navElements.overlay, ...menuItems].forEach((el) => {
      el.addEventListener("click", this.toggleMenu);
    });
  }
}

export { Navigation };
