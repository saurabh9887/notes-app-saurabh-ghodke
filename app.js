const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function shownotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

shownotes();

createBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.setAttribute("contenteditable", "true");
  inputbox.className = "input-box";
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    let parentElement = e.target.parentElement;
    notesContainer.removeChild(parentElement);
    // e.target.parentElement.remove();
  } else if (e.target.tagName === "P") {
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
  updateStorage();
});
