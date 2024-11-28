var data = {
    notes: []
};

function initialize() {
    document.getElementById("add-new").addEventListener("click", addNote);
    document.getElementById("new-value").addEventListener("keydown", function(e) {
        if(e.code == "Enter" || e.code =="NumpadEnter"){
            addNote();
        }
    });

    data = getNotes();
    renderNotes();
}

function getNotes() {
    var notes = localStorage.getItem("notes");
    if (notes) {
        data = JSON.parse(notes);
    }
    return data;
}

function renderNotes() {
    if (!data) {
        return;
    }

    var container = document.getElementById("notizen");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for(var i = 0; i < data.notes.length; i++) {
        //note
        var noteDiv = document.createElement("div");
        noteDiv.className = "notizen";
        container.appendChild(noteDiv);

        //note title  
        var noteTitleDiv = document.createElement("div");
        noteDiv.appendChild(noteTitleDiv);
        noteTitleDiv.className = "card-title";
        var h = document.createElement("h2");
        noteTitleDiv.appendChild(h);
        h.innerText = data.notes[i].datetime;

        //note trash
        var trashP = document.createElement("p");
        noteTitleDiv.appendChild(trashP);
        var a = document.createElement("a");
        trashP.appendChild(a);
        a.href = "#";
        a.addEventListener("click", deleteNote);
        var img = document.createElement("img");
        a.appendChild(img);
        img.src = "https://media.istockphoto.com/id/1131230925/de/vektor/kontrollzeichen-rotes-kreuzsymbol-einfach-vektor.jpg?s=612x612&w=0&k=20&c=UXmgkeGFn5y4IRknTPhaD4LFnoX_IlpgLuLAri69kr4=";
        img.setAttribute("data-index", i)

        //note text
        var p = document.createElement("p");
        noteDiv.appendChild(p);
        p.className = "card-text";
        p.innerText = data.notes[i].text;
    }
}

function addNote() {
    var input = document.getElementById("new-value");
    if (input.value.length == 0) {
        return;
    } else {
        var note = {
            datetime: (new Date()).toLocaleString(),
            text: input.value
        };
        data.notes.push(note);
        localStorage.setItem("notes", JSON.stringify(data));
    }

    input.value = "";
    input.focus();
    renderNotes();
}

function deleteNote(e) {
    var i = parseInt(e.target.dataset.index);
    data.notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(data));
    renderNotes();
}
