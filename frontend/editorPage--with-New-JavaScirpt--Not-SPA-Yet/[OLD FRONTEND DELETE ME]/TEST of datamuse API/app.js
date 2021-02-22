const outputBox = document.getElementById('div--testOutput');
const inputBox = document.getElementById('div--testInput');
var maxRelatedWordDistance = 100;
var wordToLookUp = '';
var arrayOfEverything = [[],[]];
var arrayOfOneLine = [];
var newWordArray = [];
var numberOfSyllables = '';
var data = '';

arrayOfEverything = [
    ["Count", "the", "syllables", "of", "these", "words"],
    ["and", "these", "words", "too"]
]

let newWords = ['Add', 'this', 'sentence']
for(i=0; i<newWords.length; i++){
    arrayOfOneLine.push(newWords[i]);
}
arrayOfEverything.push(arrayOfOneLine);
arrayOfEverything = arrayOfEverything.filter(function (el) {
    return (el != null && el != '' && el != 'nbsp' && el != 'br' && el != 'div');
  });
console.log('everything: ');
console.log(arrayOfEverything);











let getNumberOfSyllables = (inWordToLookUp) => {
    // console.log('wordtolookup: '+inWordToLookUp); 
    fetch("https://api.datamuse.com/words?sp=" + inWordToLookUp + "&md=s")
        .then(res => res.json())
        .then(data => {
            newWordArray = [];
            numberOfSyllables = data[0].numSyllables;
            // console.log('#syl: '+numberOfSyllables);
            // document.body.append(JSON.stringify(data));
            newWordArray.push(inWordToLookUp);
            newWordArray.push(true);
            newWordArray.push(numberOfSyllables); //
            arrayOfOneLine.push(newWordArray);
            // console.log(arrayOfOneLine);
            return newWordArray;
            })
        .catch(err => {
            console.log(err);
        });
        return numberOfSyllables;
    }

// for(i=0; i<arrayOfLineOne.length; i++){
//     wordToLookUp = arrayOfLineOne[i];
//     getNumberOfSyllables(wordToLookUp);
//     console.log(arrayOfOneLine);
// }







arrayOfEverything.forEach((element) => {
    console.log(element);
        element.forEach((element2) => {
            console.log(element2);
            // getNumberOfSyllables(element2);
            arrayOfEverything.push(getNumberOfSyllables(element2));
        })
})
console.log(arrayOfEverything);





// for(ii=0; ii<newWords[ii].length; ii++){
//     for(i=0; i<newWords[i].length; i++){
//         arrayOfEverything[ii][i].push(newWords[ii][i]);
//     }
// }



document.body.addEventListener('click', (e) => {
    e.stopPropagation();
    getNumberOfSyllables(inputBox.innerHTML);
});