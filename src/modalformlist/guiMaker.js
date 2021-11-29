const {createGetter, formatComponent, guiMaker} = require("../ListGuiTools")
const ModalForm = require("../ModalForm")

module.exports = {
  type: "simple",
  createArgs({ list, setListElements }) {
    let guiComponents = JSON.copy( require("../contextmenulist/gui.js") )
    let le = createGetter(list, guiComponents)
    let { convertList } = guiMaker

    if (!le(8).value)
      return {
        title: "Выберете фон вашего интерфейса",
        body: [{type: "Html", getHtml$() {
          var image = $(`<img id="backgroundGUIImage" src="assets/guiBackgrounds/invisible.png" >`)
          var btnList = [
            BtnImageSetter("очень маленький", "assets/guiBackgrounds/extrasmallbg.png"),
            BtnImageSetter("маленький", "assets/guiBackgrounds/smallbg.png"),
            BtnImageSetter("обычний", "assets/guiBackgrounds/standardbg.png"),
            BtnImageSetter("меню", "assets/guiBackgrounds/menubg.png"),
            BtnImageSetter("большой", "assets/guiBackgrounds/largebg.png"),
            BtnImageSetter("очень большой", "assets/guiBackgrounds/bgfilled.png"),
            BtnImageSetter("невидимый", "assets/guiBackgrounds/invisible.png")
          ]

          var btnNext = $(`<button class="btn btn-success">Далее</button>`).click(()=>{
            var src = CustomNpcsPath($("#backgroundGUIImage").attr("src"))
            let localList = []
            localList.push( { header: le(8).header, value: src } )
            formatComponent(guiComponents[8], src)
            let sizeJson = {
              width: image[0].clientWidth,
              height: image[0].clientHeight
            }
            // remove size element
            list = list.filter(e=>e.header!==le(10).header)
            localList.push( { header: le(10).header, value: JSON.stringify(sizeJson), json: sizeJson} )
            formatComponent(guiComponents[10], sizeJson)
            setListElements(convertList(localList, guiComponents))
            list.push(...localList)
            ModalForm.open("guiMakerStudio", {list, setListElements})
          })

          return $("<main></main>").append(image, $("<br>"), ...btnList, btnNext)

          function CustomNpcsPath(path) {
            return "customnpcs:textures/gui" + path.slice(path.lastIndexOf('/'))
          }

          function BtnImageSetter(title, imageUrl) { 
            return $(`<button class="btn btn-primary m-2">${title}</button>`).
              click(()=>$("#backgroundGUIImage").attr("src", imageUrl))
          }
        }}],
      }
    else
      return require("./guiMakerStudio").createArgs({list, setListElements})

  }
}
