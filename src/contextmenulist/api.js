 
const { ElementType, ReturnsType } = require("../ContextMenuConstants") 
const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
  api: {
    title: "api",
    children: [
      //      {
      //  title: "мир",
      //  children: []
      //},
      {
        title: "Создать интерфейс",
        element: {
          type: ElementType.LIST,
          header: "Создать интерфейс с ID {number}  {:modal:( id:guiMaker; )}",
          needFunction: ["GUIController"],
          code: `var guiId = {};\n void function (guiId) {scriptGuiList[guiId] = Java.type("noppes.npcs.api.NpcAPI").Instance().createCustomGui(guiId, 256, 256, false); \n :[:]}(guiId)`
        }
      },
      {
        title: "Интерфейс:В начале",
        element: {
          type: ElementType.UL,
          header: "Перед открытием интерфейса с ID {number} :",
          code: `void function(event) { :[gui-api:] } ({gui:scriptGuiList[{}]})`
        }
      },
      {
        title: "Интерфейс:При закритии",
        element: {
          type: ElementType.UL,
          header: "После закрытия интерфейса с ID {number} :",
          needFunction: ["GUIController"],
          code: `scriptGuiEvents.close[{}] = function (event) { :[gui-api player api:] }`
        }
      }
    ]
  }
}

//assertChildrens(result.api.children[0], require("./world"), 'Java.type("noppes.npcs.api.NpcAPI").Instance().getIWorld(0).')

module.exports = result


