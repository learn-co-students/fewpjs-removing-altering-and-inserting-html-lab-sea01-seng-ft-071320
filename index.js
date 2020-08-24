removeMain();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Alec is the champion";

function removeMain() {
  main = document.querySelector("main#main");
  main.remove();
}
