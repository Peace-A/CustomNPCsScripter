module.exports.start = `
var scriptGuiList = {}
var scriptGuiEvents = {
  button: {},
  close:  {},
  slot:   {},
  scroll: {}
}
`

module.exports.end = `
function customGuiButton(event) {
  scriptGuiEvents.button[event.buttonId](event)
}

function customGuiSlot(event) {
  scriptGuiEvents.slot[event.slotId](event)
}

function customGuiClosed(event) {
  scriptGuiEvents.close[event.gui.getID()](event)
}
`
