//plants

const plant = {
  croton: {
    commonName: "Croton",
    region: "Asian",
    sunExposure: "Full, Partial",
    soilType: "Moist, Well-Drained",
    wateringFrequency: 168,
    warteringAmmount: "Couple of Inches",
  },
};

//sets croton plant stats
const plantStats = function (plantName, plantName2, infoNum) {
  document.querySelector(
    "#" + String(plantName) + String(infoNum)
  ).textContent = plantName2;
};

//populate plant stats
const plantStatsUpdate = function () {
  //croton
  plantStats("croton", plant.croton.commonName, "1");
  plantStats("croton", plant.croton.region, "2");
  plantStats("croton", plant.croton.sunExposure, "3");
  plantStats("croton", plant.croton.soilType, "4");
  plantStats("croton", plant.croton.warteringAmmount, "5");
  plantStats("croton", plant.croton.wateringFrequency, "6");
};
plantStatsUpdate();

let plant1 = {
  water: 0,
};
//select plant button
document.querySelector("#btnCroton").addEventListener("click", function () {
  plant1.water = plant.croton.wateringFrequency * 3600;
  document.querySelector("#water1").textContent = plant1.water;
  document.querySelector("#plant1").textContent = plant.croton.commonName;
  document.querySelector("#btnCroton").style.display = "none";
  setInterval(function () {
    plant1.water--;
    console.log(plant1.water);
    document.querySelector("#water1").textContent = plant1.water;
  }, 1000);
});
