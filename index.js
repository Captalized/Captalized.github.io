document.getElementById("submit").addEventListener("click", (event) => {
  const id = document.getElementById("index").value;
  const request = new Request(`http://localhost:8000/cap-builds/${id}`);
  fetch(request)
    .then((response) => response.text())
    .then((data) => {
      const target = JSON.parse(data);
      document.getElementById("name").innerHTML = target.BuildName;
      document.getElementById("shipType").innerHTML = target.ShipType;
      document.getElementById("data").innerHTML = target.buildData;
    });
});

function shipType() {
  // Load the correct file for shipType
  let shipT = document.getElementById("shipType").value;
  let jsonObj;
  console.log(bbJSON);
  switch (shipT) {
    case "bb":
      jsonObj = bbJSON;
      break;
    case "ca":
      jsonObj = caJSON;
      break;
    case "cv":
      jsonObj = cvJSON;
      break;
    case "dd":
      jsonObj = ddJSON;
      break;
  }
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      let selectStr = "[data-row='" + row + "'][data-col='" + col + "']";
      document.querySelector(selectStr).innerHTML = jsonObj[row][col].name;
    }
  }
}

window.onload = shipType();

document.getElementById("shipType").addEventListener("change", shipType);
