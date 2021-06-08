const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
  target: {
    title: "объект",
    children: []
  }
}

assertChildrens(result.target, require("./entitylivingbase"), "event.target.")

module.exports = result
