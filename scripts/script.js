
let noOfWords= wordList.length
let noOfPhrases= phraseList.length
let score=0



function choosePhrasesOrWords(){
  let choice = prompt("Which list do you like to play:'words' or 'phrases' ?")
  while (choice !== "words" && choice !== "phrases") {
    choice = prompt("Which list do you like to play:'words' or 'phrases' ?")
}
  return choice;
}





if(userChoice === "words"){
    for(let i=0; i<=wordList.length; i++) {
        let userWord = prompt("Enter a word:" + wordList[i])
         if(wordList[i] === userWord) {
           score ++;
        }
        }
        console.log("Your score is" + score + "on" + wordList.length)
} else{
    for(let i=0; i<=phraseList.length; i++) {
        let userWord = prompt("Enter a word:" + phraseList[i])
         if(phraseList[i] === userWord) {
           score ++;
        }
        }
        console.log("Your score is" + score + "on" + phraseList.length)
}


function displayResult(score, proposedWords){
  return "your score is" + score + "on"+  proposedWords ;
}

 
function launchGameLoop(){

}

function launchGame(){
let choice = choosePhrasesOrWords()
}