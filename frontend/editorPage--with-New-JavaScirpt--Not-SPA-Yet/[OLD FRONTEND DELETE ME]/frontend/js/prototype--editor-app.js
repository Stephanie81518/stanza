const poetryTextEditor = document.getElementById('editor1');
const divPrintOutBox = document.getElementById('div--description');


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

function keepTrackOfWhichWordsHaveBeenCounted(){
  // use a multidimensional array and push & pop to add & remove lines & words

  // arrayOfEverything[
  //    arrayOfPoemWords[line1Words[], line2Words[]],
  //    arrayOfWordsStatuses[line1WordsStatus[], line2WordsStatus[]]
  //    arrayOfLinesStatuses[line1, line2],
  // ]
}


// [DONE] split into lines                 splitIntoLines(inString);
// [DONE] split each line into words       stripNonAlphanumericAndMakeArrayOfWords(inString);

// use some logic to see if I've already checked the word for syllables [maybe a 2nd array with bool values in a corresponding index #]
// count each word's syllables      countSyllablesInOneWord();
// add, then write the # of syllables to the document

// console.log("big <div> enormous <br> dove".split('div').join('###').split('<br>').join('###').split('###').join('').split(' '));
// allWords.forEach();
// add delay of 0.5-1? sec, then check syllable count of line


poetryTextEditor.addEventListener('input', textChanged);


let arrayOfLine1 = ['word1', 'word2', 'word3'];
let arrayOfLine1WordsStatuses = [true, true, false]
let arrayOfLines = ['line1', 'line2', 'line3'];
let arrayOfLinesStatuses = [true, true, false];


let arraysOfEverything = [
  arrayOfLine1, 
  arrayOfLine1WordsStatuses, 
  arrayOfLines,
  arrayOfLinesStatuses
];
console.table(arraysOfEverything);

function textChanged(){
  let stringOfAllText = poetryTextEditor.innerHTML;
  clearChildren(divPrintOutBox);
  let arrayOfLinesOfText = splitIntoLines(stringOfAllText);
  arrayOfLinesOfText.forEach( function(element, i) {
    let stringOfCurrentLine = stripNonAlphanumeric(element);
    let arrayOfCurrentLineWords = makeArrayOfWords(stringOfCurrentLine);
    console.table(arrayOfCurrentLineWords);
    // let finalArrayMinusEmptyElements = stringOfCurrentLine.replace(/[^a-z0-9-' ]+/gi, ' ');
    // let finalArrayOfWords = finalArrayMinusEmptyElements.filter(function (el) {
      // return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div')});
    divPrintOutBox.append('line '+i+': '+stringOfCurrentLine);
    divPrintOutBox.append(document.createElement('br'));
  });

  

// array of arrays  -  each inner arry is one line's words!

  // let allLines = stringOfAllText.split(['<div>']);
  // console.log(allLines);
  // stringOfAllText = stringOfAllText.replace(/[^a-z0-9-' ]+/gi, ' ');
  // let allWords = stringOfAllText.split(' ');
  // var filteredWords = allWords.filter(function (el) {
  //   return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
  // });
  // console.log(filteredWords);
}

textChanged(); //runs when page loads
