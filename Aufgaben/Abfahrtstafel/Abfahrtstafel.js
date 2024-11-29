function ButtonPressed() {
    document.getElementById("station").addEventListener("")
}


function ButtonPressed() {
    let input = document.getElementById("station").value;
    let url = "http://transport.opendata.ch/v1/stationboard?station=" + input + "&limit=20";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("table");
            table.innerHTML = "";
            for (let i = 0; i < data.stationboard.length; i++) {
                let row = table.insertRow(i);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                cell1.innerHTML = data.stationboard[i].stop.departure;
                cell2.innerHTML = data.stationboard[i].to;
                cell3.innerHTML = data.stationboard[i].category + " " + data.stationboard[i].number;
            }
        }
        )


}