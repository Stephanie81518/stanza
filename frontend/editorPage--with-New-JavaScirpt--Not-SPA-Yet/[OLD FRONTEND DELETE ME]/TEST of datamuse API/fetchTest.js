let arr1 = [[],[],[]];
let arr2 = [];


let getNumberOfSyllables = (inWordToLookUp) => {
    fetch("https://api.datamuse.com/words?sp=" + inWordToLookUp + "&md=s")
        .then(res => res.json())
        .then(data => {
            arr1[2].push('cat');
            arr1[1].push(data);
            arr2.push(data[0].word);
            arr2.push(true);
            arr2.push(data[0].numSyllables);
            arr1[0].push(arr2);
            arr1.push('fish');
            console.log(arr1);
        })
        .catch(err => {
            console.log(err);
        });
    }

document.body.addEventListener('click', ()=>{
    console.log(arr1);
})

getNumberOfSyllables("onomatopoeia");

// let inWordToLookUp = "dog";
// let extExam = '';
// async function renderExam(inWordToLookUp) {
//     const exam = await fetchExam(inWordToLookUp);
//     console.log(exam);
//     extExam = exam;
//     document.body.append(JSON.stringify(extExam));
// }

// renderExam("dog");

// document.body.append(extExam);