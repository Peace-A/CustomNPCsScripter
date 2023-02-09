
module.exports.findMistakeInDoPage = function findMistake(doPage$) {
  // find callers and change state of it
  let callers = doPage$.find("main.do-workspace").find("div.context-menu-caller-small")
  let mistakeLabel$ = doPage$.find("label.mistake-label")


  
  if (callers.length === 0) return null

  var hasMistake = null
  callers.each(ci=>{
    caller = callers.eq(ci)

    // callers wiyh elements not has mistakes
    if (caller.children().length === 0) hasMistake = true
    else return

    addStateHasMistake(caller.parent())
    mistakeLabel$.show()

    setTimeout(()=>{
      removeStateHasMistake(caller.parent())
      mistakeLabel$.hide()
    },2000)

  })

  return hasMistake
}

function addStateHasMistake(element$) {element$.addClass("has-mistake")}
function removeStateHasMistake(element$) {element$.removeClass("has-mistake")}
