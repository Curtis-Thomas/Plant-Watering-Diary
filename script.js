"use-strict";

//inputted plant arrays
let plant1 = {
  name: "N/A",

  //water main is unseen total time
  waterMain: 0,

  //watering time , hours total(watering A is the input)
  waterA: 0,

  //c is hours
  waterC: 0,

  //coundown hours
  cdH: 0,
  //countdown mins
  cdM: 0,
  //countdown seconds
  cdS: 0,
};

//countdown logic
const countdown = function (plant) {
  if (plant.cdM == 0 && plant.cdH > 0) {
    plant.cdH -= 1;
    plant.cdM = 60;
  } else if (plant.cdS <= 0 && plant.cdM > 0) {
    plant.cdM -= 1;
    plant.cdS = 60;
  } else if (plant.cdH <= 0 && plant.cdM <= 0 && plant.chS <= 0) {
    document.querySelector("#plant1Reset").textContent = "reset";
  }
};

//update countdown name + numbers
const updateUI = function () {
  //updates name
  document.querySelector("#plant1Named").textContent = plant1.name;

  //Updates plant 1 countdown
  document.querySelector("#water1Hours").textContent = plant1.cdH;
  document.querySelector("#water1Mins").textContent = plant1.cdM;
  document.querySelector("#water1Secs").textContent = plant1.cdS;
};

//Submit plant1 info button
document.querySelector("#btnCroton").addEventListener("click", function () {
  //sets plant 1 name object
  plant1.name = document.querySelector("#plant1Name").value;
  console.log(plant1.name);
  //sets plant 1 water time in hours
  plant1.waterA = document.querySelector("#plant1Water").value;
  console.log(plant1.waterA);

  //sets main countdown timer in hours
  plant1.waterMain = plant1.waterA;

  plant1.cdH = plant1.waterMain;

  //sets hours countdown
  plant1.waterC = plant1.waterMain * 3600;

  updateUI();
  countdown(plant1);
  //If the watering timer is abover 0, countdown

  setInterval(function () {
    if (plant1.waterC >= 0) {
      plant1.cdS--;
      plant1.waterC--;
      countdown(plant1);
      updateUI();
    } else {
      document.querySelector(
        "#plant1Reset"
      ).textContent = `TIME TO WATER YOUR PLANT`;
    }
    console.log(plant1.waterC);
  }, 1);
});
