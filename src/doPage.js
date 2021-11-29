const $CopyButton = require("./CopyButton")
const $MainScreen = require("./MainScreen")
const $WorkSpace  = require("./Workspace")

module.exports.addPage = () => {
  $("#main-page-viewer").append($Page())
}

module.exports.HEADER_HEIGHT = 31

function $Page() { return $Skin().append($Header(),$WorkSpace()) }

function $Skin() { return $(`<div class="doPage col"></div>`) }
function $Header() { return $(`<header class="d-flex justify-content-between p-1 border"></header>`).append($CopyButton(), $MistakeLabel(), $CloseButton()) }

function $MistakeLabel() {
  return $(`<label class="mistake-label">Заполните все поля</label>`).hide()
}

function $CloseButton() {
  let $Btn = $(`<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>`)

  $Btn.click(e=>{

    let doPage = $Btn.parent().parent()
    let doPageNumber = $Btn.parent().parent().parent().children().length
    if ( doPageNumber > 1 ) {
      doPage.remove()
      window.onresize()
    }
    else
      doPage.find("main.do-workspace").text("").append($MainScreen())
  })

  return $Btn
}
