"use strict"

require( "bootstrap/dist/css/bootstrap.min.css" )
require( "./style.css" )

require( "webpack-jquery-ui" )
require( "webpack-jquery-ui/css" )

const interact = require("interactjs")
const ClipboardJS = require("clipboard")

const { createContextMenuByIdList } = require("./ContextMenu.js")

const initGUI = require("./initers/initGUI.js")
const initTrashBar = require("./initers/initTrashBar.jsx")
const initCopyButton = require("./initers/initCopyButton.js")
const initContextMenu = require("./initers/initContextMenu.js")
const initTranslationEngine = require("./initers/initTranslationEngine.js")
const loadMainScreen = require("./loadMainScreen.js")

JSON.copy = obj => JSON.parse(JSON.stringify(obj))

initGUI()
initTrashBar()
initCopyButton()
initContextMenu()
initTranslationEngine()

loadMainScreen()
