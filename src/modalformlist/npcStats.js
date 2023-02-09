const {createGetter, getNewList, defaultElements} = require("../NpcTabsTools")

module.exports= {
  type: "bgImage",
  createArgs({ list, setListElements }) {
    let statsComponents = JSON.copy( require("../contextmenulist/npc-stats.js") )
    let le = createGetter(list, statsComponents)
    return {
      imageURL: "images/Stats.png",
      elementList: [
        defaultElements.ExitButton(),
        defaultElements.SaveButton(setListElements),
        defaultElements.AiLink(list, setListElements),
        defaultElements.DisplayLink(list, setListElements),
        {
          id: le(0).header,
          type: "textInput",
          x: 170,
          y: 54,
          width: 100,
          height: 36,
          invisible: true,
          value: le(0).value
        },
        {
          id: le(17).header,
          type: "textInput",
          x: 440,
          y: 54,
          width: 100,
          height: 36,
          invisible: true,
          value: le(17).value
        },
        {
          id: le(13).header,
          type: "choiceButton",
          x: 704,
          y: 52,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[13].element.li_list ),
          value: le(13).value
        },
        {
          id: le(10).header,
          type: "choiceButton",
          x: 158,
          y: 320,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[10].element.li_list ),
          value: le(10).value
        },
        {
          id: le(9).header,
          type: "choiceButton",
          x: 158,
          y: 364,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[9].element.li_list ),
          value: le(9).value
        },
        {
          id: le(7).header,
          type: "choiceButton",
          x: 158,
          y: 408,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[7].element.li_list ),
          value: le(7).value
        },
        {
          id: le(11).header,
          type: "choiceButton",
          x: 428,
          y: 320,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[11].element.li_list ),
          value: le(11).value
        },
        {
          id: le(8).header,
          type: "choiceButton",
          x: 428,
          y: 364,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[8].element.li_list ),
          value: le(8).value
        },
        {
          id: le(12).header,
          type: "choiceButton",
          x: 428,
          y: 408,
          width: 124,
          height: 44,
          invisible: true,
          list: Object.keys( statsComponents[12].element.li_list ),
          value: le(12).value
        },
        {
          id: le(6).header,
          type: "textInput",
          x: 710,
          y: 322,
          width: 112,
          height: 40,
          invisible: true,
          value: le(6).value
        },
        {
          id: le(5).header,
          type: "textInput",
          x: 710,
          y: 366,
          width: 112,
          height: 40,
          invisible: true,
          value: le(5).value
        }
      ],
      unvisibleBackground: true
    }
  }
}
