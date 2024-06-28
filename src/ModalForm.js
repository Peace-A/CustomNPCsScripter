
const Dropdown = require("./Dropdown")

var ModalForm = function ModalForm({title, body, width, btnList=[], id=generateMFID()}) {
  let modalForm$ = Root(id)
  modalForm$.append(Header(title))
  modalForm$.append(Body(body))
  if (btnList.length !== 0)
    modalForm$.append(Footer(btnList))

  if (width)
    $("#modal-form-content").css("min-width", width)
  else
    $("#modal-form-content").css("min-width", "inherit")
  
  return createModalFormAPI(modalForm$) 

}

ModalForm.createBackImgModalForm = function createBackImgModalForm({ imageURL, elementList, unvisibleBackground, id=generateMFID() }) {
  let modalForm$ = Root(id, {unvisible:unvisibleBackground})

  let image$ = $(`<img src="${imageURL}">`)
  image$.appendTo(modalForm$)
  image$[0].onload = () => {
    modalForm$.css({
      width: image$[0].naturalWidth,
      height: image$[0].naturalHeight
    }).parent().css("min-width", image$[0].naturalWidth)
  }

  for ( let template of elementList ) {
    let elementCreator = MFElementTemplate[template.type]
    if ( elementCreator !== undefined ) {
      let element$ = elementCreator(template)
      modalForm$.append( element$ )
    } else throw new Error(`Template use unexpected type of element ${JSON.stringify(template)}. \n Template ${template.type} is not defined`)
  }

  
  return createModalFormAPI(modalForm$)
}

ModalForm.getFromID = function getFromID(id, templateArgs) {
  let template = require(`./modalformlist/${id}`)
  let args = template.createArgs(templateArgs)

  args.imageURL = `./assets/${args.imageURL}`
  args.id = id

  if (ModalFormList[ template.type ] !== undefined)
    return ModalFormList[ template.type ] (args)
  else throw new Error(`${id} modal form has mistake`)
}

ModalForm.hide = function hide() {
  $("#modal-form").hide()
  ModalForm.clearCache()
}
ModalForm.getOpenModal$ = function getOpenModal$() { return $("#modal-form-content").children() }
ModalForm.getOpenModalID = function getOpenModalID() { return $("#modal-form-content>.modal-content").attr("modal-id") }
ModalForm.getValueList = function getValueList() {
  let valueList = []
  ModalForm.cache[ ModalForm.getOpenModalID() ] = ModalForm.getOpenModal$().clone()

  for (let mfid in ModalForm.cache) {
    ModalForm.cache[mfid].children().each(function(){
      if ( !$(this).is("div.dropdown") && !$(this).is("input") ) return
      if ( $(this).css("display") === "none" ) return
      valueList.push({
        id: $(this).attr("modal-form-element-id"),
        value: $(this).is("input") ?   $(this).val():  $(this).attr("selected-element-name")
      })
    })
  }

  return valueList
}
ModalForm.open = function open(id, args) {
  ModalForm.cache[ ModalForm.getOpenModalID() ] = ModalForm.getOpenModal$().clone()
  ModalForm.getFromID( id, args ).show()
}

ModalForm.cache = {}
ModalForm.clearCache = function clearCache() { ModalForm.cache = {} }
ModalForm.showCacheMF = function showCacheMF(id) { createModalFormAPI( ModalForm.cache[id].clone() ).show() }

module.exports = ModalForm


const ModalFormList = {
  simple: ModalForm,
  bgImage: ModalForm.createBackImgModalForm
}

const MFElementTemplate = {
  textInput(template) {
    let textInput$ = $(`<input class="p-3" placeholder="${template.placeholder || ""}" value="${template.value || ""}" >`)

    textInput$.css("color", template.color||"white")

    if (template.fontSize !== undefined)
      textInput$.css("font-size", `${template.fontSize}px`)

    if (template.invisible === true)
      setUnvisible(textInput$)

    setBaseMFEProperties(textInput$, template)

    return textInput$

  },
  choiceButton(template) {
    const { UIElements } = require("./UIElements")
    let dropdown$ = UIElements.list.createElement({
      buttonClassCSS: "minecraft-btn",
      dropdownClassCSS: "minecraft-dropdown",
      dropdownItemClassCSS: "minecraft-dropdown-item",
      list: template.list,
      value: template.value,
      size: {
        width: template.width,
        height: template.height
      }
    })

    setBaseMFEProperties(dropdown$, template)

    return dropdown$
  },
  closeButton(template) {
    let button$ = $(`<button class="${template.classCSS || ""}">${template.title || ""}</button>`)

    if (template.invisible === true)
      setUnvisible(button$)

    button$.click(()=>{

      if (template.onclose !== undefined)
        template.onclose(ModalForm)

      ModalForm.hide()

    })

    setBaseMFEProperties(button$, template)

    return button$
  },
  linkButton(template) {
    let button$ = $(`<button class="${template.classCSS || ""}">${template.title || ""}</button>`)

    if (template.invisible === true)
      setUnvisible(button$)

    button$.click(()=>{
      ModalForm.cache[ ModalForm.getOpenModalID() ] = ModalForm.getOpenModal$().clone()
      ModalForm.getFromID( template.modalForm.id, template.modalForm.args ).show()
    })

    setBaseMFEProperties(button$, template)

    return button$
  },
  stageButton(template) {
    let button$ = $(`<button class="${template.classCSS || ""}">${template.title || ""}</button>`)

    if (template.invisible === true)
      seyUnvisible(button$)

    button$.click(()=>{
      get$ByID(template.stages[ StageIndex().get() ].id).hide()
      get$ByID(template.stages[ StageIndex().next() ].id).show()
      button$.text(template.stages[StageIndex().get()].title)
    })

    function get$ByID(id) {
      let result
      ModalForm.getOpenModal$().children().each(function(){
        if ($(this).attr("modal-form-element-id") == id)
          result = $(this)
      })
      return result
    }

    let stageIndex = 0
    function StageIndex() {
      return {
        get: () => stageIndex,
        next() {
          if (stageIndex == template.stages.length-1)
            stageIndex = 0
          else
            stageIndex++
          return stageIndex
        }
      }
    }

    setBaseMFEProperties(button$, template)

    return button$
  }
}


