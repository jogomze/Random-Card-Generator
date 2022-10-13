
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add("heart")
  setTimeout(() => {
    document.querySelector(".card").classList.remove("heart");
    document.querySelector(".card").classList.add("spade");
  }, 1000);
};
