"use strict"

const $ = require("jquery")
const { createContextMenuByIdList } = require("../ContextMenu.js")

module.exports = () => {
  $("#context-menu").menu()
  $(".context-menu-caller").on("contextmenu", function (event) {

    console.log(event.target.getAttribute("context-menu-data"))

    if (!event.target.getAttribute("context-menu-data"))
      return 
      
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
}
