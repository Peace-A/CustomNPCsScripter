const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = [
  {
    title: "блок",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BLOCK,
      header: "блок в кординатах x{number} y{number} z{number}",
      code: "getBlock({},{},{})"
    }
  },
  {
    title: "Блок",
    element: {
      type: ElementType.SIMPLE,
      header: "Поставить в кординатах x{number} y{number} z{number} блок с ID {string} с meta {number}",
      code: "setBlock({},{},{},{},{})"
    }
  },
  {
    title: "Удалить блок",
    element: {
      type: ElementType.SIMPLE,
      header: "Удалить блок в кординатах x{number} y{number} z{number}",
      code: "removeBlock({},{},{})"
    }
  },
  {
    title: "день",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "сейчас день",
      code: "isDay()"
    }
  },
  {
    title: "дождь",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "сейчас дождь",
      code: "isRaining()"
    }
  },
  {
    title: "дождь",
    children: [
      {
        title: "Начать",
        element: {
          type: ElementType.SIMPLE,
          header: "Начать дождь",
          code: "setRaining(true)"
        }
      },
      {
        title: "Закончить",
        element: {
          type: ElementType.SIMPLE,
          header: "Закончить дождь",
          code: "setRaining(false)"
        }
      },
    ]
  },
  {
    title: "Молния",
    element: {
      type: ElementType.SIMPLE,
      header: "Ударить молнию в кординаты x{number} y{number} z{number}",
      code: "thunderStrike({},{},{})"
    }
  },
  {
    title: "Частицы",
    element: {
      type: ElementType.SIMPLE,
      header: "Создать частицы с ID {string} в кординатах x {number} y {number} z {number} с разбросом x {number} y {number} z {number} в количестве {number}",
      code: "spawnParticle({},{},{},{},{},{},{},1,{})"
    }
  },
  {
    title: "предмет",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.ITEMSTACK,
      header: "предмет с ID {string} с damage {number} в количестве {number}",
      code: "createItem({},{},{})"
    }
  },
  {
    title: "взрыв",
    children: [
      {
        title: "Обычный",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number}",
          code: "explode({},{},{},{},false,true)"
        }
      },
      {
        title: "С блоками",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number} с разрушением блоков ",
          code: "explode({},{},{},{},false,true)"
        }
      },
      {
        title: "С огнём",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number} с огнём ",
          code: "explode({},{},{},{},true,false)"
        }
      },
      {
        title: "С блоками и огнём",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number} с разрушением блоков и с огнём ",
          code: "explode({},{},{},{},true,true)"
        }
      }
    ]
  },
  {
    title: "биом",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "название биома в кординатах x {} y {}",
      code: "getBiomeName({},{})"
    }
  },
  {
    title: "Чат",
    element: {
        type: ElementType.SIMPLE,
        header: "написать в чат {string}",
        code: "broadcast({})"
    }
  }
]

module.exports = result
