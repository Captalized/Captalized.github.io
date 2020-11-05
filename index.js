// const request = new Request("http://localhost:8000/cap-builds");

// document.getElementById("submit").addEventListener("click", (event) => {
//     const id = document.getElementById("index").value;
//     fetch(request)
//   .then((response) => response.text())
//   .then((data) => {
//     result = JSON.parse(data);
//     let target;
//     for (let i = 0; i < result.length; i++) {
//         if(id == result[i].id) {
//             target = result[i];
//             break;
//         }
//     }

//     document.getElementById("Name").innerHTML = target.BuildName;
//     document.getElementById("Shiptype").innerHTML = target.ShipType;
//     document.getElementById("buildData").innerHTML = target.buildData;
//   });
// });



function shipType() {
  // Load the correct file for shipType
  let shipT = document.getElementById("shipType").value;
  let jsonObj;
  switch (shipT) {
    case "bb":
      jsonObj = JSON.parse(bbJSON);
      break;
    case "ca":
      jsonObj = JSON.parse(caJSON);
      break;
    case "cv":
      jsonObj = JSON.parse(cvJSON);
      break;
    case "dd":
      jsonObj = JSON.parse(ddJSON);
      break;
  }
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      let selectStr = "[data-row='" + row + "'][data-col='" + col + "']";
      document.querySelector(selectStr).innerHTML = json[row][col].name;
    }
  }
}

window.onload = shipType();

document.getElementById("shipType").addEventListener("change", shipType);

