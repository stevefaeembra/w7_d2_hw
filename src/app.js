const InstrumentFamiliesModel = require("./models/instrument-families-model.js");
const InstrumentFamiliesSelectView = require("./views/instrument-families-select-view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  let instrumentFamiliesSelectView = new InstrumentFamiliesSelectView(document.querySelector("#instrument-families"));
  instrumentFamiliesSelectView.bindEvents();

  let instrumentFamiliesModel = new InstrumentFamiliesModel();
  instrumentFamiliesModel.bindEvents();

});
