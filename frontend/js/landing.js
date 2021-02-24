import { getPoemTypes } from "./app.js";
import { createFooter } from "./footer.js";
import { poemChoiceElement } from "./poem-choice-page.js";

const landing = function () {
  const landing = document.createElement("main");
  landing.classList.add("main-content");
  const createButtonDiv = document.createElement("div");
  landing.appendChild(createButtonDiv);

  const createButton = document.createElement("button");
  createButton.classList.add("create-button");
  createButton.innerText = "Create";
  createButton.addEventListener("click", () => {
    getPoemTypes();
  });
  landing.appendChild(createButton);

  createFooter();

  return landing;
};

export { landing };
