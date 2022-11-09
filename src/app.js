let suitImages = ["&hearts;", "&clubs;", "&diams;", "&spades;"];
let cardLetters = [
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
  "K",
  "A"
];

let ramdomNumber = number => {
  return Math.floor(Math.random() * number);
};

let ramdomCard = cardLetters[ramdomNumber(cardLetters.length)];
let ramdomSuit = suitImages[ramdomNumber(suitImages.length)];

window.onload = () => {
  let body = document.body;
  console.log(body);
  body.style.backgroundColor = "green";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  let card = document.querySelector("#app");
  console.log(card);
  card.style.width = "20rem";
  card.style.height = "30rem";
  card.style.borderRadius = "20px";
  card.style.backgroundColor = "white";
  card.style.position = "relative";
  card.style.display = "flex";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";

  let containerSuit1 = document.createElement("div");
  containerSuit1.style.position = "absolute";
  containerSuit1.style.margin = "15px";
  containerSuit1.style.top = "1px";
  containerSuit1.style.left = "1px";
  containerSuit1.style.height = "50px";
  containerSuit1.style.width = "50px";

  let containerSuit2 = document.createElement("div");
  containerSuit2.style.position = "absolute";
  containerSuit2.style.margin = "10px";
  containerSuit2.style.top = "400px";
  containerSuit2.style.right = "5px";
  containerSuit2.style.height = "50px";
  containerSuit2.style.width = "50px";
  containerSuit1.style.backgroundImage = "cover";

  let containerNumber = document.createElement("p");
  containerNumber.textContent = ramdomCard;
  containerNumber.style.fontSize = "10rem";

  let suitColor = "";
  if (ramdomSuit === "&hearts;" || ramdomSuit === "&diams;") {
    suitColor = "red";
  } else {
    suitColor = "black";
  }

  let suitImg1 = document.createElement("p");
  suitImg1.innerHTML = ramdomSuit;
  suitImg1.style.fontSize = "4rem";
  suitImg1.style.margin = "0px";
  suitImg1.style.color = suitColor;

  let suitImg2 = document.createElement("p");
  suitImg2.innerHTML = ramdomSuit;
  suitImg2.style.fontSize = "4rem";
  suitImg2.style.margin = "0px";
  suitImg2.style.transform = "scaleY(-1)";
  suitImg2.style.color = suitColor;

  card.appendChild(containerSuit1);
  containerSuit1.appendChild(suitImg1);
  card.appendChild(containerNumber);
  card.appendChild(containerSuit2);
  containerSuit2.appendChild(suitImg2);
};
