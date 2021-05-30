const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
    title: "объект",
    children: []
}

assertChildrens(result, require("./entitylivingbase"), "event.target.")

module.exports = result
