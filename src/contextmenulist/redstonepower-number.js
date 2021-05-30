const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  redstonepower: {
    title: "сила редстоуна",
    children: [
      {
        title: "текущая",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "текущая сила редстоуна",
          code: "event.power"
        }
      },
      {
        title: "предыдущая",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "предыдущая сила редстоуна",
          code: "event.prevPower"
        }
      }
    ]
  }
}

module.exports = result


