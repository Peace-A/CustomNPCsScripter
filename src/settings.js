const ModalForm = require("./ModalForm")

const settingsEvents = {
  "dark_theme": value => {
    if (value)
      $("head").append($(`<style id="dark-theme-styles">
        #hint-dialog,.minecraft-btn,minecraft-dropdown,.list-group-item,.container-fluid,.modal-content,.ui-menu,.form-control,.context-menu-caller { background-color: rgb(24, 26, 27); color: #D1CDC7; }
        .border { border:1px solid #0A0A0B !important }
        span {color:white}
        .doElement > header, .doElement-list-li > header  { background-color:#343a40!important }
        .doElement > ul {border-color:#343a40} 
      </style>`))
    else
      $("#dark-theme-styles").remove()
    setProperty("dark_theme",value)
  }
}

module.exports.SettingsModalForm = () => {
  return ModalForm({
    title: "Настройки",
    body: [[
      "Основные",
      { 
        type: "CheckBox",
        title: "Тёмная тема",
        checked:toBoolean(getProperty("dark_theme")),
        onclick(e){settingsEvents["dark_theme"]($(e.target).prop("checked"))} 
      }
    ]]
  })
}

module.exports.initSettings = () => {
  for (let eventName in settingsEvents)
    settingsEvents[eventName](toBoolean(getProperty(eventName)))
}

const SETTINGS_STORAGE_PREFIX = "settings_"

function setProperty(id, value) {
  localStorage.setItem(`${SETTINGS_STORAGE_PREFIX}${id}`, value)
}

function getProperty(id) {
  return localStorage.getItem(`${SETTINGS_STORAGE_PREFIX}${id}`)
}

function toBoolean(value) { return value === "true" }
