const InstrumentFamiliesModel = require("./models/instrument-families-model.js");
const InstrumentFamiliesSelectView = require("./views/instrument-families-select-view.js");
const InstrumentFamiliesInfoView = require("./views/instrument-families-info-view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  let instrumentFamiliesSelectView = new InstrumentFamiliesSelectView(document.querySelector("#instrument-families"));
  instrumentFamiliesSelectView.bindEvents();

  let instrumentFamiliesModel = new InstrumentFamiliesModel();
  instrumentFamiliesModel.bindEvents();

  let instrumentFamiliesInfoView = new InstrumentFamiliesInfoView(document.querySelector("#instrument-family-info"));
  instrumentFamiliesInfoView.bindEvents();

});
