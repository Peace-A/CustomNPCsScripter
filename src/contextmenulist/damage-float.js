const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  damage: {
    title: "урон",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.NUMBER,
      header: "полученый урон",
      code: "event.damage"
    }
  }
}

module.exports = result
