import helper from "./helper";

function render(): void {
  document.getElementById("root").innerHTML = "test " + helper();
}


render();