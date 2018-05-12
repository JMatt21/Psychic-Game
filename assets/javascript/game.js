//Variables
var wins = 0, losses = 0, guessesLeft = 5;
var guessesList = [];
var guess = "", answer = "";

//Functions
function generateRandomLetter() {
    answer = String.fromCharCode(Math.floor(Math.random() * 26) + 1 + 97);
    console.log("The Answer: ", answer);
}

function emptyGuessesList() {
    document.getElementById("guessList").innerHTML = "";
    guessesList = [];
}
document.onkeydown = function() {
//Variable-To-ID-Links
var winsID = document.getElementById("wins");
var lossesID = document.getElementById("losses");
var guessesID = document.getElementById("guesses");
var guessesListID = document.getElementById("guessList");

    if (event.key >= 'a' && event.key <= 'z'){
        console.log(event.key);
        if (event.key == answer){
            wins++;
            winsID.textContent = wins;
            generateRandomLetter();
        }
        else {
            if(guessesList.indexOf(event.key) == -1){
                guessesLeft--;
                if (guessesLeft == 0){
                    losses++;
                    lossesID.textContent = losses;
                    guessesLeft = 5;
                    guessesID.textContent = guessesLeft;
                    emptyGuessesList();
                    generateRandomLetter();
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

//The Rest
generateRandomLetter();










