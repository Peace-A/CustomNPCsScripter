const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  block: {
    title: "блок",
    children: [
      {
        title: "Модель",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать модель блока с ID {string}",
          code: "event.block.setModel({})"
        }
      },
      {
        title: "Редстоун",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать уровень редстоуна для блока  (1-15) {number}",
          code: "event.block.setRedstonePower({})"
        }
      },
      {
        title: "ефект лесницы",
        children: [
          {
            title: "Установить",
            element: {
              type: ElementType.SIMPLE,
              header: "Дать возможность игрокам лазать по блоку",
              code: "event.block.setIsLadder(true)"
            }
          },
          {
            title: "Убрать",
            element: {
              type: ElementType.SIMPLE,
              header: "Убрать возможность игрокам лазать по блоку",
              code: "event.block.setIsLadder(false)"
            }
          }
        ]
      },
      {
        title: "Свет",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать уровень света для блока  (1-15) {number}",
          code: "event.block.setLight({})"
        }
      },
      {
        title: "Масштаб",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать масштаб текстуры для блока (0-10) x {number} y {number} z {number}",
          code: "event.block.setScale({},{},{})"
        }
      },
      {
        title: "масштаб x",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "масштаб блока по оси x",
          code: "event.block.getScaleX()"
        }
      },
      {
        title: "масштаб y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "масштаб блока по оси y",
          code: "event.block.getScaleY()"
        }
      },
      {
        title: "масштаб z",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "масштаб блока по оси z",
          code: "event.block.getScaleZ()"
        }
      },
      {
        title: "Вращение",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать вращение текстуры для блока (0-359) x {number} y {number} z {number}",
          code: "event.block.setRotation({},{},{})"
        }
      },
      {
        title: "вращение x",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "вращение блока по оси x",
          code: "event.block.getRotationX()"
        }
      },
      {
        title: "вращение y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "вращение блока по оси y",
          code: "event.block.getRotationY()"
        }
      },
      {
        title: "вращение z",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "вращение блока по оси z",
          code: "event.block.getRotationZ()"
        }
      },
      {
        title: "прозрачность хитбоксов",
        children: [
          {
            title: "Установить",
            element: {
              type: ElementType.SIMPLE,
              header: "Установить возможность проходить сквозь блок",
              code: "event.block.setIsPassible(true)"
            }
          },
          {
            title: "Убрать",
            element: {
              type: ElementType.SIMPLE,
              header: "Убрать возможность проходить сквозь блок",
              code: "event.block.setIsPassible(false)"
            }
          }
        ]
      },
      {
        title: "Прочность",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать прочность блоку (-1 - невозможно взломать) {number}",
          code: "event.block.setHardness({})"
        }
      },
      {
        title: "Команда",
        element: {
          type: ElementType.SIMPLE,
          header: "Выполнить команду {string}",
          code: "event.block.executeCommand({})"
        }
      },
      {
        title: "Взривоустойчевость",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать уровень взривоустойчевости блоку (-1 - невозможно взорвать) {number}",
          code: "event.block.setResistance({})"
        }
      },
    ]
  }
}

assertChildrens(result.block, require("./block"), "event.block.")

module.exports = result
