const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  item: {
    title: "предмет",
    children: []
  }
}

assertChildrens(result.item, require("./itemstack"), "event.item.")

module.exports = result

