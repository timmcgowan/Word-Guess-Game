var game


var valid_chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

var cat;              // Array of categories
var word ;            // Selected word
var guess ;           // Geuss
var ghistory = [ ];   // history of letters guessed
var remtries ;          // Remaining Tries
var counter ;         // Count geusses
var spaces;           // Number of spaces in word

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
//var cat_data = [
let categories = 
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
        ] 
    }
    
    //,{
    //    "verbs":[
    //        {"word":"run","desc":"move legs fast"},
    //        {"word":"dance","desc":"to move to a beat"}
    //    ]
    //} ]

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

// Count choices 
  let results = function () {
    showTries.innerHTML = "You have " + tries + " lives";
    if (tries < 1) {
      showTries.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showTries.innerHTML = "You Win!";
      }
    }
  }

