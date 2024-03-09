
const wordList=["Whale","Petunia","Towel"]
const phraseList =["Life", "the universe and the rest", "Thanks for the fish" ]
let score=0

let choice = prompt("Which list do you like to play:'words' or 'phrases' ?")

if(choice === "words"){
    for(let i=0; i<=wordList.length; i++) {
        let userWord = prompt("Enter a word:" + wordList[i])
         if(wordList[i] === userWord) {
           score ++;
        }
        }
        console.log("Votre score est de" + score + "sur" + wordList.length)
} else{
    for(let i=0; i<=phraseList.length; i++) {
        let userWord = prompt("Enter a word:" + phraseList[i])
         if(phraseList[i] === userWord) {
           score ++;
        }
        }

}




 
 
