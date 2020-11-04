const request = new Request("http://localhost:8000/cap-builds");

document.getElementById("submit").addEventListener("click", (event) => {
    const id = document.getElementById("index").value;
    fetch(request)
  .then((response) => response.text())
  .then((data) => {
    result = JSON.parse(data);
    let target;
    for (let i = 0; i < result.length; i++) {
        if(id == result[i].id) {
            target = result[i];
            break;
        }
    }

    document.getElementById("Name").innerHTML = target.BuildName;
    document.getElementById("Shiptype").innerHTML = target.ShipType;
    document.getElementById("buildData").innerHTML = target.buildData;
  });
});



