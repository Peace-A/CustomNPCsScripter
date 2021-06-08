 
module.exports.assertChildrens = assertChildrens

function assertChildrens(obj1, array, preText="", clearObject=false) {
  array = JSON.copy(array)
  if (obj1.children === undefined) throw new Error(`Object initialization is invalid in ${JSON.stringify(obj1)}`)
  if (clearObject === true) obj1.children = []
  for (let component of array) {
    if (component.element !== undefined)
      component.element.code = preText + component.element.code
    if (component.children !== undefined)
      component = assertChildrens(component, component.children, preText, true)
    obj1.children.push(component)
  }
  return obj1
}
