const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
  npc: {
    title: "нпс",
    children: [
      {
        title: "мир",
        children: []
      },
      {
        title: "переменная",
        children: []
      },
      {
        title: "место x",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "кордината спавна по x",
          code: "event.npc.getHomeX()"
        }
      },
      {
        title: "место y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "кордината спавна по y",
          code: "event.npc.getHomeY()"
        }
      },
      {
        title: "место z",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "кордината спавна по z",
          code: "event.npc.getHomeZ()"
        }
      },
      {
        title: "Команда",
        element: {
          type: ElementType.SIMPLE,
          header: "Выполнить команду {string}",
          code: "event.npc.executeCommand({})"
        }
      },
      {
        title: "Сказать",
        element: {
          type: ElementType.SIMPLE,
          header: "Сказать {string}",
          code: "event.npc.say({})"
        }
      },
      {
        title: "Устанавить фракцию",
        element: {
          type: ElementType.SIMPLE,
          header: "Устанавить фракцию с ID {number}",
          code: "event.npc.setFaction({})"
        }
      },
      {
        title: "Устанавить место",
        element: {
          type: ElementType.SIMPLE,
          header: "Устанавить место спавна x {number} y {number} z {number}",
          code: "event.npc.setHome({},{},{})"
        }
      },
      {
        title: "Изменить характеристики",
        element: {
          type: ElementType.LIST,
          header: "Установить новые характеристики {:modal:( id:npcDisplay; )}",
          code: ":[:]"
        }
      }
    ]
  }
} 

assertChildrens(result.npc.children[0], require("./world"), "event.npc.world.")
assertChildrens(result.npc.children[1], require("./data"), "event.npc.")
assertChildrens(result.npc, require("./timer"), "event.npc.getTimers()")
assertChildrens(result.npc, require("./entityliving"), "event.npc.")

module.exports = result
