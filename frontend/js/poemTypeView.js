import { getRandomExamplePoem } from "./app.js";
import { createFooter } from "./footer.js";

const poemTypeElement = function (examplePoemType) {
  const poemTypeContent = document.querySelector(".main-content");
  clearChildren(poemTypeContent);

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  poemTypeContent.appendChild(containerDiv);

  //poem type description & editor
  const bookViewDiv = document.createElement("div");
  bookViewDiv.classList.add("book-view-div");
  containerDiv.appendChild(bookViewDiv);
  const descHeader = document.createElement("h2");
  descHeader.classList.add("description-header");
  descHeader.innerText = examplePoemType.typeName;
  bookViewDiv.appendChild(descHeader);
  const typeDesP = document.createElement("p");
  typeDesP.classList.add("type-description-p");
  typeDesP.innerText = examplePoemType.typeDescription;
  bookViewDiv.appendChild(typeDesP);
  //editor toolbar
  const poemEditorFieldset = document.createElement("fieldset");
  poemEditorFieldset.classList.add("poem-editor-fieldset");
  bookViewDiv.appendChild(poemEditorFieldset);
  const italicButton = document.createElement("button");
  italicButton.classList.add("fontStyle-italic");
  italicButton.setAttribute("title", "Italicize Highlighted Text");
  italicButton.innerHTML = `Italic`;
  italicButton.addEventListener("click", () => {
    document.execCommand('italic',false,null);
  });
  poemEditorFieldset.appendChild(italicButton);
  const boldButton = document.createElement("button");
  boldButton.classList.add("fontStyle-bold");
  boldButton.setAttribute("title", "Bold Highlighted Text");
  boldButton.innerHTML = `Bold`;
  boldButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.execCommand('bold',false,null);
    console.log("bold button clicked");
  });
  poemEditorFieldset.appendChild(boldButton);
  const underlineButton = document.createElement("button");
  underlineButton.classList.add("fontStyle-underline");
  underlineButton.setAttribute("title", "Underline Highlighted Text");
  underlineButton.innerHTML = `Underline`;
  underlineButton.addEventListener("click", () => {
    document.execCommand('underline',false,null);
  });
  poemEditorFieldset.appendChild(underlineButton);
  const strikeButton = document.createElement("button");
  strikeButton.classList.add("fontStyle-strikethrough");
  strikeButton.setAttribute("title", "Strikethrough Highlighted Text");
  strikeButton.innerHTML = `Strikethrough`;
  strikeButton.addEventListener("click", () => {
    document.execCommand('strikethrough',false,null);
  });
  poemEditorFieldset.appendChild(strikeButton);
  const fontSelect = document.createElement("select");
  fontSelect.classList.add("input");
  fontSelect.id = "input-font";
  fontSelect.addEventListener("change", () => {
    changeFont(this);
  });
  poemEditorFieldset.appendChild(fontSelect);
  const optionArial = document.createElement("option");
  optionArial.value = "Arial";
  optionArial.innerText = "Arial";
  fontSelect.appendChild(optionArial);
  //editor textarea
  const editorArea = document.createElement("textarea");
  editorArea.classList.add("editor-textarea");
  editorArea.setAttribute("name", "");
  editorArea.setAttribute("id", "editor1");
  editorArea.setAttribute("contenteditable", true);
  editorArea.setAttribute("placeholder", "Write here.");
  // editorArea.addEventListener("blur", () => {
  //   setTimeout(() => {
  //     editorArea.focus();
  //   }, 0)
  // });
  bookViewDiv.appendChild(editorArea);

  //poem type example random
  const typeExamplesP = document.createElement("p");
  typeExamplesP.classList.add("type-examples-p");
  getRandomExamplePoem(examplePoemType.typeName);
  //typeExamplesP.innerHTML = `${randomPoem.title}`;
  containerDiv.appendChild(typeExamplesP);

  //user poem buttons (download, share, reset)
  const userPoemOptionsDiv = document.createElement("div");
  userPoemOptionsDiv.classList.add("user-poem-options-div");
  poemTypeContent.appendChild(userPoemOptionsDiv);
  const downloadButton = document.createElement("button");
  downloadButton.classList.add("download-button");
  downloadButton.innerText = "Download";
  userPoemOptionsDiv.appendChild(downloadButton);
  const shareButton = document.createElement("button");
  shareButton.classList.add("share-button");
  shareButton.innerText = "Share";
  userPoemOptionsDiv.appendChild(shareButton);
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.innerText = "Reset";
  userPoemOptionsDiv.appendChild(resetButton);

  //tools button
  const toolsDiv = document.createElement("div");
  toolsDiv.classList.add("tools-div");
  containerDiv.appendChild(toolsDiv);
  const toolsButton = document.createElement("button");
  toolsButton.classList.add("tools-button");
  toolsButton.innerText = "Tools";
  //add event listener here to open collapsible tools menu?
  toolsDiv.appendChild(toolsButton);

  let footer = createFooter();
  poemTypeContent.appendChild(footer);

  return poemTypeElement;
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { poemTypeElement };
