//const InstrumentFamilies = require('./instrument_families.js');
const PubSub = require("../helpers/pub-sub.js");

const InstrumentFamiliesSelectView = function (element) {
  this.element = element; // widget we're bindig to
};


InstrumentFamiliesSelectView.prototype.updateOptions = function (listOfInstrumentTypes) {
  // use it to populate the DOM (pulldown)

  const instrumentTypesSelect = document.querySelector("#instrument-families");
  const optionList = listOfInstrumentTypes.map((instrumentTypeName) => {
    const option = document.createElement("option");
    option.setAttribute("value", instrumentTypeName);
    option.setAttribute("id", instrumentTypeName);
    option.textContent = instrumentTypeName;
    return option;
  });
  optionList.forEach((option) => {
    instrumentTypesSelect.appendChild(option);
  })
};

InstrumentFamiliesSelectView.prototype.bindEvents = function () {
  // listen for a list of instrument families
  PubSub.subscribe("InstrumentFamiliesModel:family-names", (event) => {
    event.preventDefault();
    PubSub.signForDelivery(this, event);
    const listOfInstrumentTypes = event.detail;
    this.updateOptions(listOfInstrumentTypes);
  });
  // listen for a change in the pulldown, fire off on
  // a channel with the selected name
  this.element.addEventListener('change',(event) => {
    const selectedFamily = event.target.value;
    PubSub.publish("InstrumentFamiliesSelectView:selected-family", selectedFamily);
  })
};

module.exports = InstrumentFamiliesSelectView;
