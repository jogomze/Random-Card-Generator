import "./style.css";
let hearts = "&hearts;";
let diamonds = "&diams;";
let clubs = "&clubs;";
let spades = "&spades;";
let icon = [hearts, diamonds, clubs, spades];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let randomicon = Math.floor(Math.random() * icon.length);
let iconOne = document.getElementById("icon-top");
let iconTwo = document.getElementById("icon-bottom");

if (randomicon == 0 || randomicon == 1) {
  iconOne.className = "red";
  iconTwo.className = "red";
} else if (randomicon == 3 || randomicon == 2) {
  iconOne.className = "black";
  iconTwo.className = "black";
}

iconOne.innerHTML = icon[randomicon];
iconTwo.innerHTML = icon[randomicon];

let number = document.getElementById("number");

number.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
