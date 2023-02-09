const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  exp: {
    title: "опыт",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "количество выброшеного опыта",
      code: "event.exp"
    }
  }
}

module.exports = result

