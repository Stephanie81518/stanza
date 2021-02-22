import { createHeader } from "./header.js";
import { landing } from "./landing.js";
import { poemChoiceElement } from "./poem-choice-page.js";
import {createFooter} from "./footer.js";
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
  main.appendChild(footer);
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

function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
return parent.appendChild(element);
}

const getRandomExamplePoem = function (inPoemType) {
  fetch("http://localhost:8080/api/examplepoems", {
    method: "GET",
    mode: "cors",
  })
  .then((response) => response.json())
  .then((examplePoems) => {
    let filtered = examplePoems.filter(onePoem => onePoem.examplePoemType.typeName === inPoemType);
    console.log(filtered);
    let randomPoem = Math.floor(Math.random() * filtered.length);
    console.log(filtered[randomPoem]);
    let p = createNode(p);
    p.innerHTML = `${filtered[randomPoem]}`;
    append(p);
  })
  .catch((error) => console.log(error));
}


export {getPoemTypes};
export {getRandomExamplePoem};