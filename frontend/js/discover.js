import {clearChildren} from "./app.js";
import {createFooter} from "./footer.js";

const discoverElement = function () {
    const discoverElement = document.querySelector(".main-content");
    clearChildren(discoverElement);

    const discoverHeader = document.createElement("h1");
    discoverHeader.classList.add("discover-header");
    discoverHeader.innerText = "Discover";
    discoverElement.appendChild(discoverHeader);

    const discoverMainDiv = document.createElement("div");
    discoverMainDiv.classList.add("discover-div-main");
    discoverElement.appendChild(discoverMainDiv);

    let footer = createFooter();
    discoverElement.appendChild(footer);

    return discoverElement;
}

export {discoverElement};