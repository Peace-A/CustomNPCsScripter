const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
  entity: {
    title: "объект",
    children: []
  }
}

assertChildrens(result.entity, require("./entity"), "event.entity.")

module.exports = result 
 
 
