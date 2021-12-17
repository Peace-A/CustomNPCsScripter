const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  slot: {
    title: "Слот",
    children: [
      {
        title: "количество",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "количество предметов в слоте",
          code: "event.stack.getStackSize()"
        }
      },
      {
        title: "название",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.STRING,
          header: "Название предмета в слоте",
          code: "event.stack.getName()"
        }
      },
      {
        title: "предмет",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.ITEMSTACK,
          header: "предмет в слоте",
          code: "event.stack"
        }
      }
    ]
  }
}

module.exports = result
