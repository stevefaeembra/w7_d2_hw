const InstrumentFamiliesModel = require("./models/instrument-families-model.js")

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const instrumentFamiliesModel = new InstrumentFamiliesModel();
  instrumentFamiliesModel.bindEvents();
});
