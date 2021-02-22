import { createHeader } from "./header.js";
import { landing } from "./landing.js";
import { poemChoiceElement } from "./poem-choice-page.js";

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

let header = createHeader();
const container = document.querySelector(".container");
container.prepend(header);

const displayHomeView = function (examplePoems) {
  clearChildren(container);
  header = createHeader();
  container.prepend(header);
  let main = landing(examplePoems);
  container.appendChild(main);
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

export { getPoemTypes };
