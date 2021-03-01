import { getPoemTypes } from "./app.js";
import { createFooter } from "./footer.js";
import { poemChoiceElement } from "./poem-choice-page.js";
import {loginElement} from "./login.js";

const landing = function () {
  const landing = document.createElement("main");
  landing.classList.add("main-content");
  const createButtonDiv = document.createElement("div");
  createButtonDiv.classList.add("divCreateButton");
  landing.appendChild(createButtonDiv);

  const createButton = document.createElement("button");
  createButton.classList.add("create-button");
  createButton.innerText = "Create";
  createButton.addEventListener("click", () => {
    getPoemTypes();
  });

  const loginButton = document.createElement("button");
  loginButton.classList.add("login-button");
  loginButton.innerText = "Login";
  loginButton.addEventListener("click", ()=> {
    loginElement();
  });

  landing.appendChild(createButton);
  landing.appendChild(loginButton);
  createButtonDiv.appendChild(createButton);
  //landing.appendChild(createFooter());
  return landing;
};

export { landing };
