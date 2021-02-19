const mainContent = document.createElement("main");


const poemChoiceElement = function () {
    mainElement.classList.add("main-content");
        const typeOfPoem = document.createElement("div");
        typeOfPoem.classList.add("typeOfPoemBox");
        mainElement.append(typeOfPoem);

            const buttonFreeVerse = document.createElement("button");
            buttonFreeVerse.classList.add("free-verse-button");
            typeOfPoem.append(buttonFreeVerse);
            const buttonHaiku = document.createElement("button");
            buttonHaiku.classList.add("haiku-button");
            typeOfPoem.append(buttonHaiku);
            const buttonSonnet = document.createElement("button");
            buttonSonnet.classList.add("sonnet-button");
            typeOfPoem.append(buttonSonnet);
            const buttonSestina = document.createElement("button");
            buttonSestina.classList.add("sestina-button");
            typeOfPoem.append(buttonSestina);
            const buttonVillanelle = document.createElement("button");
            buttonVillanelle.classList.add("villanelle-button");
            typeOfPoem.append(buttonVillanelle);
            const buttonGhazal = document.createElement("button");
            buttonGhazal.classList.add("ghazal-button");
            typeOfPoem.append(buttonGhazal);
            const buttonPantoum = document.createElement("button");
            buttonPantoum.classList.add("pantoum-button");
            typeOfPoem.append(buttonPantoum);
        
        const buttonLogin = document.createElement("button");
        buttonLogin.classList.add("login-button");
        mainElement.append(buttonLogin);
}
// const mainElement = document.createElement("main");
//   mainElement.classList.add("main-content");
//   const albumSectionElement = document.createElement("section");
//   albumSectionElement.classList.add("album-list");
//   mainElement.prepend(albumSectionElement);