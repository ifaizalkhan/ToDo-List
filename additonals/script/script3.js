function dragndrop() {
  $("#to-do, #in-progress, #completed")
    .sortable({
      connectWith: ".list",
      placeholder: "ui-sortable-placeholder",
      items: "> div",
      helper: "clone",
    })
    .disableSelection();
}
function toggleIcon1() {
  let cont = document.getElementById("to-do");
  let arr = cont.querySelectorAll(".status");
  arr.forEach((e) => {
    e.classList.remove("fa-hourglass-start");
    e.classList.remove("fa-check");
    e.classList.add("fa-thumbtack");
  });
}
function toggleIcon2() {
  let cont = document.getElementById("in-progress");
  let arr = cont.querySelectorAll(".status");
  arr.forEach((e) => {
    e.classList.remove("fa-thumbtack");
    e.classList.remove("fa-check");
    e.classList.add("fa-hourglass-start");
  });
}
function toggleIcon3() {
  let cont = document.getElementById("completed");
  let arr = cont.querySelectorAll(".status");
  arr.forEach((e) => {
    e.classList.remove("fa-thumbtack");
    e.classList.remove("fa-hourglass-start");
    e.classList.add("fa-check");
  });
}

window.onload = function () {
  this.bg.style.display = "none";
  $("input").on("keydown", function search(e) {
    if (e.keyCode == 13) {
      addNewCard();
    }
  });
  setTimeout(() => {
    toggleIcon1();
    toggleIcon2();
    toggleIcon3();
  }, 10);
  dragndrop();
  addCardToList("Add new task to list", "to-do");
  addCardToList("Learn Backend", "in-progress");
  addCardToList("Practice DSA", "in-progress");
  addCardToList("Learn React", "completed");
  addCardToList("Make mini-project", "completed");
  addCardToList("Get Started", "completed");
};
