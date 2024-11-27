function abhaken(e) {
    var elem = e.target.parentElement;
    aufgabeAbhaken(elem);
    e.preventDefault();
}

function aufgabeAbhaken(aufgabe) {
    aufgabe.classList.remove("offen");
    aufgabe.classList.add("erledigt");
}

function hinzufuegen(e) {
    var li = document.createElement("li");
    li.setAttribute("class", "offen");
    li.textContent = document.getElementById("neu").value + " ";

    var a = document.createElement("a");
    a.textContent = "erledigt";
    a.setAttribute("href", "#");
    a.addEventListener("click", abhaken);

    document.getElementById("aufgaben").appendChild(li);
    li.appendChild(a);

    document.getElementById("neu").value = "";
}

function allesAbhaken() {
    var offene = document.getElementById("aufgaben").getElementsByClassName("offen");

    while (offene.length > 0) {
        offene[0].classList = "erledigt";
    }
}