
const ModalForm = require("./ModalForm")
const ListGuiTools = require("./ListGuiTools")

module.exports.createGetter = ListGuiTools.createGetter
module.exports.formatComponent = ListGuiTools.formatComponent
module.exports.createSaveButtonEvent = ListGuiTools.createSaveButtonEvent
module.exports.getNewList = ListGuiTools.getNewList
module.exports.BooleanLiList = (yes="Да", no="Нет") => {return { [yes]: "true", [no]: "false" } } 
module.exports.defaultElements = {
  ExitButton() {
    return {
      type: "closeButton",
      x: 796,
      y: 0,
      width: 33,
      height: 36,
      invisible: true
    }
  },
  SaveButton(setListElements) {
    return {
      type: "closeButton",
      x: 703,
      y: 0,
      width: 93,
      height: 36,
      invisible: true,
      onclose: module.exports.createSaveButtonEvent(setListElements)
    }
  },
  DisplayLink(list, setListElements) {
    return {
      type: "linkButton",
      x: 8,
      y: 0,
      width: 88,
      height: 36,
      invisible: true,
      modalForm: {
        id: "npcDisplay",
        args: {list:module.exports.getNewList(list), setListElements}
      }
    }
  },
  AiLink(list, setListElements) {
    return {
      type: "linkButton",
      x: 232,
      y: 0,
      width: 40,
      height: 36,
      invisible: true,
      modalForm: {
        id: "npcAi",
        args: {list:module.exports.getNewList(list), setListElements}
      }
    }
  },
  StatsLink(list, setListElements) {
    return {
      type: "linkButton",
      x: 96,
      y: 0,
      width: 136,
      height: 36,
      invisible: true,
      modalForm: {
        id: "npcStats",
        args: {list:module.exports.getNewList(list), setListElements}
      }
    }
  }
}
