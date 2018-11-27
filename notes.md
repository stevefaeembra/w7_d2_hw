Notes
=====

**[Model] InstrumentFamiliesModel**

make this a simple wrapper around the InstrumentsFamilies class.

When initialised, should publish the list of Instrument Family names to channel "InstrumentFamiliesModel:family-names"
- DONE

Listen on channel "InstrumentFamiliesSelectView:selected-family"

This should trigger a call to **getInstrumentFamily(name)** method which publishes to channel "InstrumentFamiliesModel:instrument-family-info" with a payload of the instrument family, selected by name.


**[View] InstrumentFamiliesSelectView**

Should subscribe to ""InstrumentFamiliesModel:family-names"
When received it should add the options to the HTML family under id="instrument-families"

This
This should listen for 'change' event on the id=instrument-families select.

It should publish the value of the selected item on channel "InstrumentFamiliesSelectView:selected-family"

**[View]InstrumentFamiliesInfoView**

This should listen to "InstrumentFamiliesModel:instrument-family-info"

On receiving this it should parse the object into separate fields and inject these into a (new) div on the web page.
