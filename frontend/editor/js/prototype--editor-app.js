const poetryTextEditor = document.getElementById('editor1');
const divPrintOutBox = document.getElementById('div--description');
let arrFinalCountAndOutput = [];
let arrEverything = [];
let arrNewWord = [];


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




////////////////////// START OF WORD FUNCTIONS ///////////////////////////

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};
function splitIntoLines(inString){
  let currentArrayOfLines = inString.split('<div>');
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



let x = [];

// const response = await fetch("https://api.datamuse.com/words?sp=sky&md=s");
// console.log(response);

function fetchOneWordsSyllables(inWord){
    fetch("https://api.datamuse.com/words?sp=" + inWord + "&md=s")
    .then(res => res.json())
    .then(data => {
      arrNewWord = [];
      // arrNewWord.push(data[0].word);
      // arrNewWord.push(true);
      // arrNewWord.push(data[0].numSyllables);
      x[data[0].word] = data[0].numSyllables;
      // testReturnValue(arrNewWord);
      // arrNewLine.push(arrNewWord);
      })
    .catch(err => {
        console.log(err);
    });
    console.log(arrNewWord);
  }
fetchOneWordsSyllables('water');
function testReturnValue(inArrWord){
  x = inArrWord;
  console.log('test: '+ inArrWord);
}
// countSyllablesInOneWord("onomatopoeia");
// console.log(arrNewLine);





let countSyllablesInAllLinesOfWords = () => {
    arrFinalCountAndOutput = [];
  let stringOfAllText = poetryTextEditor.value;
  let arrOfLinesOfText = splitIntoLines(stringOfAllText);
  arrOfLinesOfText.forEach((element) => {
    let arrNewLine = [];
    let stringOfThisLine = stripNonAlphanumeric(element);
    let arrThisLineOfWords = makeArrayOfWords(stringOfThisLine);
    // console.log(arrThisLineOfWords);



    // for(j=0; j<arrThisLineOfWords.length; j++){
    //   fetch("https://api.datamuse.com/words?sp=" + arrThisLineOfWords[j] + "&md=s")
    //   .then(res => res.json())
    //   .then(data => {
    //     arrNewWord = [];
    //     arrNewWord.push(data[0].word);
    //     arrNewWord.push(true);
    //     arrNewWord.push(data[0].numSyllables);
    //     arrNewLine.push(arrNewWord);
    //     })
    //   .catch(err => {
    //       console.log(err);
    //   });
    // }

    arrFinalCountAndOutput.push([arrNewLine]);
    console.log(arrNewLine);
  })
  arrFinalCountAndOutput.forEach((el, i)=>{
    console.log(el[0][i]);
  });
}
countSyllablesInAllLinesOfWords();


// 1 second time delay to prevent instantly querying the API: 
let timeout = null;
poetryTextEditor.addEventListener('keyup', function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      countSyllablesInAllLinesOfWords();
    }, 1000);
});







//  use some logic to see if I've already checked the word for syllables [maybe a 2nd array with bool values in a corresponding index #]
//  count each word's syllables      countSyllablesInOneWord();
//  add, then write the # of syllables to the document
//  add delay of 0.5-1? sec, then check syllable count of line
function keepTrackOfWhichWordsHaveBeenCounted(){
}
keepTrackOfWhichWordsHaveBeenCounted();