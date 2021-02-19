const createFooter = function () {
    const footer = document.createElement("footer");
    footer.classList.add("main-footer");

    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");
    footer.appendChild(navBar);

        const devsLink = document.createElement("a");
        devsLink.classList.add("devs-link");
        navBar.appendChild(devsLink);
        const discoverLink = document.createElement("a");
        discoverLink.classList.add("discover-link");
        navBar.appendChild(discoverLink);
        const aboutLink = document.createElement("a");
        aboutLink.classList.add("about-link");
        navBar.appendChild(aboutLink);
        const homeLink = document.createElement("a");
        homeLink.classList.add("home-link");
        navBar.appendChild(homeLink);

    return footer;
}

export {createFooter};