var dropdown = document.querySelector("#dropdown");
var burger = document.querySelector("#burger");
var box = document.querySelector("#box");
var body = document.querySelector("body")

burger.addEventListener("click", function (e) {
  this.classList.toggle("crossed")
  dropdown.classList.toggle("opened");
  box.classList.toggle("opened")
  body.classList.toggle("no-scroll")
})

box.addEventListener("click", function () {
    this.classList.remove("opened")
    burger.classList.remove("crossed");
    dropdown.classList.remove("opened");
    body.classList.remove("no-scroll")
})