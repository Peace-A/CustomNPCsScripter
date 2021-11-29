const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = [
  {
    title: "мир",
    children: []
  },
  {
    title: "переменная",
    children: []
  },
  {
    title: "x",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "x",
      code: "getX()"
    }
  },
  {
    title: "y",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "y",
      code: "getY()"
    }
  },
  {
    title: "z",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "z",
      code: "getZ()"
    }
  },
  {
    title: "pos",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "pos",
      code: "getPos()"
    }
  },
  {
    title: "meta",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "meta",
      code: "getMetadata()"
    }
  },
  {
    title: "Meta",
    element: {
      type: ElementType.SIMPLE,
      header: "Задать meta {number}",
      code: "setMetadata({})"
    }
  },
  {
    title: "ID",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "ID",
      code: "getName()"
    }
  },
  {
    title: "Удалить",
    element: {
      type: ElementType.SIMPLE,
      header: "Удалить блок",
      code: "remove()"
    }
  },
  {
    title: "удалён",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "удалён",
      code: "isRemoved()"
    }
  },
  {
    title: "воздух",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "это воздух",
      code: "isAir()"
    }
  },
  {
    title: "Блок",
    element: {
      type: ElementType.SIMPLE,
      header: "Заменить блоком с ID {string}",
      code: "setBlock({})"
    }
  },
  {
    title: "это контейнер",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "это контейнер",
      code: "isContainer()"
    }
  },
  {
    title: "название",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "название",
      code: "getDisplayName()"
    }
  },
  {
    title: "Взаимодействовать",
    element: {
      type: ElementType.SIMPLE,
      header: "Взаимодействовать с блоком со стороны (0-5) {number}",
      code: "interact({})"
    }
  }
]

assertChildrens(result[0], require("./world"), "world.")
assertChildrens(result[1], require("./data"), "world.")
//assertChildrens(({children:result}).children, require("./timer"), "getTimers()")

module.exports = result
