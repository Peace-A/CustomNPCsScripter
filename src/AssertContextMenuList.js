 
module.exports.assertChildrens = assertChildrens

function assertChildrens(obj1, array, preText="", isAppend=true) {
  array = JSON.copy(array)
  if (obj1.children === undefined) throw new Error("Object initialization is invalid")
  for (let component of array) {
    if (component.element !== undefined)
      component.element.code = preText + component.element.code
    if (component.children !== undefined)
      assertChildrens(component, component.children, preText, false)
    if (isAppend === true)
      obj1.children.push(component)
  }
}
