function abhaken(e) {
    var elem = e.target.parentElement;
    aufgabeAbhaken(elem);
    e.preventDefault(); //allfälliges Navigieren (Standardverhalten) unterbinden
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

    //Folgene for-Schleife funktioniert wegen LIVE-UPDATE nicht!
    //  --> das erste Element wird geändert, dadurch verschwindet es aus der nodeList (Variable "offene"),
    //      das zweite Element ist somit neu das erste, die Schleife geht aber weiter zum neuen zweiten Element,
    //      das ursprüngliche zweite Element wird so übersprungen, etc.
    /*
    for (var i = 0; i < offene.length; i++) {
        offene[i].className = "erledigt";
    }
    */
    //darum am Ende anfangen...
    for (var i = offene.length - 1; i > -1; i--) {
        offene[i].className = "erledigt";
    }

    //...oder mit while:
    /*
    while (offene.length > 0) {
        offene[0].classList = "erledigt";
    } */
}