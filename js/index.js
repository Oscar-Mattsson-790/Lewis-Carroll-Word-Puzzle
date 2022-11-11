"use strict";

// Word Puzzle
let words = [
  {
    startWord: "FOUR",
    endWord: "FIVE",
  },
  {
    startWord: "EYE",
    endWord: "LID",
  },
  {
    startWord: "TIGER",
    endWord: "ROSES",
  },
  {
    startWord: "WHEAT",
    endWord: "BREAD",
  },
];

let word = randomizeWord();
let input = document.querySelector("#inputText");
let newWord = "";

function randomizeWord() {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

document.querySelector(".btn").addEventListener("click", function () {
  word = randomizeWord();
  document.querySelector(".startWord").innerHTML = word.startWord;
  document.querySelector(".endWord").innerHTML = word.endWord;
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && input.value.length === word.startWord.length) {
    newWord = input.value;
    console.log(newWord);
    let diff = 0;
    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] !== word.startWord.length) {
        diff++;
      }
    }
  } else {
    console.log("Wrong");
  }
});

async function gameEngine() {}
