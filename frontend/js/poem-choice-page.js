import { createFooter } from "./footer.js";
import { poemTypeElement } from "./poemTypeView.js";

const poemChoiceElement = function (poemType) {
  const poemChoiceContent = document.querySelector(".main-content");
  clearChildren(poemChoiceContent);

  const typeOfPoemDiv = document.createElement("div");
  typeOfPoemDiv.classList.add("typeOfPoemBox");
  poemChoiceContent.appendChild(typeOfPoemDiv);

  poemType.forEach((examplePoemType) => {
    const poemTypeButton = document.createElement("button");
    poemTypeButton.classList.add("poem-type-button");
    poemTypeButton.innerText = examplePoemType.typeName;
    poemTypeButton.addEventListener("click", () =>
      poemTypeElement(examplePoemType)
    );
    typeOfPoemDiv.appendChild(poemTypeButton);
  });

  //let footer = createFooter();
  //typeOfPoemDiv.appendChild(footer);

  return poemChoiceElement;
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { poemChoiceElement };

//     const buttonFreeVerse = document.createElement("button");
//     buttonFreeVerse.classList.add("free-verse-button");
//     buttonFreeVerse.innerText = "Free Verse";
//     typeOfPoem.append(buttonFreeVerse);
//         buttonFreeVerse.addEventListener("click", () => {
//             poemTypeElement(poemType);
//         })

//     const buttonHaiku = document.createElement("button");
//     buttonHaiku.classList.add("haiku-button");
//     buttonHaiku.innerText = "Haiku";
//     typeOfPoem.append(buttonHaiku);
//         buttonHaiku.addEventListener("click", () => {

//         })

//     const buttonSonnet = document.createElement("button");
//     buttonSonnet.classList.add("sonnet-button");
//     buttonSonnet.innerText = "Sonnet";
//     typeOfPoem.append(buttonSonnet);
//         buttonSonnet.addEventListener("click", () => {

//         })

//     const buttonSestina = document.createElement("button");
//     buttonSestina.classList.add("sestina-button");
//     buttonSestina.innerText = "Sestina";
//     typeOfPoem.append(buttonSestina);
//         buttonSestina.addEventListener("click", () => {

//         })

//     const buttonVillanelle = document.createElement("button");
//     buttonVillanelle.classList.add("villanelle-button");
//     buttonVillanelle.innerText = "Villanelle";
//     typeOfPoem.append(buttonVillanelle);
//         buttonVillanelle.addEventListener("click", () => {

//         })

//     const buttonGhazal = document.createElement("button");
//     buttonGhazal.classList.add("ghazal-button");
//     buttonGhazal.innerText = "Ghazal";
//     typeOfPoem.append(buttonGhazal);
//         buttonGhazal.addEventListener("click", () => {

//         })

//     const buttonPantoum = document.createElement("button");
//     buttonPantoum.classList.add("pantoum-button");
//     buttonPantoum.innerText = "Pantoum";
//     typeOfPoem.append(buttonPantoum);
//         buttonPantoum.addEventListener("click", () => {

//         })

// const buttonLogin = document.createElement("button");
// buttonLogin.classList.add("login-button");
// buttonLogin.innerText = "Log In";
// mainElement.append(buttonLogin);
