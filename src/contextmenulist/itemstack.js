const { ElementType, ReturnsType } = require("../ContextMenuConstants")

let result = [
  {
    title: "количество",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "количество",
      code: "getStackSize()"
    }
  },
  {
    title: "максимальное количество",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "максимальное количество",
      code: "getMaxStackSize()"
    }
  },
  {
    title: "повреждённость",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "повреждённость",
      code: "getItemDamage()"
    }
  },
  {
    title: "максимальная повреждённость",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "макстмальная повреждённость",
      code: "getMaxItemDamage()"
    }
  },
  {
    title: "наносимый урон",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "возможный наносимый урон предмета",
      code: "getAttackDamage()"
    }
  },
  {
    title: "зачарован",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "зачарован",
      code: "isEnchanted()"
    }
  },
  {
    title: "зачарован на",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "имеет зачарование с ID {number}",
      code: "hasEnchant({})"
    }
  },
  {
    title: "это одежда",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "это одежда",
      code: "isWearable()"
    }
  },
  {
    title: "имеет название",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "имеет изменённое название",
      code: "hasCustomName()"
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
    title: "имя",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "имя",
      code: "getItemName()"
    }
  },
  {
    title: "описание",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "описание",
      code: "getLore().join(' ')"
    }
  },
  {
    title: "minecraftID",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "minecraftID",
      code: "getName()"
    }
  },
  {
    title: "питательность",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "питательность",
      code: "getFoodLevel()"
    }
  },
  {
    title: "Количество",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить {number} количество предметов",
      code: "setStackSize({})"
    }
  },
  {
    title: "Повреждённость",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить {number} уровень повреждённости предмета",
      code: "setItemDamage({})"
    }
  },
  {
    title: "Зачаровать",
    element: {
      type: ElementType.SIMPLE,
      header: "Добавить зачарование с ID {number} и с силой {number}",
      code: "addEnchantment({},{})"
    }
  },
  {
    title: "Снять зачарование",
    element: {
      type: ElementType.SIMPLE,
      header: "Удалить зачарование с ID {number}",
      code: "removeEnchant({})"
    }
  },
  {
    title: "Назвать",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить {string} название предмета",
      code: "setCustomName({})"
    }
  },
  {
    title: "Описать",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить {string} описание предмета",
      code: "setLore([{}])"
    }
  }
]



module.exports = result
