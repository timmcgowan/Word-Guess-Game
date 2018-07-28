// Establish the global variables
var gamestart = ''; //gamestarted?
var valid_chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

var cat;              // categories * not used yet.
var gword;            // Selected word * set by genWord.
var gdesc;            // Selected word description (hint).
var guess;           // Geuss
var ghistory = [ ];   // history of letters guessed
var tries = 13 ;          // Remaining Tries
var counter ;         // Count geusses
var spaces;           // Number of spaces in word
var remainingTries; 
var correctTries    ; 
var wrongTries;

// word database (json of course, future API? When I have time.  ¯\_(ツ)_/¯ )
var categories = 
    {
    "threeletter":[
        {"word":"axe","desc":"a chopping tool"},
        {"word":"biz","desc":"business"},
        {"word":"box","desc":"a container"},
        {"word":"cox","desc":"the person who steers a rowing boat"},
        {"word":"coz","desc":"archaic a cousin"},
        {"word":"dux","desc":"Scottish a top pupil at school"},
        {"word":"dzo","desc":"a crossbreed of a cow and a yak"},
        {"word":"fax","desc":"an electronic copy of a document"},
        {"word":"fez","desc":"a type of hat"},
        {"word":"fix","desc":"to attach or repair"},
        {"word":"fox","desc":"an animal"},
        {"word":"hex","desc":"N. Amer. to cast a spell on someone"},
        {"word":"kex","desc":"cow parsley"},
        {"word":"lax","desc":"not strict or careful enough"},
        {"word":"lox","desc":"N. Amer. smoked salmon"},
        {"word":"lux","desc":"a unit of illumination"},
        {"word":"max","desc":"maximum"},
        {"word":"Mex","desc":"Mexican"},
        {"word":"mix","desc":"to blend or combine"},
        {"word":"nix","desc":"nothing"},
        {"word":"pax","desc":"a call for a truce"},
        {"word":"pix","desc":"pictures"},
        {"word":"pox","desc":"a disease"},
        {"word":"pyx","desc":"a container for Communion bread"},
        {"word":"Rex","desc":"the reigning king"},
        {"word":"sax","desc":"a saxophone"},
        {"word":"saz","desc":"a kind of lute"},
        {"word":"sex","desc":"being male or female"},
        {"word":"six","desc":"the number"},
        {"word":"tax","desc":"money paid to a government"},
        {"word":"tux","desc":"a tuxedo"},
        {"word":"Uzi","desc":"a type of sub-machine gun"},
        {"word":"vex","desc":"to annoy"},
        {"word":"vox","desc":"vocals voice"},
        {"word":"wax","desc":"substance used to make candles etc."},
        {"word":"wiz","desc":"whizz"},
        {"word":"zag","desc":"a sharp change of direction"},
        {"word":"zap","desc":"to destroy"},
        {"word":"zed","desc":"the letter Z"},
        {"word":"zee","desc":"N. Amer. the letter Z"},
        {"word":"Zen","desc":"a type of Buddhism"},
        {"word":"zig","desc":"a sharp change of direction"},
        {"word":"zip","desc":"a fastener"},
        {"word":"zit","desc":"a spot"},
        {"word":"zol","desc":"S. African a hand-rolled cigarette"},
        {"word":"zoo","desc":"a place where wild animals are kept"}
        ],
     "verbs":[
        {"word":"run","desc":"move legs fast"},
        {"word":"dance","desc":"to move to a beat"},
        {"word":"walk","desc":"taking steps"},
        {"word":"jump","desc":"to leave the ground with your feet"},
        {"word":"stand","desc":"to stop sitting"},
       ]
    }

function updateGuesses(letter) {
    tries--; // decrement guesses left
    document.getElementById("jtron-text3").innerHTML = "Remaining tries: " + tries;
  
    if (gword.indexOf(letter) === -1) { // letter is NOT in the word
      wrongTries.push(letter); // update letters guessed
      document.getElementById('letters').innerHTML = wrongTries.join(', ');
    } else { // letter IS in the word
      // replace underscore with the letter
      for (var i = 0; i < gword.length; i++) {
        if (gword[i] === letter) {
          correctTries[i] = letter;
        }
      }
  
      document.getElementById('jtron-text').innerHTML = correctTries.join(' ');
    }
  }

// Choose category > The word list 
var list = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "3 letter words";
      console.log("test out")
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "English Verbs";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "States";
    }
  }
  // ¯\_(ツ)_/¯

    var catString = JSON.stringify(categories);
    var catObj = (JSON.parse(catString));
    //  var catArr = catObj.words;
    
    function printWord(catSelection) {
    console.log (catString);
    for (var j = 0; j < catObj.threeletter.length; j++) {
        console.log ("Cat Word:" + " \" " + j + " \" " + catObj.threeletter[j].word); 
    }

        //var objectKeys = Object.keys(catObj);
        console.log(catSelection);
        for (var i = 0; i < catObj[catSelection].length; i++){
            //JSON.stringify
            console.log ("Cat Words " + catObj[catSelection].i.word); 
            console.log ("Cat Word Desc " + catObj[catSelection].i.desc);
        }
    }

    //Determine number of words in
    function evalword(_word){
        let n = _word.length;
        return n;
    }

    function checkWin() {
        if (correctTries.indexOf('_') === -1) {
            document.getElementById("jtron-text4").innerHTML = "You have Won!";
            document.getElementById("jtron-text5").innerHTML = "&nbsp;";
          //  alert('You Won!');
        } else if (tries < 4 && tries != 0) {
            document.getElementById("jtron-text4").innerHTML = "You have " + tries + " lives"  ;
            document.getElementById("jtron-text5").innerHTML = "Consider this hint: <b><u>" + gdesc + "</u></b>";
          //alert('You Lost!');
        } else if (tries === 0) {
            document.getElementById("jtron-text4").innerHTML = "You have Lost!";
            document.getElementById("jtron-text5").innerHTML = "&nbsp;";
          //alert('You Lost!');
        }
      }

      function playgame(ws) {
        wrongTries = [];
        correctTries = [];  
        for (var c = 0; c < catObj.length; c++) {
            console.log ("Categery:" + " \" " + c + " \" " + catObj[c]); 
        }
       // var gword = "";
        var x = '';
        var wid = '';
        
        if (ws == "threeletter") {
            x = catObj.threeletter.length;
            wid = Math.floor(Math.random() * x);
            gword = catObj.threeletter[wid].word;
            gdesc = catObj.threeletter[wid].desc;
        } else {
            x = catObj.verbs.length;
            wid = Math.floor(Math.random() * x);
            gword = catObj.verbs[wid].word;
            gdesc = catObj.verbs[wid].desc;
        }
        //let objsize = catObj.verbs
        // Generate ID
        //let wid = Math.floor(Math.random() * 10);
        //let gword = catObj.verbs[wid].word;

        // create this to evaluate a word, but may be redundant... 
        let n = evalword(gword)
        // Generate underscores
        for (var i = 0; i < gword.length; i++) {
            correctTries.push('_');
        }

        document.getElementById("jtron-text").innerHTML = correctTries.join(' ');
        document.getElementById("jtron-text2").innerHTML = "Your word is " + n + " characters." ;        
        document.getElementById("jtron-text3").innerHTML = "Remaining tries: " + tries;
        
          document.onkeyup = function (event) {
            var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
            updateGuesses(letterGuessed);
            checkWin();
          };
        }

