
module.exports.createContextMenuByIdList = function createContextMenuByIdList(idList, {target$}) {

  const DO_ELEMENT_TYPE_SIMPLE_HEADER = 0
  const DO_ELEMENT_TYPE_SIMPLE_UL     = 1

  var ContextMenu = new Proxy(initFunc, {
    construct(target, args) {
      return new target(...args)
    }
  }) 

  var result = new ContextMenu()
  
  idList = idList.filter(e=>e!=="")
  let returnsType = getTypeFromContextData(target$.attr("context-menu-data").split(' '))
  for ( let id of idList )
      result.assign(  getTemplateById(id, {type:returnsType}) )

  result.assign( getTemplateById("operators", {type:returnsType}) )

  console.log("RESULT", result.elementTemplateList)
      
  return result

  function filterTemplate(template, filterList={}) {

    for (let i in template.children)
      if (template[i].children !== undefined)
        template[i] = filterTemplate(template[i],filterList)

    if (filterList.onlyInherits === true)
      template = filter( template, t=>t.element.cannot_be_inherits !== true )

    if (filterList.type !== undefined)
      template = filter( template, t=>console.log(filterList.type, t) || console.log(t.element.returns == filterList.type) || t.element.returns == filterList.type )

    return template

    function filter( templates, filterFunc ) {
      let result = JSON.parse(JSON.stringify(templates))

      for (let i in templates)
          void function removeFilterElements(r) {
              let children = r.children
              for ( let i in children ) {
                if (children[i].children !== undefined)
                  removeFilterElements(children[i])
                else if ( filterFunc(children[i]) === false)
                  delete children[i]
                if (children[i] !== undefined && children[i].children === undefined && children[i].element === undefined)
                  delete children[i]
              }

              if (isEmptyObject(children))
                  delete r.children
              //children.flat()
          }(result[i])
      return result
    }
  }
    
  function getTemplateById(ID, filterList) {

    let result = require(`./contextmenulist/${ID}`)

    if (!Array.isArray(result) && typeof result === "object")
      if (result.title !== undefined)
        throw new Error(`${ID} is contextmenulist with errors`)

    if (filterList !== undefined)
      result = filterTemplate(result, filterList)
        
    void function setCategory(elements) {
      for (let i in elements) {
        let elem = elements[i]
        if ( elem.hasOwnProperty("children") )
          setCategory(elem.children)
        else
          elem.category = ID
      } 
    }( result )
    return result
    

    
  }

  function initFunc() {
      
      this.elementTemplateList = {}
      
      this.assign = function (assignObject) {
          assign(this.elementTemplateList, assignObject)
      }
   
      this.getHTML = function () {
           
        const This = this

          void function appendTemplateByParent(parent$) {
            console.log("HELL", parent$, parent$.attr, parent$[0].hasAttribute("context-menu-data"))
            if (parent$.attr === undefined) return
            if (parent$[0].hasAttribute("context-menu-data")) {
              let dataList = parent$.attr("context-menu-data").split(' ').filter(e=>e)
              for (let template of dataList )
                This.assign( getTemplateById(template, { onlyInherits: true, type: getTypeFromContextData( This.target$.attr("context-menu-data").split(' ') ) } ) )
              if (parent$.is("ul"))
                appendTemplateByParent(parent$.parent().parent())
              else
                appendTemplateByParent(parent$.parent().parent().parent())
            }
          }(This.target$.is("ul") ? This.target$.parent().parent() : This.target$.parent().parent().parent())
          
          // Add elements from list
          let result$ = $("<ul></ul>")
        for (let i in this.elementTemplateList)
          if (this.elementTemplateList[i].element !== undefined || this.elementTemplateList[i].children !== undefined)
            result$.append( createElement(this.elementTemplateList[i]) )


          return result$.children()
              
          
          
        function createElement(template) {

                      
              
              let element$ = $(`<li class="ui-menu-item"><div class="ui-menu-item-wrapper" aria-haspopup="${!!template.children}" role="menuitem"></div></li>`)

              element$.children().text(template.title)
              
              if (template.children) {
                  
                  let list$ = $(`<ul style="display: none" role="menu" aria-hidden="true" aria-expanded="false" class="ui-menu ui-widget ui-widget-content ui-front"></ul>`)
                  element$.children().eq(0).append(`<span class="ui-menu-icon ui-icon ui-icon-caret-1-e"></span>`)
                  
                  for (let childElementTemplateIndex in template.children)
                      list$.append( createElement(template.children[childElementTemplateIndex]) )
                      
                  element$.append(list$)
                      
              }
              
              if (template.element) {
                element$.click(function () {
                  let headerOutElementList = [], headerInText = template.element.header

                  headerOutElementList = getHeaderInfoFrom(headerInText, '{', '}', template.category)
                  
                  let result$ = $(`<li class="doElement" element-category="${template.category}" ><header></header></li>`)
                  if (headerOutElementList.length !== 0)
                      result$.children().append(...headerOutElementList)
                  else
                      result$.children().html(headerInText)
                  if (template.element.type === DO_ELEMENT_TYPE_SIMPLE_UL) result$.append($(`<ul class="context-menu-caller" context-menu-data="${getCodeChildrenInfo(template.element.code, '[', ']').join(' ')}"></ul>`))
                  result$.attr("output-code", template.element.code)
                  result$.attr("returns-type", template.element.returns)
                  result$.attr("cannot-inherits-bool", template.element.cannot_be_inherits)
                  This.target$.append(result$)
                  $("#context-menu").hide()
                }) 
              }
              
              return element$
                      
              
          }
          
      }

  }

}


function assign(obj1, obj2) {
    for (let elementIndex in obj2)
        if (!obj1.hasOwnProperty(elementIndex)) 
            obj1[elementIndex] = obj2[elementIndex]
        else if (typeof obj1[elementIndex] === "object" && typeof obj2[elementIndex] === "object")
            assign(obj1[elementIndex], obj2[elementIndex])
}

function getHeaderInfoFrom(text, startSymbol, endSymbol, category) {
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
    result.push( text.slice(0, callStartPos) )
    let argumentsArray = text.slice(callStartPos+1, callEndPos).split(' ')
    result.push( $(`<div class="context-menu-caller context-menu-caller-small" element-category="${category}"  context-menu-data="${argumentsArray.join(' ')}" ></div>`) )
  }
  return result
} 

function getCodeChildrenInfo(code, startSymbol, endSymbol) {
  let callStartPos = code.indexOf(startSymbol)
  let callEndPos = code.indexOf(endSymbol)
  let result = code.slice(callStartPos+1, callEndPos).split(' ')
  return result
}

function getTypeFromContextData( dataArray ) {
    let typeList = ["number", "string", "bool", "itemstack"]
    
    for (let type of typeList)
        if (dataArray.includes(type))
            return type
    
    return null
}

function isEmptyObject( obj ) {
  for (let i in obj)
    if (obj.hasOwnProperty(i))
      return false
  return true
}
