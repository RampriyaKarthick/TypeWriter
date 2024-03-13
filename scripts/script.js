

function choosePhrasesOrWords(){
  let choice = prompt("Which list do you like to play:'words' or 'phrases' ?")
  while (choice !== "words" && choice !== "phrases") {
    choice = prompt("Which list do you like to play:'words' or 'phrases' ?")
}
  return choice;
}


function launchGameLoop(proposedList){
  let score=0
  for(let i= 0; i< proposedList.length; i++){
    let userWord = prompt("Enter the word:" + proposedList[i])
    if(userWord === proposedList[i]){
      score++
    }
  }
return score;
}



function displayResult(score, proposedWords){
  let scoreZone = document.querySelector(".scoreZone span")
  let displayScore = `${score} / ${proposedWords}`
  scoreZone.textContent = displayScore; //.innerText can also be used instead of textContent
}


 

function launchGame(){
let choice = choosePhrasesOrWords()
let score = 0
let proposedWords= 0

if(choice==="words"){
  score = launchGameLoop(wordList)
  proposedWords = wordList.length
}else{
  score =launchGameLoop(phraseList)
  proposedWords = phraseList.length
}
displayResult(score, proposedWords);
}