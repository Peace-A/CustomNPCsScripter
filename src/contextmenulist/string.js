const { ElementType, ReturnsType } = require("../ContextMenuConstants") 

module.exports = {
    string: {
        title: "Текст",
        element: {
            type: ElementType.SIMPLE,
            cannot_be_inherits: true,
            returns: ReturnsType.STRING,
            header: "<input type=\"text\">",
            code: "\"<>\""
        }
    }
}
 
