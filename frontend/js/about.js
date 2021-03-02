import { clearChildren } from "./app.js";

const aboutElement = function () {
  const aboutElement = document.querySelector(".main-content");
  clearChildren(aboutElement);

  const aboutHeader = document.createElement("h1");
  aboutHeader.classList.add("about-header");
  aboutHeader.innerText = "About";
  aboutElement.appendChild(aboutHeader);

  const aboutMainDiv = document.createElement("div");
  aboutMainDiv.classList.add("about-div-main");
  aboutMainDiv.innerHTML =
    "Stanza was created with the vision of bringing an appreciation of poetry to a wider audience.<br><br>With Stanza's help, you can create original poems, explore the details of poetic artistry, and discover new poets.<br><br>We hope our website inspires you to begin your journey on a path of poetry appreciation.";
  aboutElement.appendChild(aboutMainDiv);

  return aboutElement;
};

export { aboutElement };
