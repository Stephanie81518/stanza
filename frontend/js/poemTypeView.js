import {getRandomExamplePoem} from "./app.js";


const poemTypeElement = function (examplePoemType) {

  const poemTypeContent = document.querySelector(".main-content");
  clearChildren(poemTypeContent);

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  poemTypeContent.appendChild(containerDiv);

  const typeDesP = document.createElement("p");
  typeDesP.classList.add("type-description-p");
  typeDesP.innerText = examplePoemType.typeDescription;
  containerDiv.appendChild(typeDesP);

    const typeExamplesP = document.createElement("p");
    typeExamplesP.classList.add("type-examples-p");
    typeExamplesP.innerHTML = `${getRandomExamplePoem(examplePoemType.typeName)}`;
    containerDiv.appendChild(typeExamplesP);

  return poemTypeElement;
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { poemTypeElement };
