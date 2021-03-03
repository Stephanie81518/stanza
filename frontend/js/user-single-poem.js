import { clearChildren, editUserPoem } from "./app.js";
import { addTextEditor } from "./syllableCounter.js";

const userPoemElement = function (userPoems) {
  const userPoemContent = document.querySelector(".main-content");
  clearChildren(userPoemContent);

   const poemEditDiv = document.createElement("div");
   poemEditDiv.classList.add("poem-edit-main-div");
   userPoemContent.appendChild(poemEditDiv);


  const userPoemEditDiv = document.createElement("div");
  userPoemEditDiv.classList.add("editor-div");


  userPoemEditDiv.classList.add("saved-editor-div");
  userPoemEditDiv.setAttribute("name", "editorAreaInput");
  userPoemEditDiv.setAttribute("id", "savedEditor1");
  userPoemEditDiv.setAttribute("contenteditable", true);
  userPoemEditDiv.setAttribute("method", "post");
  userPoemEditDiv.innerHTML = userPoems.poemContent; 
  poemEditDiv.appendChild(userPoemEditDiv);

  const saveChangesButton = document.createElement("button");
  saveChangesButton.classList.add("save-changes-button");
  saveChangesButton.innerText = "Save Changes";
  saveChangesButton.addEventListener("click", () => {
      editUserPoem(userPoems.id);
  })
  poemEditDiv.appendChild(saveChangesButton);


  return userPoemElement;
};

export { userPoemElement };
