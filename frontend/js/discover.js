import { clearChildren } from "./app.js";

const discoverElement = function () {
  const discoverElement = document.querySelector(".main-content");
  clearChildren(discoverElement);

  // const discoverHeader = document.createElement("h1");
  // discoverHeader.classList.add("discover-header");
  // discoverHeader.innerText = "Discover";
  // discoverElement.appendChild(discoverHeader);

  const discoverMainDiv = document.createElement("div");
  discoverMainDiv.classList.add("discover-div-main");
  discoverElement.appendChild(discoverMainDiv);

  const discoverDiv1 = document.createElement("div");
  discoverDiv1.classList.add("discover-div-1");
  discoverMainDiv.appendChild(discoverDiv1);
  const disDiv1Header = document.createElement("h2");
  disDiv1Header.classList.add("discover-div1-header");
  discoverDiv1.innerText = "Read Poems Online";
  discoverDiv1.appendChild(disDiv1Header);
  const disDiv1P = document.createElement("p");
  disDiv1P.classList.add("discover-div1-p");
  disDiv1P.innerHTML = `
    <a href="https://theadroitjournal.org/">The Adroit Journal</a><br>
    <a href="https://www.boaatpress.com/boaat/">BOAAT Journal</a><br>
    <a href="https://bwr.ua.edu/boyfriend-village/">BWR Online: Boyfriend Village</a><br>
    <a href="https://thediagram.com/">DIAGRAM</a><br>
    <a href="https://thefigureone.com/5a">Figure 1</a><br>
    <a href="https://www.foundryjournal.com/">Foundry Journal</a><br>
    <a href="https://www.guesthouselit.com/">Guesthouse</a><br>
    <a href="https://as.vanderbilt.edu/nashvillereview/">Nashville Review</a><br>
    <a href="https://www.natbrut.com/">Nat. Brut</a><br>
    <a href="http://notokensjournal.com/">No Tokens</a><br>
    <a href="http://www.oversoundpoetry.com/">Oversound</a><br>
    <a href="http://www.theshallowends.com/">The Shallow Ends</a>
    `;
  discoverDiv1.appendChild(disDiv1P);

  const discoverDiv2 = document.createElement("div");
  discoverDiv2.classList.add("discover-div-2");
  discoverMainDiv.appendChild(discoverDiv2);

  const discoverDiv3 = document.createElement("div");
  discoverDiv3.classList.add("discover-div-3");
  discoverMainDiv.appendChild(discoverDiv3);

  const discoverDiv4 = document.createElement("div");
  discoverDiv4.classList.add("discover-div-4");
  discoverMainDiv.appendChild(discoverDiv4);

  const discoverDiv5 = document.createElement("div");
  discoverDiv5.classList.add("discover-div-5");
  discoverMainDiv.appendChild(discoverDiv5);

  return discoverElement;
};

export { discoverElement };
