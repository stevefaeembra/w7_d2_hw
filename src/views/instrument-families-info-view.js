const PubSub = require("../helpers/pub-sub.js");

const InstrumentFamiliesInfoView = function (element) {
  this.element = element;
};

InstrumentFamiliesInfoView.prototype.showInfo = function (familyInfo) {
  // extract fields

  const name = familyInfo.name;
  const description = familyInfo.description;

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

  // now for extensions, create a ul with one li item
  // per instrument
  const instrumentsList = document.createElement("ul");
  instrumentsList.className = `instruments-list`;
  instrumentsList.textContent = "List of instruments:-"
  const listOfInstruments = familyInfo.instruments;
  listOfInstruments.forEach((instrumentName) => {
    const instrumentItem = document.createElement("li");
    instrumentItem.className = `instruments-list--${instrumentName}`;
    instrumentItem.textContent = instrumentName;
    instrumentsList.appendChild(instrumentItem);
  })
  infoDiv.appendChild(instrumentsList);

};

InstrumentFamiliesInfoView.prototype.bindEvents = function () {
  // listen for selected family info being sent in
  PubSub.subscribe("InstrumentFamiliesModel:instrument-family-info", (event) => {
    PubSub.signForDelivery(this, event);
    event.preventDefault();
    const selectedFamilyInfo = event.detail;
    this.showInfo(selectedFamilyInfo);
  })


};

module.exports = InstrumentFamiliesInfoView;
