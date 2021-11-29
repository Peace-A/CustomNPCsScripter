const interact = require("interactjs")
const $ = require("jquery")

module.exports = () => {

  var parent$
  interact(".doElement").draggable({
    listeners: {
      start(event) {
        
        parent$ = $(event.target).parent()

        // turn doElement into floated doElement
        $(event.target).css({
          top: event.clientY,
          left: event.rect.left,
          //width: event.target.offsetWidth,
          position: "absolute"
        })
        .appendTo($("body"))

      },
      move( { target, clientY } ) {

        // change position of floated doElement
        $(target).css({
          top: clientY
        })

      },
      end( { target, relatedTarget, clientY } ) {

        // remove element in the top of browser
        if ( clientY < 0 )
          $(target).remove()
        // come back element if is was added in not use area
        else if ( relatedTarget === null )
          turnIntoRelative($(target)).appendTo(parent$)

      }
    }
  })

  let isIncludesCategory
  interact(".doElement").dropzone({
    accept: ".doElement",
    ondragenter( { target, relatedTarget } ) {
      
      if ( $(target).parent().hasClass("context-menu-caller-small") ) 
        return
        
      isIncludesCategory = includesCategory($(target).parent(), $(relatedTarget))
      if ( isIncludesCategory ) {
        setFantom( $(target), createFantom( $(relatedTarget) ) )
        setOpacityTo0( $(relatedTarget) )
      } else setCannotAppendMode( $(target).parent() )

    },
    ondragleave( { target, relatedTarget } ) {
      
      if ( $(target).parent().hasClass("context-menu-caller-small") ) 
        return
      
      if (isIncludesCategory) {
        setOpacityTo1( $(relatedTarget) )
        removeFantom( $(target) )
      } else setNormalMode( $(target).parent() )
    },
    ondrop( { target, relatedTarget } ) {
      
      if ( $(target).parent().hasClass("context-menu-caller-small") ) 
        return
        
      if (isIncludesCategory) {
        getFantom( $(target) ).remove()
        turnIntoRelative($(relatedTarget)).appendTo( $(target) )
      } else {
        // come back element
        turnIntoRelative($(relatedTarget)).appendTo(parent$)
        setNormalMode( $(target).parent() )
      }
    }



  })

  // append system of elements to children
  var ulsFantom
  let listDropzoneProper = {
    accept: ".doElement",
    ondragenter( { target, relatedTarget } ) {
      if ( includesCategory( $(target), $(relatedTarget) ) ) {
        ulsFantom = createFantom( $(relatedTarget) ) 
        $(target).append(ulsFantom) 
        setOpacityTo0( $(relatedTarget) )
      } else setCannotAppendMode( $(target) )
      

    },
    ondragleave( { target, relatedTarget } ) {
      setNormalMode( $(target) )
      if ( !ulsFantom ) return
      setOpacityTo1( $(relatedTarget) )
      ulsFantom.remove()
      ulsFantom = null
    },
    ondrop( { target, relatedTarget } ) {
      setNormalMode( $(target) )
      if (!ulsFantom) {
        turnIntoRelative($(relatedTarget)).appendTo(parent$)
      } else {
        turnIntoRelative($(relatedTarget)).appendTo(ulsFantom.parent())
        setOpacityTo1($(relatedTarget))
        ulsFantom.remove()
      }
      ulsFantom = null
    }
  }
  interact(".doElement>ul.context-menu-caller-small").dropzone(listDropzoneProper)
  interact(".do-workspace").dropzone(listDropzoneProper)
  

  // append system of elements to small-boxes in elements
  var boxsFantom
  interact(".context-menu-caller-small").dropzone({
    accept: ".doElement",
    ondragenter( { target, relatedTarget } ) {
      
      if ( $(target).children().length === 0 ) {
        if ( includesCategory( $(target), $(relatedTarget) ) ) {
          boxsFantom = createFantom($(relatedTarget))
          boxsFantom.css("width", "inherit")
          $(target).append( boxsFantom )
          setOpacityTo0( $(relatedTarget) )
        } else setCannotAppendMode( $(target) )
      }

    },
    ondragleave( { target, relatedTarget } ) {
      setNormalMode( $(target) )
      if ( !boxsFantom ) return
      setOpacityTo1( $(relatedTarget) )
      boxsFantom.remove()
    },
    ondrop( { target, relatedTarget } ) {
      setNormalMode( $(target) )
      if ( !boxsFantom )

        void function appendAfterRightParent(target$) {
          let parent$ = target$.parent().parent()
          if ( parent$.parent().hasClass("context-menu-caller-small") )
            appendAfterRightParent(parent$.parent())
          else
            parent$.after( turnIntoRelative($(relatedTarget)) ) 
        }( $(target) )

      else {
        reverseFantom( boxsFantom )
        boxsFantom = null
        $(relatedTarget).remove()
      }

    }
})

}

function setOpacityTo0( target$ ) { target$.css("opacity", "0") }
function setOpacityTo1( target$ ) { target$.css("opacity", "1") }

function getFantom( target$ ) { return target$.next() }
function removeFantom( target$ ) { target$.next().remove() }
function setFantom( target$, fantom$ ) { target$.after( fantom$ ) }

function reverseFantom( target$ ) { turnIntoRelative( target$ ).css("border", "none") } 
function createFantom( target$ ) { return turnIntoRelative( target$.clone() ).css("border", "2px solid white") }

function turnIntoRelative( target$ ) { return target$.css({ position: "relative", top: "0", left: "0" }) }

function includesCategory( target$, relatedTarget$ ) { 
  
  if (relatedTarget$.attr("cannot-inherits-bool") === "true")
    var contextMenuData = target$.attr("context-menu-data")
  else if (!target$.is("ul"))
    var contextMenuData = getGlobalContextmenudata( target$.parent().parent().parent() ).concat( target$.attr("context-menu-data").split(' ') ).concat( target$.attr("element-category") )
  else
    var contextMenuData = getGlobalContextmenudata( target$ )
  
  if (
    contextMenuData.includes(relatedTarget$.attr("element-category"))
    && (!relatedTarget$.attr("returns-type") || contextMenuData.includes(relatedTarget$.attr("returns-type")) )
  )
    return true
  else 
    return false
}

function setCannotAppendMode( target$ ) { target$.addClass("cannot-append") }
function setNormalMode( target$ ) { target$.removeClass("cannot-append") }

function getGlobalContextmenudata( target$ ) {
  let result = []
  if (target$.attr === undefined) return result
  if (target$.attr("context-menu-data") !== undefined) {
    result = target$.attr("context-menu-data").split(' ').concat(result)
    result = getGlobalContextmenudata(target$.parent().parent()).concat(result)
  }
  return result
}

