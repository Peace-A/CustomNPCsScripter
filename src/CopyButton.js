const $ = require("jquery")
const { findMistakeInDoPage } = require("./FinderMistakesInDoCode")
const { UIElements } = require("./UIElements")

module.exports = function $CopyButton() {

  let $Btn = $SkinBtn()

  $Btn.click(e=>{
    let doPage$ = $Btn.parent().parent()
    
    if (findMistakeInDoPage(doPage$) !== null)
      return

    var needFunctionList = []
    let codeResult = ""
    let elements$List = doPage$.find("main.do-workspace").children()
    for (let elementIndex = 0; elementIndex < elements$List.length;elementIndex++)
      codeResult += getCodeFromElement($(elements$List[elementIndex])) + ";\n"

    // add nedded function to code
    for (const funcName of needFunctionList) {
      var func = require(`./functionlist/${funcName}`)
      if (func.end !== undefined)
        codeResult += "\n" + func.end + "\n"
      if (func.start !== undefined)
        codeResult = "\n" + func.start+ "\n" + codeResult 
    }
        
    console.log(codeResult)
    $Btn.attr("data-clipboard-text", codeResult)


    function getCodeFromElement( element$ ) {
        
      // get element`s code
      let code = element$.attr("output-code");

      if (code === undefined) {
        console.log(element$)
        throw new Error("element do not has code")
      }

      // load input`s value
      if ( code.indexOf("<>") !== -1 ) {
        let extenderString = element$.find("input").eq(0).val()
        if (!extenderString)
          extenderString = element$.find("input").eq(0).attr("value")

        code = replaceString("<>", extenderString, code) 
      }
      
      // load header`s code
      if ( code.indexOf("{}") !== -1 ) {
          
        // get small caller elements 
        let element$List = element$.find("header").eq(0).children();

        for (let elementIndex = 0;elementIndex < element$List.length;elementIndex++) {
          let headerElement$ = $(element$List[elementIndex])

          if (headerElement$.hasClass("context-menu-caller-small")) 
            var extenderString = getCodeFromElement(headerElement$.children())
          else if (headerElement$.hasClass("ui-element")) 
            var extenderString = UIElements[headerElement$.attr("name")].getCode(headerElement$.children())

          code = replaceString("{}", extenderString, code)
        }
        
      }

      console.log("code", code)
      
      // load children`s code
      if ( code.indexOf(":[") !== -1 && code.indexOf(':]') !== -1 ) {
        
        var element$List = element$.find("ul.context-menu-caller").eq(0).children()

        // if it is list-element load code of list
        if ( element$List.length === 0 || element$.find("ul.doElement-list").eq(0).parent().is(element$))
          var element$List = element$.find("ul.doElement-list").eq(0).children()

        let extenderString = "";
        for (let elementIndex = 0;elementIndex < element$List.length;elementIndex++)
          extenderString += getCodeFromElement( $(element$List[elementIndex])) + ";\n"
        
        code = replaceString(code.slice( code.indexOf(':['), code.indexOf(':]')+2 ),  extenderString, code)
      }

      code = element$.attr("output-pre-code") + code

      // add needed functions to list
      let needFunctionListHTMLAttribute = element$.attr("need-function-list")
      if (needFunctionListHTMLAttribute) 
        needFunctionListHTMLAttribute.split(",").forEach(funcName=>{
          if (!needFunctionList.includes(funcName))
            needFunctionList.push(funcName)
        })
      
      return code
    }

  })

  return $Btn 
}

function $SkinBtn() { return $(`<button class="btn btn-sm btn-success copy-btn">Копировать</button>`) }


function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
      return fullS
    }
  }
  return fullS
}



