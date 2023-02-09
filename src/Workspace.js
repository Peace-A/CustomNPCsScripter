const $MainScreen = require("./MainScreen")
const { createContextMenuByIdList } = require("./ContextMenu.js")

module.exports = function $WorkSpace() {
  let skin$ = $Skin().append($MainScreen())

  skin$.on("contextmenu", function (event) {

    if (!event.target.getAttribute("context-menu-data"))
      return false
        
    $("#context-menu").css({
        top: event.clientY,
        left: event.clientX,
        display: "block"
    })
    
    $("#context-menu").html(null)
    
    let idList = event.target.getAttribute("context-menu-data").split(' ')
    let contextMenu = createContextMenuByIdList(idList, {target$: $(event.target)})
    contextMenu.target$ = $(event.target)
    $("#context-menu").html(contextMenu.getHTML()).menu()
    
    return false
  }).on("click", function () {
    $("#context-menu").hide()
  })

  return skin$
}

function $Skin() { return $(`<main class="h-100 overflow-auto border main-row do-workspace context-menu-caller" context-menu-data="api"></main>`) }
