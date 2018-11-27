const InstrumentFamilies = require('./instrument_families.js');
const PubSub = require("../helpers/pub-sub.js");

const InstrumentFamiliesModel = function () {
  this.instrumentFamilies = new InstrumentFamilies();
}

InstrumentFamiliesModel.prototype.bindEvents = function () {
  // by now we have a list of instrument families
  PubSub.publish("InstrumentFamiliesModel:family-names", this.getFamilyNames());
};

InstrumentFamiliesModel.prototype.getFamilyNames = function () {
  const instrumentFamilies = this.instrumentFamilies.instrumentFamilies;
  const familyNames = instrumentFamilies.map((family) => {
    return family.name
  });
  console.log(familyNames);
  return familyNames;
};

module.exports = InstrumentFamiliesModel;
