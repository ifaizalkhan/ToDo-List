var bg = document.getElementById("bg");
function addNewCard() {
  let input = document.getElementById("to-do-input");
  let val = input.value;
  input.value = "";
  if (val !== "") {
    addCardToList(val, "to-do");
  }
  else{
    alert("Oops!! Please enter a task to continue..")
  }
}

function addCardToList(title, id) {
  let card = document.createElement("div");
  card.classList.add("list-card");
  card.onclick = (evt) => editCard(evt);
  let icon = document.createElement("i");
  let icon2 = document.createElement("i");
  let inner = document.createElement("span")
  icon.onclick = (evt) => deleteCard(evt);
  icon.className = "fas fa-trash del";
  icon2.className = "fas fa-thumbtack status";
  inner.innerText = title;

  let cardTitleRow = document.createElement("div");
  let temp = document.createElement('div');

  // cardTitleRow.innerHTML = `<span>${title}</span>`;
  cardTitleRow.append(icon2)
  temp.append(inner)
  cardTitleRow.append(temp)
  cardTitleRow.append(icon);

  card.appendChild(cardTitleRow);
  card.style.transform = "scaleX(0)";
  document.getElementById(id).appendChild(card);
  setTimeout(() => {
    card.style.transform = "scaleX(1)";
  }, 1);
}

function deleteCard(evt) {
  evt.stopPropagation();

  let card = evt.target.parentNode.parentNode;
  card.style.transform = "scaleX(0)";
  setTimeout(() => {
    card.remove();
  }, 300);
}


function editCard(event) {
  let card = event.target;
  let desc = card.children[0].children[1].children[1] ? card.children[0].children[1].children[1].innerHTML : "";
  let div = document.createElement("div");
  div.classList.add("edit-card");
  div.innerHTML = `
        <div class="edit-card-form">
        <div class="edit-header">
				<h3 class="list-heading">Edit Card</h3>
        <i class="fas fa-times closed" onClick="justCloseIt()"></i>
        </div>
				<div class="form-group">
					<input spellcheck='false' type="text" id="card-title" value='${card.children[0].children[1].children[0].innerText}'>
				</div>
				<div spellcheck='false' class="form-group"><textarea id="card-description" value='${desc}' cols=40" rows="10" placeholder="Description">${desc}</textarea></div>
			</div>`;

  let button = document.createElement("button");
  button.innerHTML = "Save";
  button.onclick = () => onSaveCard(card);
  div.children[0].appendChild(button);
  bg.appendChild(div);
  bg.style.display = "flex";
}

function onSaveCard(cardInfo) {
  let p;
  let title = document.getElementById("card-title").value.trim();
  let description = document.getElementById("card-description").value.trim();
  cardInfo.children[0].children[1].children[0].innerText = title;
  if (cardInfo.children[0].children[1].children[1]) {
    cardInfo.children[0].children[1].children[1].innerHTML = description;
  } else if (description !== "") {
    p = document.createElement("p");
    p.innerHTML = description;
    p.className = "card-description";
    p.style.transform = "scaleX(0)";
    p.style.transformOrigin = "0%";
    cardInfo.children[0].children[1].appendChild(p);
    setTimeout(() => {
      p.style.transform = "scaleX(1)";
    }, 0);
  }
  bg.innerHTML = "";
  bg.style.display = "none";
}


function justCloseIt(){
  bg.innerHTML = "";
  bg.style.display = "none";
}

