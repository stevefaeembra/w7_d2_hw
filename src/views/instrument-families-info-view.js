const PubSub = require("../helpers/pub-sub.js");

const InstrumentFamiliesInfoView = function (element) {
  this.element = element;
};

InstrumentFamiliesInfoView.prototype.bindEvents = function () {
  // listen for selected family info being sent in
  PubSub.subscribe("InstrumentFamiliesModel:instrument-family-info", (event) => {
    PubSub.signForDelivery(this, event);
    event.preventDefault();
    const selectedFamilyInfo = event.detail;

    // extract fields

    const name = selectedFamilyInfo.name;
    const description = selectedFamilyInfo.description;

    // get injection point
    const infoDiv = document.querySelector("#instrument-family-info");

    const nameDiv = document.createElement("div");
    nameDiv.className = "name"
    nameDiv.textContent = name

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description"
    descriptionDiv.textContent = description;

    // pop these into the injection point
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(descriptionDiv);

  })


};

module.exports = InstrumentFamiliesInfoView;