var modalFormNumber = 0
function generateMFID() {
  return `_modalForm_${modalFormNumber}`
}

function setUnvisible(element$) {
  return element$.css({
    border: "none",
    background: "none"
  })
}

function setBaseMFEProperties(element$, template) {
  element$.css({
    width: `${template.width}px`,
    height: `${template.height}px`,
    top: `${template.y}px`,
    left: `${template.x}px`,
    position: "absolute"
  }).attr("modal-form-element-id", template.id)

  if (template.hided === true)
    element$.hide()

  return element$
}

function createModalFormAPI(modalForm$) {
  return {
    show() {
      $("#modal-form>#modal-form-content").empty().append(modalForm$)
      $("#modal-form").show()
    }
  }
}

function Root(id, args={}) {
  let {unvisible} = args
  let result$ = $(`<div class="modal-content"></div>`)

  result$.attr("modal-id", id)


  if (unvisible)
    setUnvisible(result$)

  return result$
}

function Header(text) {

  let result$ =  $(`<div class="modal-header"></div>`)

  result$.append(Title(text))
  result$.append(ExitButton())

  return result$

  function Title(titleText) {
    return $(`<h5 class="modal-title" >${titleText}</h5>`) 
  }

  function ExitButton() {
    let result$ = $(`<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>`)
    result$.click(()=>ModalForm.hide())
    return result$
  }

}

var checkBoxCounter = 0
function Body(template) {

  const BodyElementsTypes = {
    CheckBox,
    DropDown,
    Image,
    Html
  }

  let result$ = $(`<div class="modal-body"></div>`)

  for (let element of template) {

    if (element instanceof String)
      result$.append(Paragraph(element))

    else if (element instanceof Array) {

      let [subtitle, ...paragraphElements] = element
      result$.append(Subtitle(subtitle))

      for (let prgElem of paragraphElements) {
        if (typeof prgElem === "string")
          result$.append(Paragraph(prgElem))
        else if (prgElem instanceof Object && BodyElementsTypes[prgElem.type] !== undefined)
          result$.append( BodyElementsTypes[prgElem.type](prgElem) )
        else throw new Error(`This object has incorect template ${JSON.stringify(prgElem)} it has type ${typeof prgElem}`)
      }
    }

    else if (element instanceof Object && BodyElementsTypes[element.type] !== undefined)
      result$.append( BodyElementsTypes[element.type](element) )

    else throw new Error(`${JSON.stringify(template)} has unexpected data`)

  }

  return result$ 

  function Paragraph(text) {
    return $(`<p>${text}</p>`)
  }

  function Subtitle(text) {
    return $(`<h4>${text}</h4>`)
  }
  
  function CheckBox({ title, checked, onclick }) {
    let id = `body-check-box-with-id-${checkBoxCounter}`
    let result$ = $(`<div class="form-group form-check"><input type="checkbox" ${checked?"checked":""} class="form-check-input" id="${id}"><label class="form-check-label" for="${id}">${ title }</label></div>`).click(onclick)
    checkBoxCounter++
    return result$
  }

  function DropDown(args) {
    return Dropdown(args)
  }

  function Image({src}) {
    return $(`<img src="${src}">`)
  }

  function Html({getHtml$}) {
    return getHtml$()
  }

}

function Footer(btnList) {
  let result$ = $(`<div class="modal-footer"></div>`)
  for (let btnTemplate of btnList)
    result$.append(Button(btnTemplate))

  return result$

  function Button({title, onclick}) {
    return $(`<button type="button" class="btn btn-primary" data-dismiss="modal">${title}</button>`).click(event=>{
      onclick(event, ModalForm.getOpenModal$().find(".modal-body").eq(0))
      ModalForm.hide()
    })
    
  }

}
