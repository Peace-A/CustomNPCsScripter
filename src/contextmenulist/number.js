const { ElementType, ReturnsType } = require("../ContextMenuConstants") 

module.exports = {
  number: {
    title: "Число",
    element: {
      type: ElementType.SIMPLE,
      cannot_be_inherits: true,
      returns: ReturnsType.NUMBER,
      header: "<input type=\"number\">",
      code: "<>"
    }
  }
}
