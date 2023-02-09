const { ElementType, ReturnsType } = require("../ContextMenuConstants") 

module.exports = {
 position: {
    title: "позиция",
    element: {
      type: ElementType.SIMPLE,
      cannot_be_inherits: true,
      returns: ReturnsType.POS,
      header: "позиция x{number} y{number} z{number}",
      code: "event.API.getIPos({},{},{})"
    }
  }
}
