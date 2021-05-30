const $ = require("jquery")
 
module.exports = () => $("#copy-btn").click(function ( ) {
    let codeResult = ""
    let elements$List = $(".main-row").children()
    for (let elementIndex = 0; elementIndex < elements$List.length;elementIndex++)
        codeResult += getCodeFromElement($(elements$List[elementIndex])) + ";\n"
        
    console.log(codeResult)
    $("#copy-btn").attr("data-clipboard-text", codeResult).click();
})

function getCodeFromElement( element$ ) {
    
  // get element`s code
  let code = element$.attr("output-code");

  // load input`s value
  if ( code.indexOf("<>") !== -1 ) {
    let extenderString = element$.find("input").eq(0).val()
    code = replaceString("<>", extenderString, code) 
  }
  
  // load header`s code
  if ( code.indexOf("{}") !== -1 ) {
      
    // get small caller elements 
    let element$List = element$.find("header").eq(0).children();

    for (let elementIndex = 0;elementIndex < element$List.length;elementIndex++)
      if ($(element$List[elementIndex]).is("div")) {
        let extenderString = getCodeFromElement($(element$List[elementIndex]).children())
        code = replaceString("{}", extenderString, code)
      }
    
  }
  
  // load children`s code
  if ( code.indexOf("[") !== -1 && code.indexOf(']') !== -1 ) {
      
      let element$List = element$.find("ul").eq(0).children();
      
      let extenderString = "";
      for (let elementIndex = 0;elementIndex < element$List.length;elementIndex++)
          extenderString += getCodeFromElement( $(element$List[elementIndex])) + ";\n";
      
      code = replaceString(code.slice( code.indexOf('['), code.indexOf(']')+1 ),  extenderString, code);
  }
    
  return code ;
    
}

function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
      return fullS
    }
  }
  return fullS
}


