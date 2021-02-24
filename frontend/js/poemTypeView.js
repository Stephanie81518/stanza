import { getRandomExamplePoem } from "./app.js";
import { createFooter } from "./footer.js";

const poemTypeElement = function (examplePoemType) {
  const poemTypeContent = document.querySelector(".main-content");
  clearChildren(poemTypeContent);

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("descriptionDiv");
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
  italicButton.innerHTML = `<img id="italic-image" src="images/italics-button-image.png">`;
  italicButton.addEventListener("click", () => {
    document.execCommand('italic',false,null);
  });
  poemEditorFieldset.appendChild(italicButton);
  const boldButton = document.createElement("button");
  boldButton.classList.add("fontStyle-bold");
  boldButton.setAttribute("title", "Bold Highlighted Text");
  boldButton.innerHTML = `<img id="bold-image" src="images/bold-button-image.png">`;
  boldButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.execCommand('bold',false,null);
    console.log("bold button clicked");
  });
  poemEditorFieldset.appendChild(boldButton);
  const underlineButton = document.createElement("button");
  underlineButton.classList.add("fontStyle-underline");
  underlineButton.setAttribute("title", "Underline Highlighted Text");
  underlineButton.innerHTML = `<img id="underline-image" src="images/underline-button-image.png">`;
  underlineButton.addEventListener("click", () => {
    document.execCommand('underline',false,null);
  });
  poemEditorFieldset.appendChild(underlineButton);
  const strikeButton = document.createElement("button");
  strikeButton.classList.add("fontStyle-strikethrough");
  strikeButton.setAttribute("title", "Strikethrough Highlighted Text");
  strikeButton.innerHTML = `<img id="strikethrough-image" src="images/strikethrough-button-image.png">`;
  strikeButton.addEventListener("click", () => {
    document.execCommand('strikethrough',false,null);
  });
  poemEditorFieldset.appendChild(strikeButton);
  const fontSelect = document.createElement("select");
  fontSelect.classList.add("input");
  fontSelect.setAttribute("id", "font-input");
  fontSelect.addEventListener("change", () => {
    changeFont(this);
  });
  poemEditorFieldset.appendChild(fontSelect);
  const optionArial = document.createElement("option");
  optionArial.value = "Arial";
  optionArial.innerText = "Arial";
  fontSelect.appendChild(optionArial);
  const optionBallet = document.createElement("option");
  optionBallet.value = "Ballet";
  optionBallet.innerText = "Ballet";
  fontSelect.appendChild(optionBallet);
  const optionHelvetica = document.createElement("option");
  optionHelvetica.value = "Helvetica";
  optionHelvetica.innerText = "Helvetica";
  fontSelect.appendChild(optionHelvetica);
  const optionNewsreader = document.createElement("option");
  optionNewsreader.value = "Newsreader";
  optionNewsreader.innerText = "Newsreader";
  fontSelect.appendChild(optionNewsreader);
  const optionNotoSansJp = document.createElement("option");
  optionNotoSansJp.value = "Noto Sans JP";
  optionNotoSansJp.innerText = "Noto Sans JP";
  fontSelect.appendChild(optionNotoSansJp);
  const optionPtSerif = document.createElement("option");
  optionPtSerif.value = "PT Serif";
  optionPtSerif.innerText = "PT Serif";
  fontSelect.appendChild(optionPtSerif);
  const optionRoboto = document.createElement("option");
  optionRoboto.value = "Roboto";
  optionRoboto.innerText = "Roboto";
  fontSelect.appendChild(optionRoboto);
  const optionSource = document.createElement("option");
  optionSource.value = "Source Sans Pro";
  optionSource.innerText = "Source Sans Pro";
  fontSelect.appendChild(optionSource);
  const optionTimesNew = document.createElement("option");
  optionTimesNew.value = "Times New Roman";
  optionTimesNew.innerText = "Times New Roman";
  fontSelect.appendChild(optionTimesNew);
  const optionTruculenta = document.createElement("option");
  optionTruculenta.value = "Truculenta";
  optionTruculenta.innerText = "Truculenta";
  fontSelect.appendChild(optionTruculenta);

  //
  const alignLeftButton = document.createElement("button");
  alignLeftButton.classList.add("align-left-button");
  alignLeftButton.innerHTML = `<img id="alignleft-image" src="images/left-align-button-image.png">`;
  alignLeftButton.addEventListener("click", () => {
    document.execCommand('justifyLeft', false, null);
  });
  poemEditorFieldset.appendChild(alignLeftButton);
  const alignCenterButton = document.createElement("button");
  alignCenterButton.classList.add("align-center-button");
  alignCenterButton.innerHTML = `<img id="aligncenter-image" src="images/center-button-image.png">`;
  alignCenterButton.addEventListener("click", () => {
    document.execCommand('justifyCenter', false, null);
  });
  poemEditorFieldset.appendChild(alignCenterButton);
  const alignRightButton = document.createElement("button");
  alignRightButton.classList.add("align-right-button");
  alignRightButton.innerHTML = `<img id="alignright-image" src="images/right-align-button-image.png">`;
  alignRightButton.addEventListener("click", () => {
    document.execCommand('justifyRight', false, null);
  });
  poemEditorFieldset.appendChild(alignRightButton);
  const redoButton = document.createElement("button");
  redoButton.classList.add("redo-apply-button");
  redoButton.innerHTML = `<img id="redo-image" src="images/redo-button-image.png">`;
  redoButton.addEventListener("click", () => {
    document.execCommand('redo', false, null);
  });
  poemEditorFieldset.appendChild(redoButton);
  const undoButton = document.createElement("button");
  undoButton.classList.add("undo-apply-button");
  undoButton.innerHTML = `<img id="undo-image" src="images/undo-button-image.png">`;
  undoButton.addEventListener("click", () => {
    document.execCommand('undo', false, null);
  });
  poemEditorFieldset.appendChild(undoButton);
  const colorChoice = document.createElement("input");
  colorChoice.classList.add("color-apply");
  colorChoice.setAttribute("type", "color");
  colorChoice.setAttribute("id", "myColor");
  colorChoice.addEventListener("change", ()  => {
    chooseColor();
  });
  poemEditorFieldset.appendChild(colorChoice);
  const fontSizeSelect = document.createElement("select");
  fontSizeSelect.classList.add("input");
  fontSizeSelect.id = "fontSize";
  fontSizeSelect.addEventListener("change", () => {
    changeSize();
  });
  poemEditorFieldset.appendChild(fontSizeSelect);
  const optionSize1 = document.createElement("option");
  optionSize1.value = "1";
  optionSize1.innerText = "1";
  fontSizeSelect.appendChild(optionSize1);


  //editor textarea
  const editorArea = document.createElement("div");
  editorArea.classList.add("editor-div");
  editorArea.setAttribute("name", "");
  editorArea.setAttribute("id", "editor1");
  editorArea.setAttribute("contenteditable", true);
  editorArea.setAttribute("data-text", "Write here.");
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

  //let footer = createFooter();
  //poemTypeContent.appendChild(footer);

  return poemTypeElement;
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { poemTypeElement };
