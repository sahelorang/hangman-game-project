const secretPhrases = ["sahel", "you", "apple", "hangman", "god"];

let randomItem = "";

function selectRandomItem() {
  randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
  document.getElementById("letters").addEventListener("click", buttonHandler);
  console.log(randomItem);
}

function letterHandler() {}
function buttonHandler() {}

selectRandomItem();
