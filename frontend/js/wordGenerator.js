let initialWordDiv = document.getElementById("initial-word-form");
const initialWordInput = document.querySelector("#initial-word-form input");
const relatedWord = document.getElementById("related-word");
const history = document.getElementById("history");
const proxyURL = "https://cors.io/?"; // This is in order to bypass the 'Access-Control-Allow-Origin' error
const maxRelatedWordDistance = 10; // Index of the next related word (from related words' array) will be between 0 and maxRelatedWordDistance-1
let rhyming = document.getElementById("ryhming");
let rWord = document.getElementById("rWord");
let spelledLike = document.getElementById("spelledLike");
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
   const radioButton = ['Rhyming', 'Related', 'spelledLike'];  /*I can fix the spacing here, but it has to be done here and will have to match lines 31-36 values*/
   radioButton.forEach((radioButtonValue, i) =>{
        const radioButtonLabels = ['Rhyming', 'Related', 'Spelled Like'];
        const labelValue = document.createElement('label');
        labelValue.innerHTML = radioButtonLabels[i];
        labelValue.classList.add('radioButtonLabel');
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
            }else if(radioButtonValue == "spelledLike") {
                spelledLike = inputValue;
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
 

// Event Listeners
initialWordDiv = document.getElementById("initial-word-form");
initialWordDiv.addEventListener("submit", initialWordFormSubmit);
function initialWordFormSubmit(event) {
  if(event!=""){
    event.preventDefault();}
  const newInitialWordInput = initialWordForm.value.trim().toLowerCase();
  if(newInitialWordInput) {
    initialWordForm.blur();
  }
  relatedWordClick();
}


let radioButton1 = document.getElementById('radioButtonRhyming');
let radioButton2 = document.getElementById('radioButtonRelated');
let radioButton3 = document.getElementById('radioButtonspelledLike');
radioButton1.addEventListener('change', initialWordFormSubmit);
radioButton2.addEventListener('change', initialWordFormSubmit);
radioButton3.addEventListener('change', initialWordFormSubmit);
// document.getElementsByClassName('radioButtonLabel').forEach((element)=>{
//   element.addEventListener('click', initialWordFormSubmit);
// });

let wordExplorerOutputDiv = document.createElement('div');
rightColumn.appendChild(wordExplorerOutputDiv);

function relatedWordClick(event) {
  fetch(`https://api.datamuse.com/words?${radioButtonIf()}=` + initialWordForm.value)
  .then(res => res.json())
  .then(data => {
    const relatedWordIndex = Math.floor(Math.random()*Math.min(data.length,maxRelatedWordDistance));
    let i = 0;
    let stringOfResults = '';
    for(i=0;i<data.length;i++){
      if (i>0){
        let tempString =  ", " + data[i].word;
        stringOfResults += tempString;
      } else {
        stringOfResults = data[i].word;
      }
    }
    wordExplorerOutputDiv.innerHTML = '';
    wordExplorerOutputDiv.append(stringOfResults);
  })
  .catch(err => {
    console.log(err);
  });
}


function radioButtonIf (){    
  if(rhyming.checked==true){
  return "rel_rhy"
  }else if (rWord.checked==true)
  return "ml"
  else if (spelledLike.checked==true)
    return "sp"
  else
    alert("No channel selected");  
}

}

export {addWordGenerator};

