let totalSyllablesForLine1 = 0;
let totalSyllablesForLine2 = 0;
let totalSyllablesForLine3 = 0;
let totalSyllablesForLine4 = 0;
let totalSyllablesForLine5 = 0;
let totalSyllablesForLine6 = 0;

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


// split into lines                 splitIntoLines(inString);
// split each line into words       stripNonAlphanumericAndMakeArrayOfWords(inString);
// count each word's syllables      countSyllablesInOneWord();
// add, then write the # of syllables to the document

// console.log("big <div> enormous <br> dove".split('div').join('###').split('<br>').join('###').split('###').join('').split(' '));
// allWords.forEach();
// add delay of 0.5-1? sec, then check syllable count of line

const poetryTextEditor = document.getElementById('editor1');
poetryTextEditor.addEventListener('input', textChanged);

function textChanged(){
  let stringOfAllText = poetryTextEditor.innerHTML;

  // let arrayOfLinesOfText = splitIntoLines(stringOfAllText);
  let lineCount = 1;
  let arrayOfLinesOfText = splitIntoLines(stringOfAllText);
  
  console.log(arrayOfLinesOfText);

  

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

function splitIntoLines(inString){
  let currentString = inString.split('<br>').join('#splitWithThisAgainLater##').split('div').join('#splitWithThisAgainLater##').split('#splitWithThisAgainLater##');
  return currentString;
}


function stripNonAlphanumericAndMakeArrayOfWords(inString){
  let currentString = inString.replace(/[^a-z0-9-' ]+/gi, ' ');
  let allWords = currentString.split(' ');
  var finalArrayOfWords = allWords.filter(function (el) {
    return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
  });
  console.log(finalArrayOfWords);
}


function countSyllablesInOneWord() {

}