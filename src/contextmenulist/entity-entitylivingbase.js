const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
    title: "объект",
    children: []
}

assertChildrens(result, require("./entitylivingbase"), "event.entity.")

module.exports = result 
