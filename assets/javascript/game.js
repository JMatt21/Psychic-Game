//Constant// Sets the max amount of guesses the player has
const maxGuesses = 4;

//Variables// Wins and losses are purely visual and serve no purpose as a variable
var guessesLeft = maxGuesses;
var guessesList = [];
var answer = "";

//Variable-To-ID-Links
var winsID = document.getElementById("wins");
var lossesID = document.getElementById("losses");
var guessesID = document.getElementById("guesses");
var guessesListID = document.getElementById("guessList");


//Functions// Generates a random number between 97 and 122, converts that into a char, and then returns it.
function generateRandomLetter() { //ASCII Reference (https://www.w3schools.com/charsets/ref_html_ascii.asp)
                                  //97 -> a    122 -> z
    return String.fromCharCode(Math.floor((Math.random() * 26)) + 97);
    //                                floor((0-.999) * 26) + 97
    //                                floor(0-25.999) + 97 = 97 <-> 122
}

function testGenerateRandomLetter() { //Tests generateRandomLetter() and logs an array
    var testList = [], testChar;//test variables
    while(testList.length < 26){//generateRandomLetter() can only generate 26 different characters so 
                                //this loop stops when the array is filled up with 26 unique entries
        testChar = generateRandomLetter();
        if (testList.indexOf(testChar) == -1){//Only pushes testChar if it does not exist in testList
            testList.push(testChar);
        }
    }
    console.log(testList.sort());
}

function emptyGuessesList() {
    guessesList = [];
    guessesListID.textContent = innerHTML = "";
}

document.onkeydown = function() {
    if (event.key >= 'a' && event.key <= 'z'){
        console.log(event.key);
        if (event.key == answer){
            winsID.textContent++;
            answer = generateRandomLetter();
            console.log("Answer: ", answer);
            emptyGuessesList();
        }
        else {
            if(guessesList.indexOf(event.key) == -1){
                guessesID.textContent = --guessesLeft;
                if (guessesLeft == 0){
                    lossesID.textContent++;
                    guessesLeft = maxGuesses;
                    guessesID.textContent = maxGuesses;
                    answer = generateRandomLetter();
                    console.log("Answer: ", answer);
                    emptyGuessesList();
                }
                else {
                    guessesList.push(event.key);
                    guessesListID.textContent += event.key + ", ";
                    guessesID.textContent = guessesLeft;
                }
            }
        }
    }
}

//On Startup
guessesID.textContent = guessesLeft;
answer = generateRandomLetter(); 
console.log("Answer: ", answer);
// testGenerateRandomLetter();










