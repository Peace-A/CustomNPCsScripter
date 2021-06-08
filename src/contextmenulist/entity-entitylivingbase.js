const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
  target: {
    title: "объект",
    children: []
  }
}

assertChildrens(result.target, require("./entitylivingbase"), "event.entity.")

module.exports = result 
