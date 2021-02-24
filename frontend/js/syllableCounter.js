const poetryTextEditor = document.getElementById('editor1');

let arrayOfEverything = [];
let arrayCountOfSyllablesForEachLine = [];
let arrayOfAllLines = [];
let arrayOfThisLinesWords = [];
let arrayForOneWordAndNumSyllables = [];
const syllablesDisplay = document.getElementById('div--count-of-syllables-per-line');

const clearChildren = function (element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};
function stripNonAlphanumeric(inString){
    let currentString = inString.replace(/[^a-z0-9-' ↵]+/gi, ' ');
    return currentString;
}
function filterUnnecessaryStrings(inString){
    var finalArrayOfWords = allWords.filter(function (el) {
        return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
      });
    return finalArrayOfWords;
}

function updateSyllables(){
    syllablesDisplay.innerHTML = '';
    let sizeOfSyllablesArray = arrayOfEverything.length;
    let arrayCountOfSyllablesForEachLine = new Array(sizeOfSyllablesArray);
    arrayOfEverything.forEach((line, i)=>{
        totalSyllablesForThisLine = 0;
        line.forEach((word)=>{
            totalSyllablesForThisLine += word[1]
        })
        arrayCountOfSyllablesForEachLine[i] = totalSyllablesForThisLine;
    })
    arrayCountOfSyllablesForEachLine.forEach((element)=>{
        syllablesDisplay.innerHTML+=(element + '<br>');
    })
}

function createAllArrays(){
    arrayOfEverything = [];
    fullStringOfAllText = poetryTextEditor.innerHTML;
    splitIntoLines(fullStringOfAllText).forEach((el, i)=>{
        if(el == '' && i == 0 || el == null && i == 0){return;} //skips empty element at [0]
        arrayOfAllLines.push(el);
    })
    arrayOfAllLines.forEach((el) => {
        arrayOfEverything.push(splitIntoArrayOfWords(el))
    })
    arrayOfEverything.forEach((oneLine, i) => {
        oneLine.forEach((oneWord, ii) => {
            lookupSyllables(oneWord, i, ii)
        })
    })
    console.log(arrayOfEverything);
}

function splitIntoLines(inString){
    arrayOfAllLines = [];
    let currentArrayOfLines = inString.split('<div>');
    currentArrayOfLines.filter(function (el){
        return (el != null && el != '');
    })
    return currentArrayOfLines;
}


function splitIntoArrayOfWords(inLine){
    let thisLine = stripNonAlphanumeric(inLine);
    arrayOfThisLinesWords = thisLine.split(' ');
    arrayOfThisLinesWords = arrayOfThisLinesWords.filter(function (el) {
      return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
    });
    return arrayOfThisLinesWords;
}


function lookupSyllables(inWord, inLineNum, inWordNum){
    (async () => {
        const res = await fetch('https://api.datamuse.com/words?sp=' + inWord + '&md=s')
        const json = await res.json();
        arrayOfEverything[inLineNum][inWordNum] = [];
        arrayForOneWordAndNumSyllables = [];
        await arrayForOneWordAndNumSyllables.push(json[0].word);
        await  arrayForOneWordAndNumSyllables.push(json[0].numSyllables);
        arrayOfEverything[inLineNum][inWordNum] = await arrayForOneWordAndNumSyllables;
    })();
}



// 1 second time delay to prevent instantly querying the API: 
let timeout = null;
poetryTextEditor.addEventListener('keyup', function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        createAllArrays();
    }, 1000);
});


// Update syllables continuously (every second):
(async () => {
    const interval = setInterval(function() {
        updateSyllables();
      }, 1000);
    //  clearInterval(interval);
})();


createAllArrays();