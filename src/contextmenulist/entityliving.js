const { ElementType, ReturnsType } = require("../ContextMenuConstants") 
const { assertChildrens } = require("../AssertContextMenuList") 

let result = [
  {
    title: "идёт",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "идёт",
      code: "isNavigating()"
    }
  },
  {
    title: "Прыгнуть",
    element: {
      type: ElementType.SIMPLE,
      header: "Прыгнуть",
      code: "jump()"
    }
  },
  {
    title: "Идти",
    element: {
      type: ElementType.SIMPLE,
      header: "Идти на кординаты x {number} y {number} z {number} со скоростью {number}",
      code: "navigateTo({},{},{},{})"
    }
  },
  {
    title: "Остановиттся",
    element: {
      type: ElementType.SIMPLE,
      header: "Приостановить движение",
      code: "clearNavigation()"
    }
  }
]

let timeObj = {children:result}

assertChildrens(timeObj, require("./entitylivingbase"))

module.exports = result


