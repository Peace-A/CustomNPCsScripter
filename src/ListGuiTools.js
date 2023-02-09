const ModalForm = require("./ModalForm")

module.exports.createGetter = (list, components) => {
  return function le(index) {
    let cmp = components[index]
    let cmpDefault =  { header:cmp.element.header, value: ""}
    return list.find(e=>e.header===cmp.element.header) || cmpDefault
  }
}

module.exports.createArrayGetter = (list, components) => {
  return function le(index) {
    let cmp = components[index]
    let cmpDefault =  { header:cmp.element.header, value: ""}
    return list.filter(e=>e.header===cmp.element.header)
  }
}


const FORMAT_TRIGGER = ":__:"

function formatTrigger(id="") {
  return `:_${id}_:`
}

module.exports.formatComponent = function formatComponent(component, values, modal_li_ul) {

  component.element.headerTemplate = component.element.header

  if (modal_li_ul)
    component.element.modal_li_ul = modal_li_ul

  console.log("compoenent", component)

  if (typeof values !== "object") {
    let value = values
    component.element.header = component.element.header.replaceAll(FORMAT_TRIGGER, value) 

    if (component.element.li_list !== undefined)
      component.element.code = component.element.code.replaceAll(FORMAT_TRIGGER, component.element.li_list[value] )
    else
      component.element.code = component.element.code.replaceAll(FORMAT_TRIGGER, value)

    component.element.modal_li_value = value
  } else {
    for (var id in values) {
      component.element.header = component.element.header.replaceAll(formatTrigger(id), values[id])
      component.element.code = component.element.code.replaceAll(formatTrigger(id), values[id])
    }

    component.element.modal_li_value = JSON.stringify(values).replaceAll('"', "'")
  }

  return component

}

module.exports.createSaveButtonEvent = setListElements => () => { 
  setListElements( getListElements() ) 
}

module.exports.guiMaker = {
  convertList(list, guiComponents) {
    return list.map(e=>{
      var res = guiComponents.find(c=>c.element.headerTemplate===e.header || c.element.header === e.header)
      res.element.modal_li_value = e.value
      return res
    })
  }
}

module.exports.getNewList = (oldList=[]) => {
  let valueList = ModalForm.getValueList().filter(e=>e.value)
  let listElements =  getComponents().filter(c=>valueList.find(e=>e.id===c.element.header))
  let list = listElements.map(o=>{return {header:o.element.header, value: valueList.find(e=>e.id===o.element.header).value} })
  list = mergeLists(list, oldList)
  return list
}



function getListElements() {
  let NpcTabsComponents = getComponents()
  let valueList = ModalForm.getValueList().filter(e=>e.value)
  let listElements =  NpcTabsComponents.filter(c=>valueList.find(e=>e.id===c.element.header))
  for (let component of listElements) module.exports.formatComponent( component, valueList.find(e=>e.id===component.element.header).value )
  return listElements
}

function mergeLists(list1, list2) {
  var list1 = JSON.copy(list1)
  for (let e2 of list2) {
    let e1 = list1.find(e1=>e1.header===e2.header)
    if (e1)
      e1.value = e2.value
    else
      list1.push(e2)
  }
  return list1
}

function getComponents() {
  const NpcTabsComponents = []
  JSON.copy( require("./contextmenulist/npc-display") ).forEach(e=>NpcTabsComponents.push(e))
  JSON.copy( require("./contextmenulist/npc-ai")      ).forEach(e=>NpcTabsComponents.push(e))
  JSON.copy( require("./contextmenulist/npc-stats")   ).forEach(e=>NpcTabsComponents.push(e))
  return NpcTabsComponents
}
