const InstrumentFamilies = require('./instrument_families.js');
const PubSub = require("../helpers/pub-sub.js");

const InstrumentFamiliesModel = function () {
  this.instrumentFamilies = new InstrumentFamilies();
}

InstrumentFamiliesModel.prototype.getInstrumentFamily = function (familyName) {
  // extract family info given the name
  const families = this.instrumentFamilies.instrumentFamilies;
  return families.find((family) => {
    return family.name === familyName;
  });
};

InstrumentFamiliesModel.prototype.bindEvents = function () {
  // by now we have a list of instrument families
  PubSub.publish("InstrumentFamiliesModel:family-names", this.getFamilyNames());

  // we want to listen for changes to the pulldown
  PubSub.subscribe("InstrumentFamiliesSelectView:selected-family", (event) => {
    PubSub.signForDelivery(this, event);
    event.preventDefault();
    let selectedFamily = event.detail;
    let selectedFamilyInfo = this.getInstrumentFamily(selectedFamily);
    // send it out on the wire
    PubSub.publish("InstrumentFamiliesModel:instrument-family-info", selectedFamilyInfo);
  });
};

InstrumentFamiliesModel.prototype.getFamilyNames = function () {
  const instrumentFamilies = this.instrumentFamilies.instrumentFamilies;
  const familyNames = instrumentFamilies.map((family) => {
    return family.name
  });
  return familyNames;
};

module.exports = InstrumentFamiliesModel;
