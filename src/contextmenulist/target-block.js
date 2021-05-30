const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  target: {
    title: "блок",
    children: []
  }
}

assertChildrens(result.target, require("./block"), "event.target.")

module.exports = result
