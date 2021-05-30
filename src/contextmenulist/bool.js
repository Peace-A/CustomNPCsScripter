 
const { ElementType, ReturnsType } = require("../ContextMenuConstants") 
const { assertChildrens } = require("../AssertContextMenuList") 

let result = {
    bool: {
        title: "bool",
        children: [
            {
                title: "истина",
                element: {
                    type: ElementType.SIMPLE,
                    returns: ReturnsType.BOOL,
                    header: "ИСТИНА",
                    code: "true"
                }
            },
            {
                title: "ложь",
                element: {
                    type: ElementType.SIMPLE,
                    returns: ReturnsType.BOOL,
                    header: "ЛОЖЬ",
                    code: "false"
                }
            }
        ]
    }
}


module.exports = result


 
