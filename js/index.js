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

// 2. Remove numbers from input field -
// 3. Save correct words on a list -
// 4. Check winner -
// 5. Check spelling with API -
// 6. BONUS create High Score list -

function checkIfLetter(event) {
  const key = event.keyCode;

  if ((key >= 65 && key <= 90) || key == 8) {
    console.log("SKRIV UT ORDET: ");
  } else {
    event.target.value = wordCombinations.combo1[0][event.target.id];
    console.log("Inmatning: ", event.target.id);
    alert("Wrong letter - Try again!");
  }
  console.log("input id: ", event.target.id);
  console.log(event);
  console.log(event.keyCode);
}

function creatInputFields(numberOfLetters, word) {
  console.log("första ordet i kombon: ", word[0]);

  for (let i = 0; i < numberOfLetters; i++) {
    // console.log(i);
    let inputField = document.createElement("input");
    inputField.placeholder = word[i];
    inputField.setAttribute("maxlength", "1");
    inputField.setAttribute("id", `${i}`);
    inputField.addEventListener("keyup", (event) => checkIfLetter(event));
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
