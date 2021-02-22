import { landing } from "./landing.js";

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

        })
        navBar.appendChild(devsLink);

        const discoverLink = document.createElement("a");
        discoverLink.classList.add("discover-link");
        discoverLink.innerHTML = `Discover`;
        discoverLink.addEventListener("click", () => {
            
        })
        navBar.appendChild(discoverLink);

        const aboutLink = document.createElement("a");
        aboutLink.classList.add("about-link");
        aboutLink.innerHTML = `About`;
        aboutLink.addEventListener("click", () => {
            
        })
        navBar.appendChild(aboutLink);

        const homeLink = document.createElement("a");
        homeLink.classList.add("home-link");
        homeLink.innerHTML = `Home`;
        homeLink.addEventListener("click", () => {
            landing();
        })
        navBar.appendChild(homeLink);

    return footer;
}

export {createFooter};