const $ = require("jquery")
const doPageModule = require("./doPage.js")
const settings = require("./settings.js")

// load styles
require("bootstrap/dist/css/bootstrap.min.css")
require("jquery-ui-bundle/jquery-ui.min.css")
require("./style.css")

require("jquery-ui-bundle")

JSON.copy = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

$(window).on("load", () => {
  require("./initers/initGUI.js")()
  require("./initers/initGuiMaker.js")()
  require("./initers/initContextMenu.js")()
  require("./initers/initTranslationEngine.js")()
  require("./initers/initTrashBar.jsx")()
})

// $("#tab-creator").on("click", () => {
//   if ($("#main-page-viewer").children().length < 5)
//     doPageModule.addPage()
// })

// $("#settings-btn").on("click", () => {
//   settings.SettingsModalForm().show()
// })

// window.onresize = () => {
//   $("#main-page-viewer").css("height", window.innerHeight + "px")
// }

// window.onload = () => {
//   window.onresize()
//   $("#hint-dialog").hide()
//   doPageModule.addPage()
//   settings.initSettings()
// }
