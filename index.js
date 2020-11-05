let uid;
let shipType;

function SThandle() {
  // Load the correct file for shipType
  let jsonObj;
  switch (shipType) {
    case "bb":
      jsonObj = bbJSON;
      document.getElementById("shipType").innerHTML = "战列舰";
      break;
    case "ca":
      jsonObj = caJSON;
      document.getElementById("shipType").innerHTML = "巡洋舰";
      break;
    case "cv":
      jsonObj = cvJSON;
      document.getElementById("shipType").innerHTML = "航母";
      break;
    case "dd":
      jsonObj = ddJSON;
      document.getElementById("shipType").innerHTML = "驱逐舰";
      break;
  }
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      let selectStr = "[data-row='" + row + "'][data-col='" + col + "']";
      document.querySelector(selectStr).innerHTML = jsonObj[row][col].name;
    }
  }
}

function fetchHandle(data) {
  const target = JSON.parse(data);
  const skills = JSON.parse(target.buildData);
  shipType = target.ShipType;
  document.getElementById("shipType").value = shipType;
  document.getElementById("name").innerHTML = target.BuildName;
  document.getElementById("data").innerHTML = target.buildData;
  SThandle();
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      let selectStr = `[data-row='${row}'][data-col='${col}']`;
      let element = document.querySelector(selectStr);
      if (skills[row][col]) {
        element.style.backgroundColor = "#FFFFFF";
        element.style.color = "#000000";
      } else {
        element.style.backgroundColor = "#1e90ff";
        element.style.color = "#FFFFFF";
      }
    }
  }
}

function retrieve() {
  // url: http://127.0.0.1:5500/?uid=21
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has("uid")) {
    window.stop;
  }
  uid = urlParams.get("uid");
  const request = new Request(`http://localhost:8000/cap-builds/${uid}`);
  fetch(request)
    .then((response) => response.text())
    .then((data) => fetchHandle(data));
}

window.onload = retrieve();
