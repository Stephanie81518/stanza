import { getPoemTypes } from "./app.js";
import { landing } from "./landing.js";
import { poemChoiceElement } from "./poem-choice-page.js";
import {discoverElement} from "./discover.js";
import { devsElement } from "./devs.js";
import { aboutElement } from "./about.js";

const createFooter = function () {
    const footer = document.createElement("footer");
    footer.classList.add("main-footer");

    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");
    footer.appendChild(navBar);

        const devsLink = document.createElement("a");
        devsLink.classList.add("devs-link");
        devsLink.innerHTML = `The Devs`;
        devsLink.addEventListener("click", () => {
            devsElement();
        })
        navBar.appendChild(devsLink);

        const discoverLink = document.createElement("a");
        discoverLink.classList.add("discover-link");
        discoverLink.innerHTML = `Discover`;
        discoverLink.addEventListener("click", () => {
            discoverElement();
        })
        navBar.appendChild(discoverLink);

        const aboutLink = document.createElement("a");
        aboutLink.classList.add("about-link");
        aboutLink.innerHTML = `About`;
        aboutLink.addEventListener("click", () => {
            aboutElement();
        })
        navBar.appendChild(aboutLink);

        const homeLink = document.createElement("a");
        homeLink.classList.add("home-link");
        homeLink.innerHTML = `Home`;
        homeLink.addEventListener("click", () => {
            getPoemTypes();
        })
        navBar.appendChild(homeLink);

    return footer;
}

export {createFooter};