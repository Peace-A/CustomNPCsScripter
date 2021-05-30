const interact = require("interactjs")
module.exports = () => {
  interact("#trash").dropzone({
    accept: ".doElement",
    ondrop( { relatedTarget } ) {
        $(relatedTarget).remove()
        $("#trash").hide()
    },
    ondragenter() {
        $("#trash").css("opacity", "1")
    },
    ondragleave() {
        $("#trash").css("opacity", "0.5")
    },
    ondropactivate() {
        $("#trash").show().css("opacity", "0.5")
    },
    ondropdeactivate() {
        $("#trash").hide()
    }

  })
}
