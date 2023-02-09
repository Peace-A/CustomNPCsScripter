const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList") 

module.exports = {
  gui_api: {
    title: "Интерфейс",
    children: [
      {
        title: "Кнопка",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} кнопку текст:"{string}" x:{number} y:{number}`,
          code: `event.gui.addButton({}, {}, {}, {})`
        }
      },
      {
        title: "Кнопка с размерами",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} кнопку текст:"{string}" x:{number} y:{number} шырина:{number} высота:{number}`,
          code: `event.gui.addButton({}, {}, {}, {}, {}, {})`
        }
      },
      {
        title: "Слот",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить слот x:{number} y:{number}`,
          code: `event.gui.addItemSlot({}, {})`
        }
      },
      {
        title: "Слот c предметом",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить слот x:{number} y:{number} с предметом {itemstack}`,
          code: `event.gui.addItemSlot({}, {}, {})`
        }
      },
      {
        title: "Строка",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} строку "{string}" x:{number} y:{number} шырина:{number} высота:{number}`,
          code: `event.gui.addLabel({}, {}, {}, {}, {}, {})`
        }
      },
      {
        title: "Список",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} список x:{number} y:{number} шырина:{number} высота:{number} список {string}`,
          code: `event.gui.addScroll({}, {}, {}, {}, {}, (function(arr) { arr.push({}); return arr })([]) )`
        }
      },
      {
        title: "Поле",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} текстовое поле x:{number} y:{number} шырина:{number} высота:{number}`,
          code: `event.gui.addTextField({}, {}, {}, {}, {})`
        }
      },
      {
        title: "Текстурованая кнопка",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} текстурированую кнопку текст:"{string}" x:{number} y:{number} шырина:{number} высота:{number} текстура:{string} textureX:{number} textureY:{number}`,
          code: `event.gui.addTexturedButton({}, {}, {}, {}, {}, {}, {}, {}, {})`
        }
      },
      {
        title: "Картинка",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить ID: {number} картинку путь:{string} x:{number} y:{number} шырина:{number} высота:{number} textureX:{number} textureY:{number}`,
          code: `event.gui.addTexturedRect({}, {}, {}, {}, {}, {}, {}, {})`
        }
      },
      {
        title: "компонент",
        element: {
          type: ElementType.SIMPLE,
          header: `компонент ID {number}`,
          returns: ReturnsType.GUICOMPONENT,
          code: `event.gui.getComponent({})`
        }
      },
      {
        title: "высота",
        element: {
          type: ElementType.SIMPLE,
          header: `высота интерфейса`,
          returns: ReturnsType.NUMBER,
          code: `event.gui.getHeight()`
        }
      },
      {
        title: "ID",
        element: {
          type: ElementType.SIMPLE,
          header: `ID интерфейса`,
          returns: ReturnsType.NUMBER,
          code: `event.gui.getID()`
        }
      },
      {
        title: "шырина",
        element: {
          type: ElementType.SIMPLE,
          header: `шырина интерфейса`,
          returns: ReturnsType.NUMBER,
          code: `event.gui.getWidth()`
        }
      },
      {
        title: "Удалить компонент",
        element: {
          type: ElementType.SIMPLE,
          header: `Удалить елемент с ID {number}`,
          code: `event.gui.removeComponent({})`
        }
      },
      {
        title: "Фон",
        element: {
          type: ElementType.SIMPLE,
          header: `Задать фоновую картинку {string}`,
          code: `event.gui.setBackgroundTexture({})`
        }
      },
      {
        title: "Останавливать игру",
        element: {
          type: ElementType.SIMPLE,
          header: `Когда интерфейс запущен игра ставится на паузу - {bool}`,
          code: `event.gui.setDoesPauseGame({})`
        }
      },
      {
        title: "Размеры",
        element: {
          type: ElementType.SIMPLE,
          header: `Задать размеры интерфейса шырина:{number} высота:{number}`,
          code: `event.gui.setSize({}, {})`
        }
      },
      {
        title: "Инвентарь",
        element: {
          type: ElementType.SIMPLE,
          header: `Добавить инвентарь игрока в кординаты x:{} y:{}`,
          code: `event.gui.showPlayerInventory({}, {})`
        }
      },
      {
        title: "Обновить компонент",
        element: {
          type: ElementType.SIMPLE,
          header: `Обновить компонент {guicomponent}`,
          code: `event.gui.updateComponent({})`
        }
      }
    ]
  }
}
