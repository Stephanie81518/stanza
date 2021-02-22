let arrEverything = [];
let arrNewLine = [];
let arrNewWord = [];

let getNumberOfSyllables = (inWordToLookUp) => {
    fetch("https://api.datamuse.com/words?sp=" + inWordToLookUp + "&md=s")
        .then(res => res.json())
        .then(data => {
            arrNewWord = [];
            arrNewWord.push(data[0].word);
            arrNewWord.push(true);
            arrNewWord.push(data[0].numSyllables);
            arrNewLine.push(arrNewWord);
        })
        .catch(err => {
            console.log(err);
        });
    }

let testLine = ['check', 'these', 'words', 'please', 'onomatopoeia'];

testLine.forEach((element) => {
    arrNewLine.push(getNumberOfSyllables(element));
})

arrNewLine = arrNewLine.filter(function (el) {
    return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
  });  
console.log(arrNewLine);