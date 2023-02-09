const doElement = require("./doElement")

module.exports.createContextMenuByIdList = function createContextMenuByIdList(idList, {target$}) {

  var ContextMenu = new Proxy(initFunc, {
    construct(target, args) {
      return new target(...args)
    }
  })

  var result = new ContextMenu()

  idList = idList.filter(e=>e!=="")
  if (target$.attr("context-menu-data"))
    var returnsType = getTypeFromContextData(target$.attr("context-menu-data").split(' '))
  for ( let id of idList )
      result.assign(  getTemplateById(id, {type:returnsType}) )

  if (!target$.is("main.do-workspace"))
    result.assign( getTemplateById("operators", {type:returnsType}) )

  return result

  function filterTemplate(template, filterList={}) {

    for (let i in template.children)
      if (template[i].children !== undefined)
        template[i] = filterTemplate(template[i],filterList)

    template = filter(template, t=>{
      if (t.element.only_one !== true)
        return true
      
      for (let i = 0;i < target$.eq(0).children().length;i++) {
        let doElement$ = $(target$.eq(0).children()[i])
        if (doElement$.attr("output-code") === t.element.code)
          return false
      }

      return true

    })

    if (filterList.onlyInherits === true)
      template = filter( template, t=>t.element.cannot_be_inherits !== true )

    if (filterList.type !== undefined)
      template = filter( template, t=>t.element.returns == filterList.type )

    return template

    function filter( templates, filterFunc ) {
      let result = JSON.parse(JSON.stringify(templates))

      for (let i in templates)
        void function removeFilterElements(r) {
          let children = r.children
          for ( let i in children ) {
            if (!children[i]) {delete children[i];continue}
            if (children[i].children !== undefined)
              removeFilterElements(children[i])
            else if ( filterFunc(children[i]) === false)
              delete children[i]
            if (children[i] !== undefined && children[i].children === undefined && children[i].element === undefined)
              delete children[i]
          }

          if (isEmptyObject(children))
            delete r.children
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

      if ( !(This.target$.is("ul") && This.target$.parent().attr("cannot-inherit") == "true") )
        void function appendTemplateByParent(parent$) {
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



      function createElement(template, properties={}) {
        const NUMBER_OF_ELEMENTS_IN_LIST = 40

        let element$ = $(`<li class="ui-menu-item"><div class="ui-menu-item-wrapper" aria-haspopup="${!!template.children}" role="menuitem"></div></li>`)
        
        if (properties.hided === true)
          element$.css("visibility", "hidden")

        element$.children().text(template.title)

        if (template.hint) {
          let timeOut
          element$.mouseenter(function() {
            $("#hint-dialog").html(template.hint).css({
              "left": $(this).offset().left - 200, // 200 is width of hint-dialog in css
              "top": $(this).offset().top
            }).show()
            if (timeOut)
              clearTimeout(timeOut)
            timeOut = setTimeout(()=> $("#hint-dialog").hide() ,2000)
          })
        }


        if (template.children) {

          let list$ = $(`<ul style="display: none" role="menu" aria-hidden="true" aria-expanded="false" class="ui-menu ui-widget ui-widget-content ui-front"></ul>`)
          list$.on("wheel", ContextMenuScrollEvent)
          hideOutsideElementsOfList(list$)
          element$.children().eq(0).append(`<span class="ui-menu-icon ui-icon ui-icon-caret-1-e"></span>`)

          for (let i in template.children)
            if (i > NUMBER_OF_ELEMENTS_IN_LIST)
              list$.append( createElement(template.children[i], {hided: true}) )
            else
              list$.append( createElement(template.children[i]) )

          element$.append(list$)

        }

        element$.on("mouseover", initChildrenElements)

        function initChildrenElements(event) {
          hideOutsideElementsOfList($(event.relatedTarget).children().find("ul").eq(0))
          element$.off("mouseover", initChildrenElements)
        }

        if (template.element) {
          element$.click(() => {
            This.target$.append(doElement({
              category: template.category,
              ...template.element
            }))
            $("#context-menu").hide()
            $("#hint-dialog").hide()
          })
        }

        return element$

      }

    }

  }

}

function hideOutsideElementsOfList(ul$) {
  ContextMenuScrollEvent({currentTarget: ul$[0], originalEvent: {deltaY: 1}})
  ContextMenuScrollEvent({currentTarget: ul$[0], originalEvent: {deltaY: -1}})
}

function ContextMenuScrollEvent(event) {
  const ULHEIGHT = 500
  const SCROLLPOWER = 8
  const list$ = $(event.currentTarget)
  let elementList$ = list$.children()
  let firstChild$ = elementList$.eq(0)
  let margin = parseInt(firstChild$.css("margin-top"))
  let isScrollUp = event.originalEvent.deltaY < 0

  // borders for scrolling
  let listHeight = getLastElementPositionInUL(elementList$) + firstChild$.height()
  if (isScrollUp) {
    var listPositionInUL = listHeight + margin + SCROLLPOWER
    var movedMargin = margin + SCROLLPOWER
  }
  else {
    var listPositionInUL = listHeight + margin - SCROLLPOWER
    var movedMargin = margin - SCROLLPOWER
  }

  if (listPositionInUL <= ULHEIGHT || movedMargin > 0 )
    return

  // move elements on scroll
  if (isScrollUp) {
    firstChild$.css("margin-top",`${margin+SCROLLPOWER}px`)
    var scrollFlattenValue = firstChild$.height()
  }
  else {
    firstChild$.css("margin-top",`${margin-SCROLLPOWER}px`)
    var scrollFlattenValue = 0
  }

  // hide elements outside ul
  for (let i = 0;i < elementList$.length;i++) {
    let element$ = elementList$.eq(i)
    let elementPosition = getElementPositionInUL(elementList$, i) + margin
    if (
      // condition of the top elements
      elementPosition < 0 - scrollFlattenValue
      ||
      // condition of the bottom elements
      elementPosition > ULHEIGHT - scrollFlattenValue
    )
      element$.css("visibility", "hidden")
    else
      element$.css("visibility", "visible")
  }

  function getLastElementPositionInUL(ul$) {
    return getElementPositionInUL(ul$, ul$.length-1)
  }

  function getElementPositionInUL(ul$, indexElement) {
    let result = 0
    for (let i = 0;i < indexElement;i++)
      result += ul$.eq(i).height()
    return result
  }
}

function assign(obj1, obj2) {
    for (let elementIndex in obj2)
      if (!obj1.hasOwnProperty(elementIndex))
        obj1[elementIndex] = obj2[elementIndex]
      else if (typeof obj1[elementIndex] === "object" && typeof obj2[elementIndex] === "object" && obj1[elementIndex] !== null)
        assign(obj1[elementIndex], obj2[elementIndex])
}

function getTypeFromContextData( dataArray ) {
  let typeList = Object.values(require("./ContextMenuConstants").ReturnsType)

  for (let type of typeList)
    if (dataArray.includes(type))
      return type

  return null
}

function isEmptyObject( obj ) {
  if (!obj) return true
  for (let i in obj)
    if (obj.hasOwnProperty(i))
      return false
  return true
}
