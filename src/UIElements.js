const ModalForm = require("./ModalForm.js")
const { ElementType } = require("./ContextMenuConstants")
const Dropdown = require("./Dropdown")

module.exports.UIElements = {
  list: {
    createElement(args) {
      return Dropdown(args)
    },
    getCode(element$) {
      return element$.attr("selected-element-name")
    }
  },
  modal: {
    createElement(args, element$) {
      let button$ = $(`<button class="btn btn-sm btn-secondary scaledown"><b>${args.name || "[ ]"}</b></button>`)

      button$.click(()=>{
        let list$ = element$.find("ul.doElement-list")
        let element$List = list$.children()

        let list = []
        for (let i of Array(element$List.length).keys() ) {
          let element$ = element$List.eq(i)
          let listElement = { header: element$.attr("header-template"), value: element$.attr("modal-li-value").replaceAll("'", '"') }
          if (element$.find("ul.context-menu-caller").eq(0).parent().is(element$))
            listElement.modal_li_ul = element$.find("ul.context-menu-caller").eq(0).clone(true, true)
          list.push(listElement)
        }

        ModalForm.getFromID(args.id, {list, setListElements(templateList) {
          list$.empty()
          for (let tmp of templateList) {
            list$.append( require("./doElement")({
              ...tmp.element
            }) )
          }

        }}).show()
      })
      return button$
    },
    getCode(element$) {
      return element$.attr("modal-output-code")
    }
  }
}

module.exports.turnIntoUIArgs= (argsString) => {
  let result = {}

  for (let testPosition = argsString.indexOf(":");  argsString.indexOf(":") !== -1;argsString = argsString.replace(":", "-").slice(argsString.indexOf(";")+1, argsString.length), testPosition = argsString.indexOf(":") ) {
    let argName = argsString.slice( argsString.slice(0,testPosition).lastIndexOf(" ")+1, testPosition )
    let argValue = argsString.slice( testPosition+1, argsString.indexOf(";") ).split(",")
    if (argValue.length === 1)
      argValue = argValue[0]

    result[argName] = argValue
  }

  return result
}
 
