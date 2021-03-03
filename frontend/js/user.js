import { clearChildren, deleteUserPoem, getSingleUserPoem } from "./app.js";

const userPoemsElement = function (userName) {
  const userPoemsElement = document.querySelector(".main-content");
  clearChildren(userPoemsElement);

  const userPoemsDiv = document.createElement("div");
  userPoemsDiv.classList.add("user-poems-div");
  userPoemsElement.appendChild(userPoemsDiv);

  userName.userPoems.forEach((userPoems) => {
    const singleUserPoemDiv = document.createElement("div");
    singleUserPoemDiv.classList.add("single-user-poem-div");
    singleUserPoemDiv.setAttribute("contenteditable", true);
    singleUserPoemDiv.setAttribute("id", "userPoemEditor");
    singleUserPoemDiv.setAttribute("method", "post");
    userPoemsDiv.appendChild(singleUserPoemDiv);

    const singleUserPoemHeader = document.createElement("h2");
    singleUserPoemHeader.classList.add("single-user-poem-h2");
    singleUserPoemHeader.innerText = userPoems.title;
    singleUserPoemDiv.appendChild(singleUserPoemHeader);

    const singleUserPoemP = document.createElement("p");
    singleUserPoemP.classList.add("single-user-poem-p");
    singleUserPoemP.innerHTML = userPoems.poemContent;
    singleUserPoemDiv.appendChild(singleUserPoemP);

    const userPoemEditButton = document.createElement("button");
    userPoemEditButton.classList.add("poem-edit-button");
    userPoemEditButton.innerText = "Edit";
    userPoemEditButton.addEventListener("click", () => {
      getSingleUserPoem(userPoems.id);
    });
    singleUserPoemDiv.appendChild(userPoemEditButton);
    const userPoemDeleteButton = document.createElement("button");
    userPoemDeleteButton.classList.add("poem-delete-button");
    userPoemDeleteButton.innerText = "Delete";
    userPoemDeleteButton.addEventListener("click", () => {
      deleteUserPoem(userPoems.id);
    });
    singleUserPoemDiv.appendChild(userPoemDeleteButton);
  });
};

export { userPoemsElement };
