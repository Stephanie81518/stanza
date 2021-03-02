import { clearChildren } from "./app.js";
import { checkUserLogIn } from "./app.js";

const loginElement = function () {
  const loginContent = document.querySelector(".main-content");
  clearChildren(loginContent);

  const loginDiv = document.createElement("div");
  loginDiv.classList.add("login-div");
  loginContent.appendChild(loginDiv);

  const loginForm = document.createElement("div");
  loginForm.classList.add("login-form");
  loginForm.setAttribute("method", "post");
  loginDiv.appendChild(loginForm);

  const loginInputLabel = document.createElement("label");
  loginInputLabel.classList.add("login-input-label");
  loginInputLabel.innerText = "User Name:";
  loginForm.appendChild(loginInputLabel);

  const loginInput = document.createElement("input");
  loginInput.classList.add("login-input");
  loginInput.setAttribute("id", "userName");
  loginForm.appendChild(loginInput);

  const loginFormSubmit = document.createElement("button");
  loginFormSubmit.classList.add("login-form-submit");
  loginFormSubmit.innerText = "Login";
  loginForm.appendChild(loginFormSubmit);

  loginFormSubmit.addEventListener("click", () => {
    checkUserLogIn(loginInput.value);
  });
};

export { loginElement };
