const poetryTextEditor = document.getElementById('editor1');
const divPrintOutBox = document.getElementById('div--description');

let arraysOfEverything = '';
let arrayOfWordsGroupedByLine = '';
let arrayOfLinesStatuses = '';


/// ----------------- start of text editor code ---------------------- ///
function chooseColor(){
  var mycolor = document.getElementById("myColor").value;
  document.execCommand('foreColor', false, mycolor);
}

function changeFont(){
  var myFont = document.getElementById("input-font").value;
  document.execCommand('fontName', false, myFont);
}

function changeSize(){
  var mysize = document.getElementById("fontSize").value;
  document.execCommand('fontSize', false, mysize);
}

function checkDiv(){
  var editorText = document.getElementById("editor1").innerHTML;
  if(editorText === ''){
    document.getElementById("editor1").style.border = '5px solid red';
  }
}

function removeBorder(){
  document.getElementById("editor1").style.border = '1px solid transparent';
}
/// ----------------- end of text editor code -------------------------- ///






//////////////////////////////////////////////////////////////////////////
////////////////////// START OF WORD FUNCTIONS ///////////////////////////
//////////////////////////////////////////////////////////////////////////
const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};
function splitIntoLines(inString){
  let currentArrayOfLines = inString.split('<br>').join('#splitWithThisAgainLater##').split('div').join('#splitWithThisAgainLater##').split('#splitWithThisAgainLater##');
  currentArrayOfLines.filter(function (el){
    return (el != null && el != '');
  })
  return currentArrayOfLines;
}
function stripNonAlphanumeric(inString){
  let currentString = inString.replace(/[^a-z0-9-' ]+/gi, ' ');
  return currentString;
}
function makeArrayOfWords(inString){
  let allWords = inString.split(' ');
  var finalArrayOfWords = allWords.filter(function (el) {
    return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
  });
  return finalArrayOfWords;
}


function countSyllablesInOneWord() {
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////// TO DO LIST ////////////////////////////////////////////////////////////////////////////////////////////////////
///// [DONE] split into lines                 splitIntoLines(inString);
///// [DONE] split each line into words       stripNonAlphanumericAndMakeArrayOfWords(inString);
///// use some logic to see if I've already checked the word for syllables [maybe a 2nd array with bool values in a corresponding index #]
///// count each word's syllables      countSyllablesInOneWord();
///// add, then write the # of syllables to the document
///// add delay of 0.5-1? sec, then check syllable count of line
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function keepTrackOfWhichWordsHaveBeenCounted(){
  // use a multidimensional array (with push, pop & splice) to add & remove lines & words
    // Add feature to check if previous words have been changed. 

  ////////////////////////////////      \/     \/    \/     \/     \/     \/
  arrayOfWordsGroupedByLine = [];
  arrayOfLinesStatuses = [true, true, false];

  arraysOfEverything = [
    arrayOfWordsGroupedByLine,
    arrayOfLinesStatuses
  ];
}

keepTrackOfWhichWordsHaveBeenCounted();


poetryTextEditor.addEventListener('input', textChanged);


let arrayOfCurrentLineOfWords = [];
function textChanged(){
  let stringOfAllText = poetryTextEditor.innerHTML;
  clearChildren(divPrintOutBox);
  let arrayOfLinesOfText = splitIntoLines(stringOfAllText);
  arrayOfLinesOfText.forEach( function(element, i) {
    let stringOfCurrentLine = stripNonAlphanumeric(element);
    arrayOfCurrentLineOfWords = makeArrayOfWords(stringOfCurrentLine);
    divPrintOutBox.append((i+1)+': '+arrayOfCurrentLineOfWords); //print to box on right side of screen
    divPrintOutBox.append(document.createElement('br')); // adds line break
    arrayOfWordsGroupedByLine.push(arrayOfCurrentLineOfWords);
  });
  console.log(arrayOfWordsGroupedByLine);
}

textChanged();