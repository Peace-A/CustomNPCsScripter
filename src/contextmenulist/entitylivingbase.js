const { ElementType, ReturnsType } = require("../ContextMenuConstants") 
const { assertChildrens } = require("../AssertContextMenuList") 

let result = [
  {
    title: "хп",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "количество хп",
      code: "getHealth()"
    }
  },
  {
    title: "максимальное хп",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "максимальное хп",
      code: "getMaxHealth()"
    }
  },
  {
    title: "атакован",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "атакован",
      code: "isAttacking()"
    }
  },
  {
    title: "ребёнок",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "ребёнок",
      code: "isChild()"
    }
  },
  {
    title: "время с последней атаки",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "время с последней атаки",
      code: "getLastAttackedTime()"
    }
  },
  {
    title: "Установить хп",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить количество хп {number}",
      code: "setHealth({})"
    }
  },
  {
    title: "Установить максимальное хп",
    element: {
      type: ElementType.SIMPLE,
      header: "Установить максимальное хп {number}",
      code: "setMaxHealth({})"
    }
  },
  {
    title: "Ударить воздух",
    element: {
      type: ElementType.SIMPLE,
      header: "Ударить воздух правой рукой",
      code: "swingMainhand()"
    }
  },
  {
    title: "Ударить воздух слева",
    element: {
      type: ElementType.SIMPLE,
      header: "Ударить воздух левой рукой",
      code: "swingOffhand()"
    }
  },
  {
    title: "Добавить эффект",
    element: {
      type: ElementType.SIMPLE,
      header: "Добавить эффект с ID {number}, продолжительностью {number}, силой {number}",
      code: "addPotionEffect({},{},{},false)"
    }
  },
  {
    title: "Удалить эффекты",
    element: {
      type: ElementType.SIMPLE,
      header: "Удалить все эффекты",
      code: "clearPotionEffects()"
    }
  }
]

let timeObj = {children:result}

assertChildrens(timeObj, require("./entity"))

module.exports = result
