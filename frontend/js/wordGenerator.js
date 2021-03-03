let initialWordDiv = document.getElementById("initial-word-form");
const initialWordInput = document.querySelector("#initial-word-form input");
const relatedWord = document.getElementById("related-word");
const history = document.getElementById("history");
const proxyURL = "https://cors.io/?"; // This is in order to bypass the 'Access-Control-Allow-Origin' error
const maxRelatedWordDistance = 10; // Index of the next related word (from related words' array) will be between 0 and maxRelatedWordDistance-1
let rhyming = document.getElementById("ryhming");
let rWord = document.getElementById("rWord");
let synonym = document.getElementById("synonym");
const syllables = document.getElementById("syllables");

function addWordGenerator () {
   //Radio Buttons
   const radioButtonDiv = document.createElement("div");
   radioButtonDiv.classList.add("radio-button-div");
   const radioButtonHeader = document.createElement("h3");
   radioButtonHeader.classList.add("radio-button-header");
   radioButtonHeader.innerHTML ="Word Explorer";
   radioButtonDiv.appendChild(radioButtonHeader);
   const radioButtonExplanation = document.createElement("div");
   radioButtonExplanation.innerHTML ="Find new words & inspiration with this tool.";
   radioButtonExplanation.style.paddingBottom = '7px'
   radioButtonDiv.appendChild(radioButtonExplanation);

   let containerDiv = document.getElementById("containerDiv");
   containerDiv.appendChild(radioButtonDiv);
   const radioButton = ['Rhyming', 'Related', 'Synonyms'];
   radioButton.forEach((radioButtonValue, i) =>{
        const labelValue = document.createElement('label');
        labelValue.innerHTML = radioButtonValue;
        const inputValue = document.createElement('input');
        inputValue.type = "radio";
        inputValue.value = radioButtonValue;
        inputValue.setAttribute('id', `radioButton${radioButtonValue}`)
        inputValue.name = "selector";
        inputValue.rButtonValue = i;
        if (radioButtonValue == "Rhyming") {
            rhyming = inputValue;
                inputValue.checked = "checked";
            }else if (radioButtonValue == "Related") {
                rWord = inputValue;
            }else if(radioButtonValue == "Synonyms") {
                synonym = inputValue;
        }
        labelValue.style.paddingLeft = '3px';
        labelValue.style.paddingRight = '15px';
        radioButtonDiv.appendChild(inputValue);
        radioButtonDiv.appendChild(labelValue);
   })
 
   rightColumn.appendChild(radioButtonDiv); 
     
   // Initial word form
   initialWordDiv = document.createElement("form");
   initialWordDiv.setAttribute("id","initial-word-form");
   containerDiv.appendChild(initialWordDiv);
   const initialWordForm = document.createElement("input");
   // initialWordForm.classList.add("form");
   initialWordForm.setAttribute('placeholder', 'Enter a Word');  
   initialWordDiv.appendChild(initialWordForm);
   rightColumn.appendChild(initialWordDiv);
 
   // Placeholder for Word Generator output
   const relatedWord = document.createElement("a");
   relatedWord.classList.add("related-word");
   relatedWord.href = "#";
   rightColumn.appendChild(relatedWord);
 
   const wordHistory = document.createElement("p");
   wordHistory.classList.add("history");
   wordHistory.innerHTML = ""
   rightColumn.appendChild(wordHistory);



// Event Listeners
initialWordDiv = document.getElementById("initial-word-form");
initialWordDiv.addEventListener("submit", initialWordFormSubmit);
function initialWordFormSubmit(event) {
  if(event!=""){
    event.preventDefault();}
  const newInitialWordInput = initialWordForm.value.trim().toLowerCase();
  if(newInitialWordInput) {
    relatedWord.text = newInitialWordInput;
    wordHistory.innerHTML = `<span>${newInitialWordInput}</span>`;
    // initialWordForm.value = "";
    initialWordForm.blur();
  }
}



// const radioButton = ['Rhyming', 'Related', 'Synonyms'];
// radioButton
let radioButton1 = document.getElementById('radioButtonRhyming');
let radioButton2 = document.getElementById('radioButtonRelated');
let radioButton3 = document.getElementById('radioButtonSynonyms');
radioButton1.addEventListener('change', initialWordFormSubmit);
radioButton2.addEventListener('change', initialWordFormSubmit);
radioButton3.addEventListener('change', initialWordFormSubmit);


relatedWord.addEventListener("click", relatedWordClick);
function relatedWordClick(event) {
  // event.preventDefault();
  relatedWord.classList.toggle("disabled");
  console.log(relatedWord.textContent);
  fetch(`https://api.datamuse.com/words?${radioButtonIf()}=` + relatedWord.textContent)
  // fetch(proxyURL + "https://api.datamuse.com/words?ml=" + relatedWord.textContent)
  .then(res => res.json())
  .then(data => {
    const relatedWordIndex = Math.floor(Math.random()*Math.min(data.length,maxRelatedWordDistance));

    let i;
    let stringOf10Results = '';
    for(i=0;i<10;i++){
      if (stringOf10Results != '') {
        let tempString =  ", " + data[i].word;
        console.log(data[i].word);
        stringOf10Results += tempString;
      } else {
        stringOf10Results = console.log(data[i].word);
      }
    }
    console.log(stringOf10Results);

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
//     fetch(`https://api.datamuse.com/words?${radioButtonIf()}=` + event.target.textContent)
//     // fetch(proxyURL + "https://api.datamuse.com/words?rel_syn=" + event.target.textContent)
//     .then(res => res.json())    
//     .then(data => data.length ? event.target.setAttribute("data-tooltip", data.slice(0, Math.min(data.length,10)).map(syn => syn.word).join(", ")) : event.target.setAttribute("data-tooltip", "Synonyms Not Found!"))
//     .catch(err => console.log(err));
//   }
// }
function radioButtonIf (){    
  if(rhyming.checked==true){
  return "rel_rhy"
  }else if (rWord.checked==true)
  return "ml"
  else if (synonym.checked==true)
    return "rel_syn"
  else
    alert("No channel selected");  
}

}

export {addWordGenerator};

