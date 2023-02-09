const { ElementType } = require("./ContextMenuConstants")
const { UIElements, turnIntoUIArgs } = require("./UIElements")

module.exports = function doElement({
  category="",
  header="",
  headerTemplate=undefined,
  type=ElementType.SIMPLE,
  code="",
  preCode="",
  returns="",
  needFunction=[],
  cannot_be_inherits=false,
  cannot_inherit=false,
  modal_li_value="",
  modal_li_ul=undefined
}) {

  let result$ = $(`<li class="${type === ElementType.LI ? "doElement-list-li" : "doElement"}" modal-li-value="${modal_li_value}" element-category="${category}" ><header></header></li>`)

  // insert data to header of doElement
  let headerOutElementList = getHeaderInfoFrom(header, '{', '}', category, result$)
  if (headerOutElementList.length !== 0)
    result$.children().append(...headerOutElementList)
  else
    result$.children().html(header)

  // appending additionally data for type for some elements
  if (type === ElementType.UL || type === ElementType.LI_UL) result$.append($(`<ul class="context-menu-caller" context-menu-data="${getCodeChildrenInfo(code, ':[', ':]').join(' ')}"></ul>`))
  if (type === ElementType.LIST) result$.append($(`<ul class="doElement-list"></ul>`))
  if (type === ElementType.LI || type === ElementType.LI_UL) result$.find("header").eq(0).prepend($RemoveButton())
  if (type === ElementType.LI_UL && modal_li_ul !== undefined) result$.find("ul.context-menu-caller").eq(0).append(modal_li_ul.eq(0).children())

  result$.attr("output-code", code)
  result$.attr("output-pre-code", preCode)
  result$.attr("returns-type", returns)
  result$.attr("need-function-list", needFunction.join(","))
  result$.attr("cannot-inherits-bool", cannot_be_inherits)
  result$.attr("cannot-inherit", cannot_inherit)
  result$.attr("header-template", headerTemplate || header)
  result$.attr("type-template", type)

  return result$
}

function $RemoveButton() {
  var button$ = $(`<button class="btn btn-sm float-right" style="transform:scale(1.5)"><span aria-hidden="true" style="color:red">&times;</span></button>`)
  button$.click(()=>button$.parent().parent().remove())
  return button$
}

module.exports.getTemplateFromDoElement$ = getTemplateFromDoElement$

function getTemplateFromDoElement$(element$) {
  return {
    category: element$.attr("element-category"),
    header: element$.attr("header-template"),
    type: element$.attr("type-template"),
    code: element$.attr("output-code"),
    preCode: element$.attr("output-pre-code"),
    returns: element$.attr("returns-type"),
    needFunction: element$.attr("need-function-list").split(","),
    cannot_be_inherits: element$.attr("cannot-inherits-bool"),
    cannot_inherit: element$.attr("cannot-inherit")
  }
}


function getHeaderInfoFrom(text, startSymbol, endSymbol, category, element$) {
  let result = []
  for (
    let callStartPos = text.indexOf(startSymbol),
    callEndPos = text.indexOf(endSymbol),
    len = text.length;

    callStartPos !== -1;

    text = text.slice(callEndPos+1, len),
    callStartPos = text.indexOf(startSymbol),
    callEndPos = text.indexOf(endSymbol),
    len = text.length
  ) {

    // is it just text
    result.push( text.slice(0, callStartPos) )

    // is it small caller
    if (text[callStartPos+1] !== ":") {
      let argumentsArray = text.slice(callStartPos+1, callEndPos).split(' ')
      result.push( $(`<div class="context-menu-caller context-menu-caller-small" element-category="${category}"  context-menu-data="${argumentsArray.join(' ')}" ></div>`) )
    } 
    // is it ui element
    else {
      let testText = text.slice(callStartPos+2, callEndPos)
      let uiElementName = testText.slice(0, testText.indexOf(":")).trim()
      let uiArgs = turnIntoUIArgs(testText.slice( testText.indexOf("(")+1, testText.length-1 ))

      let UIOutShell = $(`<div class="ui-element" name="${uiElementName}"></div>`)
      UIOutShell.append( UIElements[uiElementName].createElement(uiArgs, element$) )

      result.push(UIOutShell)
    }
  }

  // add last part
  result.push(text.slice(endSymbol+1, text.length))

  return result
}

function getCodeChildrenInfo(code, startSymbol, endSymbol) {
  let callStartPos = code.indexOf(startSymbol)
  let callEndPos = code.indexOf(endSymbol)
  let result = code.slice(callStartPos+startSymbol.length, callEndPos).split(' ')
  return result
}
