const interact = require("interactjs")

module.exports = () => {

  interact(".gui-maker-element")
    .draggable({
      listeners: {
        move(event) {
          console.log("move")
          var element$ = $(event.target)
          var x = parseFloat(element$.attr('gui-maker-element-pos-x')) || 0
          var y = parseFloat(element$.attr('gui-maker-element-pos-y')) || 0

          x += event.dx
          y += event.dy

          if (x < 0 || y < 0 || x > 256 || y > 256) return

          element$.css('transform', `translate(${parseInt(x)}px, ${parseInt(y)}px)`)

          element$.attr('gui-maker-element-pos-x', x)
          element$.attr('gui-maker-element-pos-y', y)

          $(`input[gui-maker-element-for-id="${element$.attr("gui-maker-element-id")}"][gui-maker-element-for-type="x"]`).val(x)
          $(`input[gui-maker-element-for-id="${element$.attr("gui-maker-element-id")}"][gui-maker-element-for-type="y"]`).val(y)
        }
      }
    })
    /*    .resizable({
      edges: { left: true, right: true, bottom: true, top: true },
      listeners: {
        mode(event) {
          var element$ = $(event.target)

          var x = parseFloat(element$.attr('gui-maker-element-pos-x')) || 0
          var y = parseFloat(element$.attr('gui-maker-element-pos-y')) || 0

          x += event.deltaRect.left
          y += event.deltaRect.top

          element$.css({
            'width': event.rect.width + 'px',
            'height': event.rect.height + 'px'
          })

          element$.css('transform', `translate(${parseInt(x)}px, ${parseInt(y)}px)`)

          element$.attr('gui-maker-element-pos-x', x)
          element$.attr('gui-maker-element-pos-y', y)

        }
      }
    })*/

}
