"use strict";

const wordCombinations = {
  combo1: ["FOUR", "FIVE"],
  combo2: ["EYE", "LID"],
  combo3: ["TIGER", "ROSES"],
  combo4: ["WHEAT", "BREAD"],
};

const button = document.querySelector(".btn");
const startWord = document.querySelector(".startWord");
const endWord = document.querySelector(".endWord");
const inputBox = document.querySelector(".inputBox");

function getRandomCombo() {
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  let numberOfLetters;

  if (randomNumber === 1) {
    numberOfLetters = wordCombinations.combo1[0].length;

    let inputField = document.createElement("input");
    inputField.innerHTML = "Hello";
    inputBox.appendChild(inputField);
    console.log(inputField.innerText);

    startWord.textContent = `${wordCombinations.combo1[0]} (${numberOfLetters})`;
    endWord.textContent = `${wordCombinations.combo1[1]} (${numberOfLetters})`;

    console.log("starWord: ", wordCombinations.combo1[0]);
    console.log("endWord: ", wordCombinations.combo1[1]);
  } else if (randomNumber === 2) {
    numberOfLetters = wordCombinations.combo2[0].length;

    startWord.textContent = `${wordCombinations.combo2[0]} (${numberOfLetters})`;
    endWord.textContent = `${wordCombinations.combo2[1]} (${numberOfLetters})`;

    console.log("startWord: ", wordCombinations.combo2[0]);
    console.log("endWord: ", wordCombinations.combo2[1]);
  } else if (randomNumber === 3) {
    numberOfLetters = wordCombinations.combo3[0].length;

    startWord.textContent = `${wordCombinations.combo3[0]} (${numberOfLetters})`;
    endWord.textContent = `${wordCombinations.combo3[1]} (${numberOfLetters})`;

    console.log("startWord: ", wordCombinations.combo3[0]);
    console.log("endWord: ", wordCombinations.combo3[1]);
  } else {
    numberOfLetters = wordCombinations.combo4[0].length;

    startWord.textContent = `${wordCombinations.combo4[0]} (${numberOfLetters})`;
    endWord.textContent = `${wordCombinations.combo4[1]} (${numberOfLetters})`;

    console.log("startWord: ", wordCombinations.combo4[0]);
    console.log("endWord: ", wordCombinations.combo4[1]);
  }
}

getRandomCombo();

button.addEventListener("click", function () {
  getRandomCombo();
});
