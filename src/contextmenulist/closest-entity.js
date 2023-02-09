const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  closest: {
    title: "ближайшое существо",
    children: []
  }
}

assertChildrens(result.closest, require("./entity"), "closestEntity.")

module.exports = result
