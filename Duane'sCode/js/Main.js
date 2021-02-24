const initialWordForm = document.getElementById("initial-word-form");
const initialWordInput = document.querySelector("#initial-word-form input");
const relatedWord = document.getElementById("related-word");
const history = document.getElementById("history");
const proxyURL = "https://cors.io/?"; // This is in order to bypass the 'Access-Control-Allow-Origin' error
const maxRelatedWordDistance = 10; // Index of the next related word (from related words' array) will be between 0 and maxRelatedWordDistance-1
const rhyming = document.getElementById("ryhming");
const rWord = document.getElementById("rWord");
const synonym = document.getElementById("synonym");
const syllables = document.getElementById("syllables");
// Event Listeners
initialWordForm.addEventListener("submit", initialWordFormSubmit);
function initialWordFormSubmit(event) {
  if(event!=""){
    event.preventDefault();}
  const newInitialWordInput = initialWordInput.value.trim().toLowerCase();
  if(newInitialWordInput) {
    relatedWord.text = newInitialWordInput;
    history.innerHTML = `<span>${newInitialWordInput}</span>`;
    initialWordInput.value = "";
    initialWordInput.blur();
  }
}
relatedWord.addEventListener("click", relatedWordClick);
function relatedWordClick(event) {
  event.preventDefault();
  relatedWord.classList.toggle("disabled");
  fetch(`https://api.datamuse.com/words?${radioButton()}=` + relatedWord.textContent)
  // fetch(proxyURL + "https://api.datamuse.com/words?ml=" + relatedWord.textContent)
  .then(res => res.json())
  .then(data => {
    const relatedWordIndex = Math.floor(Math.random()*Math.min(data.length,maxRelatedWordDistance));
    if(data[relatedWordIndex]) {
      relatedWord.text = data[relatedWordIndex].word;
      history.innerHTML += ` &rarr; <span>${data[relatedWordIndex].word}</span>`;
    }
    relatedWord.classList.toggle("disabled");
  })
  .catch(err => {
    console.log(err);
    relatedWord.classList.toggle("disabled");
  });
}
// history.addEventListener("mouseover", historyMouseover);
// function historyMouseover(event) {
//   if(event.target.tagName.toLowerCase()==="span" && !event.target.hasAttribute("data-tooltip")) {
//     fetch(`https://api.datamuse.com/words?${radioButton()}=` + event.target.textContent)
//     // fetch(proxyURL + "https://api.datamuse.com/words?rel_syn=" + event.target.textContent)
//     .then(res => res.json())    
//     .then(data => data.length ? event.target.setAttribute("data-tooltip", data.slice(0, Math.min(data.length,10)).map(syn => syn.word).join(", ")) : event.target.setAttribute("data-tooltip", "Synonyms Not Found!"))
//     .catch(err => console.log(err));
//   }
// }
function radioButton (){    
  if(rhyming.checked==true){
  return "rel_rhy"
  }else if (rWord.checked==true)
  return "ml"
  else if (synonym.checked==true)
    return "sl"
  else
    alert("No channel selected");  
}
white_check_mark
eyes
raised_hands



