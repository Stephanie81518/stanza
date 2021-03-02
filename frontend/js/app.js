import { createHeader } from "./header.js";
import { landing } from "./landing.js";
import { poemChoiceElement } from "./poem-choice-page.js";
import { createFooter } from "./footer.js";
import { userPoemsElement } from "./user.js";
import { poemTypeElement } from "./poemTypeView.js";

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

let header = createHeader();
const container = document.querySelector(".container");
container.prepend(header);
let footer = createFooter();
container.appendChild(footer);

const displayHomeView = function (examplePoems) {
  clearChildren(container);
  header = createHeader();
  container.prepend(header);
  let main = landing(examplePoems);
  container.appendChild(main);
  footer = createFooter();
  container.appendChild(footer);
};

fetch("http://localhost:8080/api/examplepoems")
  .then((response) => response.json())
  .then((examplePoems) => displayHomeView(examplePoems))
  .catch((error) => console.log(error));

const getPoemTypes = function () {
  fetch("http://localhost:8080/api/examplepoemtype", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((examplePoemType) => poemChoiceElement(examplePoemType))
    .catch((error) => console.log(error));
};

const getUserPoems = function () {
  fetch("http://localhost:8080/api/userpoems", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((userPoems) => userPoemElement(userPoems))
    .catch((error) => console.log(error));
};

const getRandomExamplePoem = function (inPoemType) {
  fetch("http://localhost:8080/api/examplepoems", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((examplePoems) => {
      function filterForRandomPoem(examplePoems) {
        let examplePoemDisplay = document.querySelector(".type-examples-p");
        let filtered = examplePoems.filter(
          (onePoem) => onePoem.examplePoemType.typeName === inPoemType
        );
        console.log(filtered);
        let randomPoem = Math.floor(Math.random() * filtered.length);
        console.log(filtered[randomPoem]);
        examplePoemDisplay.innerHTML =
          `<a href="` +
          filtered[randomPoem].poemUrl +
          `" target="popup" onclick="window.open('` +
          filtered[randomPoem].poemUrl +
          `','name','width=600,height=400')">` +
          filtered[randomPoem].title +
          `</a><br>` +
          filtered[randomPoem].poet;
      }
      filterForRandomPoem(examplePoems);
    })
    .catch((error) => console.log(error));
};

const checkUserLogIn = function (user) {
  fetch("http://localhost:8080/api/user/", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((userList) => {
      console.log(user);
      let userFound = false;
      userList.forEach((currentUser) => {
        if (currentUser.userName == user) {
          userFound = true;
          userPoemsElement(currentUser);
          header.innerHTML = `${currentUser.userName}`;
          header.addEventListener("click", () => {
            userPoemsElement(currentUser);
          });
        }
      });

      if (userFound == false) {
        fetch("http://localhost:8080/api/user/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: user,
          }),
        })
          .then((response) => response.json())
          .then((user) => {
            userPoemsElement(user);
            header.innerHTML = `${user.userName}`;
            header.addEventListener("click", () => {
              userPoemsElement(user);
            });
          })
          .catch((error) => console.log(error));
      }
    });
};

const deleteUserPoem = function (id) {
  fetch("http://localhost:8080/api/userpoems/" + id, {
    method: "DELETE",
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const saveUserPoem = function (userName) {
  fetch("http://localhost:8080/api/userpoems/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      poemContent: editorValue.value,
    })
  })
  .then((response) => response.json())
  .then((userName) => userPoemsElement(userName))
  .catch((error) => console.log(error));
}

export { getPoemTypes };
export { getRandomExamplePoem };
export { clearChildren };
export { checkUserLogIn };
export { deleteUserPoem };
export {saveUserPoem};
