"use strict"

require( "bootstrap/dist/css/bootstrap.min.css" )
require( "./style.css" )

require( "webpack-jquery-ui" )
require( "webpack-jquery-ui/css" )

const interact = require("interactjs")
const ClipboardJS = require("clipboard")

const initGUI = require("./initers/initGUI.js")
const initTrashBar = require("./initers/initTrashBar.jsx")
const initContextMenu = require("./initers/initContextMenu.js")
const initTranslationEngine = require("./initers/initTranslationEngine.js")
const initGuiMaker = require("./initers/initGuiMaker.js")

JSON.copy = obj => JSON.parse(JSON.stringify(obj))

initGUI()
initTrashBar()
initContextMenu()
initTranslationEngine()
initGuiMaker()

