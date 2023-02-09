const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  target: {
    title: "существо",
    children: []
  }
}

assertChildrens(result.target, require("./entity"), "event.target.")

module.exports = result
