const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("main-header");
    header.innerHTML = `<h1>Stanza</h1>`;
    return header;
  };
  
  export { createHeader };