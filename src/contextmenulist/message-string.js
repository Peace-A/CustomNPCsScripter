const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  message: {
    title: "сообщение",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "сообщение",
      code: "event.message"
    }
  }
}

module.exports = result

