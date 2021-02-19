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


  const poetryTextEditor = document.getElementById('editor1');
  poetryTextEditor.addEventListener('input', textChanged);

  function textChanged(){
    let strOfAllText = poetryTextEditor.innerHTML;
    strOfAllText = strOfAllText.replace(/[^a-z0-9-' ]+/gi, ' ');
    let allWords = strOfAllText.split(' ');
    // allWords.forEach();
    console.log(allWords);
    var filtered = allWords.filter(function (el) {
      return (el != null || el != '' || el != 'nbsp');
    });
    // add delay of 0.5-1? sec, then check syllable count of line
    console.log(filtered);
  }