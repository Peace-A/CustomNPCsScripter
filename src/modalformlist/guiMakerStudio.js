const {createArrayGetter, formatComponent, guiMaker} = require("../ListGuiTools")

module.exports = {
  type: "simple",
  createArgs({list, setListElements}) {
    let guiComponents = JSON.copy( require("../contextmenulist/gui.js") )
    let le = createArrayGetter(list, guiComponents)

    console.log("list", list)

    const guiElement = {
      "button": 0,
      "slot": 1,
      "slotitem": 2,
      "label": 3,
      "scroll": 4,
      "textfield": 5,
      "texturebutton": 6,
      "image": 7,
      "inventory": 11
    }

    // parse elements with json value
    for (let elementIndex of Object.values(guiElement) ) {
      le(elementIndex).forEach(e=>e.json = JSON.parse(e.value || "{}"))
    }

    let { convertList } = guiMaker
    let guiMakerID = 0
    let guiMakerSlotID = 0
    let guiMakerInventoryID = 0

    return {
      title: "Интерфейс",
      width: "800px",
      btnList: [
        {
          title: "Сохранить",
          onclick(event, modal) {
            let exportList = []

            const SlotPos = {
              "extrasmallbg.png": {x:1, y:48},
              "smallbg.png": {x:1, y:-27},
              "standardbg.png": {x:-39, y:-14},
              "menubg.png":{x:-39, y:-25},
              "largebg.png": {x:-7, y:-34},
              "bgfilled.png": {x:-39, y:-44},
              "invisible.png": {x:-39, y:-44}
            }

            modal.find("#gui-maker-workspace").children().each(function() {
              let elementId = $(this).attr("gui-maker-element-id")
              let elementType = $(this).attr("gui-maker-element-type")
              let typeId = guiElement[elementType]
              let jsonValue = {}
              jsonValue.id = elementId
              jsonValue.x = $(this).attr('gui-maker-element-pos-x') || 0
              jsonValue.y = $(this).attr('gui-maker-element-pos-y') || 0

              console.log("elementType", elementType)

              if (elementType === "slot" || elementType === "slotitem" || elementType === "inventory") {
                let imageName = $("#gui-maker-workspace").css("background-image")
                imageName = imageName.slice(imageName.lastIndexOf("/")+1, imageName.length-2)
                jsonValue.x = `${jsonValue.x}+(${SlotPos[imageName].x})`
                jsonValue.y = `${jsonValue.y}+(${SlotPos[imageName].y})`
              }

              jsonValue.width = parseInt($(this).css('width'))
              jsonValue.height = parseInt($(this).css('height'))
              jsonValue.label = $(this).text()

              let modal_li_ul = le(typeId).find(e=>e.json.id===elementId)?.modal_li_ul

              let formatedComponent = formatComponent(JSON.copy(guiComponents[typeId]), jsonValue, modal_li_ul)
              exportList.push(formatedComponent)
            })
            if (le(10)[0]?.value)
              exportList.unshift( formatComponent(guiComponents[10], JSON.parse(le(10)[0].value)) )
            for (let i of [9, 8])
              if (le(i)[0]?.value)
                exportList.unshift( formatComponent(guiComponents[i], le(i)[0].value) )

            setListElements(exportList)
          }
        }
      ],
      body: [{
        type: "Html",
        getHtml$() {

          let result$ = $(`<div class="container"><div class="row"></div></div>`)

          let leftSidePanel$ = $(`<div class="col"></div>`).appendTo(result$.children())
          let topPanel$ = $("<div></div>").css("width", "100%").appendTo(leftSidePanel$)
          topPanel$.append(
            $AddButton("Кнопка", addMineBtn),
            $AddButton("Слот", addMineSlot),
            //$AddButton("Слот с предметом", addMineSlotWithItem)
            $AddButton("Строка", addMineLabel),
            $AddButton("Поле", addMineTextField),
            $AddButton("Инвентарь", addMineInventory)
          )

          function $AddButton(name, func) {
            return $(`<button class="btn btn-sm btn-primary">${name}</button>`).click(()=>{
              func()
            })
          }

          let list$ = $(`<ul class="list-group"></ul>`).appendTo(leftSidePanel$)

          let centralPanel$ = $(`<div class="col-auto"></div>`).appendTo(result$.children())
          let workspace$ = $(`<div id="gui-maker-workspace"></div>`).css({
            "background-image": `url("${ServerPath(le(8)[0].value)}")`,
            "background-repeat": "no-repeat",
            "width": "256px",
            "height": "256px",
            "display": "block",
            "margin": "0px auto"
          })
          centralPanel$.append( workspace$ )

          let rightSidePanel$ = $(`<div class="col"></div>`).appendTo(result$.children())

          let addElement = {
            "button":addMineBtn,
            "slot":addMineSlot,
            "slotitem":addMineSlotWithItem,
            "label":addMineLabel,
            "textfield":addMineTextField,
            "inventory":addMineInventory
          }

          // append elements from list
          for (let elementIndex of Object.values(guiElement) ) {
            le(elementIndex).forEach(e=>{
              console.log("elementIndex", elementIndex)
              addElement[Object.keys(guiElement).find(e=>guiElement[e]===elementIndex)](e.json)
            })
          }

          return result$

          function li$(title, id, prps={}) {
            var notShowId = false
            if (id === undefined) {
              var id = guiMakerID++
              var notShowId = true
            }
            var showId = id
            if (prps.isSlot === true) showId /= 100
            if (prps.isInventory === true) showId /= 1000
            return $(`<li class="list-group-item" gui-maker-element-id="${id}">${notShowId?"":"ID: "+showId} ${title}</li>`).css({
              "touch-action": "none",
              "user-select": "none",
              "cursor": "pointer"
            }).click(function() {
              showObjectProperties(id)
              $(this).parent().children().css({"background-color": "inherit", "color":"inherit"})
              $(this).css({"background-color": "rgb(44,44,44)", "color": "rgb(255, 255, 255)"})
            }).append(
              // delete button
              $(`<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>`)
                .click(function() {
                  if ($(this).parent().css("color") == "rgb(255, 255, 255)")
                    rightSidePanel$.empty()
                  $(this).parent().remove()
                  $(".gui-maker-element[gui-maker-element-id='"+id+"']").remove()
                  if (prps.isSlot === true)
                    guiMakerSlotID--
                  if (prps.isInventory === true)
                    guiMakerInventoryID--
                  else
                    guiMakerID--
                })
            )
          }

          function addMineBtn(args={}) {
            let {id, label, x, y, width, height} = args
            if (id === undefined)
              id = guiMakerID++
            workspace$.append( $(`<div class="gui-maker-element" gui-maker-element-type="button" gui-maker-element-id="${id}">${label || "Кнопка"}</div>`).css({
              "background-image": `url("assets/images/ButtonBackground.png")`,
              "border": "3px solid black",
              "position": "absolute",
              "text-align": "center",
              "font-size": "7px",
              "width": `${width || 30}px`,
              "height": `${height || 20}px`,
              "transform": `translate(${x}px, ${y}px)`
            }).attr({
              "gui-maker-element-pos-x": x,
              "gui-maker-element-pos-y": y
            }) )
            list$.append(li$("Кнопка", id))
          }

          function addMineSlot(args={}) {
            let {x, y, hasItem} = args
            x = parseInt(x)
            y = parseInt(y)
            let id = (guiMakerSlotID)*100
            guiMakerSlotID++
            workspace$.append( $(`<div class="gui-maker-element" gui-maker-element-type="${hasItem?"slotitem":"slot"}" gui-maker-element-id="${id}"></div>`).css({
              "background-image": `url("assets/images/Slot.png")`,
              "background-repeat": "no-repeat",
              "background-size": "100% 100%",
              "position": "absolute",
              "width": "16px",
              "height": "16px",
              "transform": `translate(${x}px, ${y}px)`
            }).attr({
              "gui-maker-element-pos-x": x,
              "gui-maker-element-pos-y": y
            }) )
            list$.append(li$("Слот", id, {isSlot:true}))
          }

          function addMineSlotWithItem(args={}) {
            args.hasItem = true
            addMineSlot(args)
          }

          function addMineLabel(args={}) {
            let {id, x, y, label, width, height} = args
            if (id === undefined)
              id = guiMakerID++
            workspace$.append($(`<div class="gui-maker-element" gui-maker-element-type="label" gui-maker-element-id="${id}">${label || "Строка"}</div>`).css({
              "text-align": "center",
              "position": "absolute",
              "width": width || 30 + 'px',
              "height": height || 20 + 'px',
              "transform": `translate(${x}px, ${y}px)`,
              "font-size": "10px",
              "color": "grey"
            }).attr({
              "gui-maker-element-pos-x": x,
              "gui-maker-element-pos-y": y
            }) )
            list$.append(li$("Строка", id))
          }

          function addMineTextField(args={}) {
            let {id, x, y, label, width, height} = args
            if (id === undefined)
              id = guiMakerID++
            workspace$.append($(`<div class="gui-maker-element" gui-maker-element-type="textfield" gui-maker-element-id="${id}"></div>`).css({
              "background-color": "black",
              "border": "2px solid white",
              "width": width || 30 + 'px',
              "height": height || 20 + 'px',
              "transform": `translate(${x}px, ${y}px)`,
              "position": "absolute"
            }).attr({
              "gui-maker-element-pos-x": x,
              "gui-maker-element-pos-y": y
            }) )
            list$.append(li$("Поле", id))
          }

          function addMineInventory(args={}) {
            let {id, x, y} = args
            x = parseInt(x)
            y = parseInt(y)
            if (id === undefined)
              id = guiMakerInventoryID*1000
            guiMakerInventoryID++
            workspace$.append($(`<div class="gui-maker-element" gui-maker-element-type="inventory" gui-maker-element-id="${id}">Инвентарь игрока</div>`).css({
              "position": "absolute",
              "transform": `translate(${x}px, ${y}px)`,
              "width": "160px",
              "height": "80px",
              "border": "2px solid white",
              "background-color": "grey"
            }).attr({
              "gui-maker-element-pos-x": x,
              "gui-maker-element-pos-y": y
            }) )
            list$.append(li$("Инвентарь", id, {isInventory:true}))
          }

          function showObjectProperties(id) {
            console.log("id", id, $('.gui-maker-element'))
            let element$ = $('.gui-maker-element').filter(function(){return $(this).attr('gui-maker-element-id') == id})
            let objectId = element$.attr('gui-maker-element-type')
            let listObject = le(0).find(e=>e.json.id===id) || {json:{}}
            const objects = {
              "button": () => [
                TextField$("Название", "Введите название", element$.text(), (result$, input$)=>element$.text(input$.val())),
                ...TransformElements()
              ],
              "slot": () => [
                ...TransformElements(true)
              ],
              "label": () => [
                TextField$("Строка", "Введите строку", element$.text(), (result$, input$)=>element$.text(input$.val())),
                ...TransformElements()
              ],
              "textfield": () => [
                ...TransformElements()
              ],
              "inventory": () => [
                ...TransformElements(true)
              ]
            }
            rightSidePanel$.empty().append(...objects[objectId]())

            function CheckBox$(title="", status=false) {
              return $(`<div class="form-check"><input type="checkbox" gui-maker-element-for-id="${id}" ${status?'checked':''} class="form-check-input"><label class="form-check-label">${title}</label></div>`)
            }

            function TextField$(title="", placeholder="", text="", onInput=()=>{}, isNumber=false, type) {
              let result$ = $(`<div class="form-group"><label>${title}</label></div>`)
              let input$ = $(`<input type="${isNumber?'number':'text'}" ${type?'gui-maker-element-for-type="'+type+'"':""} gui-maker-element-for-id="${id}" value="${text}" class="form-control" placeholder="${placeholder}">`).appendTo(result$)
              input$.on('input',()=>onInput(result$, input$))
              return result$ 
            }

            function TransformElements(withoutWidthAndHeight) {
              let result = [
                TextField$("X", "x", parseInt(element$.attr('gui-maker-element-pos-x') || 0), (result$, input$)=>{
                  element$.attr('gui-maker-element-pos-x', input$.val())
                  updatePosition()
                }, true, 'x'),
                TextField$("Y", "y", parseInt(element$.attr('gui-maker-element-pos-y') || 0), (result$, input$)=>{
                  element$.attr('gui-maker-element-pos-y', input$.val())
                  updatePosition()
                }, true, 'y')
              ]
              if (!withoutWidthAndHeight)
                result.push(
                  TextField$("Ширина", "Введите ширину элемента", parseInt(element$.css("width")), (result$, input$)=>{
                    element$.css('width', input$.val())
                  }, true),
                  TextField$("Высота", "Введите высоту элемента", parseInt(element$.css("height")), (result$, input$)=>{
                    element$.css('height', input$.val())
                  }, true)
                )
              return result
            }

            function updatePosition() {
              element$.css("transform", `translate(${element$.attr('gui-maker-element-pos-x')}px, ${element$.attr('gui-maker-element-pos-y')}px)`)
            }

          }

          function ServerPath(path) {
            return "assets/guiBackgrounds" + path.slice(path.lastIndexOf('/'))
          }

        }
      }]
    }
  }
}
