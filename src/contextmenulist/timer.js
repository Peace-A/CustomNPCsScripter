const { ElementType, ReturnsType } = require("../ContextMenuConstants")

let result = [
  {
    title: "Ждать",
    element: {
      type: ElementType.UL,
      header: "Выполнить с ID {number} после {number} секунд",
      preCode: "setTimer(",
      code: ",{},{}*20,false,function() { :[:] })",
      needFunction: ["setTimer"]
    }
  }
]

module.exports = result

