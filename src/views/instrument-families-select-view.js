//const InstrumentFamilies = require('./instrument_families.js');
const PubSub = require("../helpers/pub-sub.js");

const InstrumentFamiliesSelectView = function () {

};

InstrumentFamiliesSelectView.prototype.bindEvents = function () {
  // listen for a list of instrument families
  PubSub.subscribe("InstrumentFamiliesModel:family-names", (event) => {
    event.preventDefault();
    PubSub.signForDelivery(this, event);
    // use it to populate the DOM (pulldown)
    const listOfInstrumentTypes = event.detail;
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
  });
};

module.exports = InstrumentFamiliesSelectView;
