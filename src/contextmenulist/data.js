const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let Data = [
  {
    title: "получить",
    element: {
      type: ElementType.SIMPLE,
      header: "получить {string}",
      code: "get({})"
    }
  },
  {
    title: "в наличии",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "в наличии {string}",
      code: "has({})"
    }
  },
  {
    title: "Записать",
    element: {
      type: ElementType.SIMPLE,
      header: "Записать в {string} значение {string}",
      code: "put({},{})"
    }
  },
  {
    title: "Удалить",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "Удалить переменную {string} ",
      code: "remove({})"
    }
  }
]

let result = [
  {
    title: "Постоянная",
    children: []
  },
  {
    title: "Временная",
    children: []
  }
]



let childrenTemplate = [{title: ReturnsType.STRING,children: createDataTemplate(ReturnsType.STRING)},{title: ReturnsType.NUMBER,children: createDataTemplate(ReturnsType.NUMBER)}]
assertChildrens(result[0], copy(childrenTemplate), "getStoreddata().")

childrenTemplate = []
for (let type in ReturnsType) {
  type = ReturnsType[type]
  childrenTemplate.push({
    title: type,
    children: createDataTemplate(type)
  })
}
assertChildrens(result[1], copy(childrenTemplate), "getTempdata().")

module.exports = result

function createDataTemplate(type) {
  let result = JSON.parse(JSON.stringify(Data))
  result[0].element.returns = type

  let hc = result[2].element.header
  result[2].element.header = hc.slice(0,hc.lastIndexOf("{string}")) + `{${type}}`
  return result
}

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
