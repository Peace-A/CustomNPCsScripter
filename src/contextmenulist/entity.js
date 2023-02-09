const { ElementType, ReturnsType } = require("../ContextMenuConstants")

let result = [
  {
    title: "x",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "X",
      code: "getBlockX()"
    }
  },
  {
    title: "y",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "Y",
      code: "getBlockY()"
    }
  },
  {
    title: "z",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "Z",
      code: "getBlockZ()"
    }
  },
  {
    title: "вращение",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "вращение",
      code: "getRotation()"
    }
  },
  {
    title: "крадётся",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "крадётся",
      code: "isSneaking()"
    }
  },
  {
    title: "бежит",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "бежит",
      code: "isSprinting()"
    }
  },
  {
    title: "в огне",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "в огне",
      code: "inFire()"
    }
  },
  {
    title: "в воде",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "в воде",
      code: "inWater()"
    }
  },
  {
    title: "в лаве",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "в лаве",
      code: "inLava()"
    }
  },
  {
    title: "живой",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "живой",
      code: "isAlive()"
    }
  },
  {
    title: "горит",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "горит",
      code: "isBurning()"
    }
  },
  {
    title: "название",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "название",
      code: "getTypeName()"
    }
  },
  {
    title: "имеет тег",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "имеет тег {string}",
      code: "hasTag({})"
    }
  },
  {
    title: "имеет имя",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "имеет имя",
      code: "hasCustomName()"
    }
  },
  {
    title: "позиция",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.POS,
      header: "позиция",
      code: "getPos()"
    }
  },
  {
    title: "Установить позицию",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить позицию в x {number} y {number} z {number}",
      code: "setPosition({},{},{})"
    }
  },
  {
    title: "Установить вращение",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить вращение по x {number} y {number} z {number}",
      code: "setRotation({},{},{})"
    }
  },
  {
    title: "Установить поворот головы по высоте",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить поворот голови по высоте {number}",
      code: "setPitch({})"
    }
  },
  {
    title: "Отбросить",
    element: {
      type: ElementType.SIMPLE,
      header: "Отбросить с силой {number} под углом {number}",
      code: "knockback({},{})"
    }
  },
  {
    title: "Деспавнить",
    element: {
      type: ElementType.SIMPLE,
      header: "Деспавнить",
      code: "despawn()"
    }
  },
  {
    title: "Убить",
    element: {
      type: ElementType.SIMPLE,
      header: "Убить",
      code: "kill()"
    }
  },
  {
    title: "Поджечь",
    element: {
      type: ElementType.SIMPLE,
      header: "Поджечь на {number} секунд",
      code: "setBurning({})"
    }
  },
  {
    title: "Затушить",
    element: {
      type: ElementType.SIMPLE,
      header: "Затушить от огня",
      code: "extinguish()"
    }
  },
  {
    title: "Добавить тег",
    element: {
      type: ElementType.SIMPLE,
      header: "Добавить тег {string}",
      code: "addTag({})"
    }
  },
  {
    title: "Удалить тег",
    element: {
      type: ElementType.SIMPLE,
      header: "Удалить тег {string}",
      code: "removeTag()"
    }
  },
  {
    title: "Ударить",
    element: {
      type: ElementType.SIMPLE,
      header: "Ударить с силой {number}",
      code: "damage({})"
    }
  },
  {
    title: "Установить имя",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить имя {string}",
      code: "setName({})"
    }
  }
]

module.exports = result
