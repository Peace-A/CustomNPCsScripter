const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  door: {
    title: "дверь",
    children: [
      {
        title: "Модель",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать модель блоку {string}",
          code: "event.block.setBlockModel({})"
        }
      },
      {
        title: "Прочность",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать прочность блоку {number}",
          code: "event.block.setHardness({})"
        }
      },
      {
        title: "Состояние",
        children: [
          {
            title: "Открыть",
            element: {
              type: ElementType.SIMPLE,
              header: "Открыть дверь",
              code: "event.block.setOpen(true)"
            }
          },
          {
            title: "Закрыть",
            element: {
              type: ElementType.SIMPLE,
              header: "Закрыть дверь",
              code: "event.block.setOpen(false)"
            }
          }
        ]
      },
      {
        title: "Взрывоустойчевость",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать взрывоустойчевость блоку {number} (-1 - невозможно взорвать)",
          code: "event.block.setResistance({})"
        }
      },
      {
        title: "модель",
        element: {
          type: ElementType.SIMPLE,
          header: "модель",
          code: "event.block.getBlockModel()"
        }
      },
      {
        title: "прочность",
        element: {
          type: ElementType.SIMPLE,
          header: "прочность",
          code: "event.block.getHardness()"
        }
      },
      {
        title: "дверь открыта",
        element: {
          type: ElementType.SIMPLE,
          header: "дверь открыта",
          code: "event.block.getOpen()"
        }
      },
      {
        title: "взрывоустойчевость",
        element: {
          type: ElementType.SIMPLE,
          header: "взрывоустойчевость",
          code: "event.block.getResistance()"
        }
      }
    ]
  }
}

assertChildrens(result.door, require("./timer"), "event.block.getTimers()")
assertChildrens(result.door, require("./block"), "event.block.")

module.exports = result
