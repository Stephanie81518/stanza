import {clearChildren} from "./app.js";
import {createFooter} from "./footer.js";

const aboutElement = function () {
    const aboutElement = document.querySelector(".main-content");
    clearChildren(aboutElement);

    const aboutHeader = document.createElement("h1");
    aboutHeader.classList.add("about-header");
    aboutHeader.innerText = "About";
    aboutElement.appendChild(aboutHeader);

    const aboutMainDiv = document.createElement("div");
    aboutMainDiv.classList.add("about-div-main");
    aboutElement.appendChild(aboutMainDiv);

    let footer = createFooter();
    aboutElement.appendChild(footer);

    return aboutElement;
}

export {aboutElement};