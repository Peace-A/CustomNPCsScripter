
let dropdownNumber = 0
module.exports = function Dropdown(args) {
  let result$ = $(`<div class="dropdown"></div>`)
  let dropdownID = `dropdownMenuButton${dropdownNumber}` 
  dropdownNumber++

  // add button to element
  let button$ = $(`<button class="${args.buttonClassCSS || "btn btn-sm btn-secondary"} dropdown-toggle ui-element-list" type="button" >${args.title || args.value || ""}</button>`).on("click", () => {
    if (ul$.is(":hidden"))
      ul$.show()
    else
      ul$.hide()
  }) 
  if (args.size !== undefined)
    button$.css({width:args.size.width, height:args.size.height})
  result$.append( button$ )

  if (args.value !== undefined)
    result$.attr("selected-element-name", args.value)

  // add ul to element
  var ul$ = $(`<ul class="dropdown-menu ${args.dropdownClassCSS || ""}" id="${dropdownID}"></ul>`)
  for (let elementName of args.list) 
    ul$.append($(`<li><a class="dropdown-item ${args.dropdownItemClassCSS || ""}">${elementName}</a></li>`).on("click", () => {
      result$.attr("selected-element-name", elementName.slice())
      button$.text(elementName)
      if (args.onchange)
        args.onchange(elementName.slice())
      ul$.hide()
    })) 
  result$.append(ul$)
  return result$
}
