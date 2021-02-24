import {clearChildren} from "./app.js";
import {createFooter} from "./footer.js";

const devsElement = function () {
    const devsElement = document.querySelector(".main-content");
    clearChildren(devsElement);

    const devsHeader = document.createElement("h1");
    devsHeader.classList.add("devs-header");
    devsHeader.innerText = "The Devs";
    devsElement.appendChild(devsHeader);

    const devsMainDiv = document.createElement("div");
    devsMainDiv.classList.add("devs-div-main");
    devsElement.appendChild(devsMainDiv);

    //let footer = createFooter();
    //devsElement.appendChild(footer);

    return devsElement;
}

export {devsElement};