const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
  entity: {
    title: "объект",
    children: []
  }
}

assertChildrens(result, require("./entitylivingbase"), "event.entity.")

module.exports = result 
