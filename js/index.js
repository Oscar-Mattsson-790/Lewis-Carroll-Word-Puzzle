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

function creatInputFields(numberOfLetters, word) {
  console.log("första ordet i kombon: ", word[0]);

  for (let i = 0; i < word.length; i++) {
    console.log(i);
    let inputField = document.createElement("input");
    inputField.placeholder = word[i];
    inputBox.appendChild(inputField);
  }
}

function removeInput() {
  let inputsFields = document.querySelectorAll("input");
  console.log("Hur lång är inputfield: ", inputsFields.length);

  for (const input of inputsFields) {
    console.log(input);
    inputBox.removeChild(inputBox.firstChild);
  }
}

function getRandomCombo() {
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  let numberOfLetters;

  if (randomNumber === 1) {
    numberOfLetters = wordCombinations.combo1[0].length;
    creatInputFields(numberOfLetters, wordCombinations.combo1[0]);

    startWord.textContent = `${wordCombinations.combo1[0]}`;
    endWord.textContent = `${wordCombinations.combo1[1]}`;
  } else if (randomNumber === 2) {
    numberOfLetters = wordCombinations.combo2[0].length;
    creatInputFields(numberOfLetters, wordCombinations.combo2[0]);

    startWord.textContent = `${wordCombinations.combo2[0]}`;
    endWord.textContent = `${wordCombinations.combo2[1]}`;
  } else if (randomNumber === 3) {
    numberOfLetters = wordCombinations.combo3[0].length;
    creatInputFields(numberOfLetters, wordCombinations.combo3[0]);

    startWord.textContent = `${wordCombinations.combo3[0]}`;
    endWord.textContent = `${wordCombinations.combo3[1]}`;
  } else {
    numberOfLetters = wordCombinations.combo4[0].length;
    creatInputFields(numberOfLetters, wordCombinations.combo4[0]);

    startWord.textContent = `${wordCombinations.combo4[0]}`;
    endWord.textContent = `${wordCombinations.combo4[1]}`;
  }
}

getRandomCombo();

button.addEventListener("click", function () {
  removeInput();
  getRandomCombo();
});
