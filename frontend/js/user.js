import { clearChildren } from "./app.js";


const userPoemsElement = function (userPoem) {
    const userPoemsElement = document.querySelector(".main-content");
    clearChildren(userPoemsElement);

    const userPoemsDiv = document.createElement("div");
    userPoemsDiv.classList.add("user-poems-div");
    userPoemsElement.appendChild(userPoemsDiv);

    userPoem.forEach((userPoem) => {
        const singleUserPoemDiv = document.createElement("div");
        singleUserPoemDiv.classList.add("single-user-poem-div");
        userPoemsDiv.appendChild(singleUserPoemDiv);

        const singleUserPoemHeader = document.createElement("h2");
        singleUserPoemHeader.classList.add("single-user-poem-h2");
        singleUserPoemHeader.innerText = userPoem.title;
        singleUserPoemDiv.appendChild(singleUserPoemHeader);

        const singleUserPoemP = document.createElement("p");
        singleUserPoemP.classList.add("single-user-poem-p");
        singleUserPoemP.innerText = userPoem.poemContent;
        singleUserPoemDiv.appendChild(singleUserPoemP);

        const userPoemEditButton = document.createElement("button");
        userPoemEditButton.classList.add("poem-edit-button");
        userPoemEditButton.innerText = "Edit";
        userPoemEditButton.addEventListener("click", () => {

        })

        const userPoemDeleteButton = document.createElement("button");
        userPoemDeleteButton.classList.add("poem-delete-button");
        userPoemDeleteButton.innerText = "Delete";
        userPoemDeleteButton.addEventListener("click", () => {
            
        })
      });
}

export {userPoemsElement};