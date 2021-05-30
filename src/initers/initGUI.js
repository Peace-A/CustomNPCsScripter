const $ = require("jquery")
const ClipboardJS = require("clipboard")

module.exports = () => {
  $(() => {

    // init resizer`s main-rows
    ResizerOfMainRows()
    window.onresize = ResizerOfMainRows
    function ResizerOfMainRows() {
        $("#main-rows").css("height", window.innerHeight - document.getElementById("header").clientHeight)
    }

    // init hide button for clipboard
    new ClipboardJS('#copy-btn')

    // init log modal
    $("#log-caller").click(()=>$("#logModalForm").show())
    $("#modal-exit-btn").click(()=>$("#logModalForm").hide())

  })
}
