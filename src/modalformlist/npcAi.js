const {createGetter, defaultElements} = require("../NpcTabsTools")

module.exports = {
  type: "bgImage",
  createArgs({ list, setListElements }) {
    let aiComponents = JSON.copy( require("../contextmenulist/npc-ai.js") )
    let le = createGetter(list, aiComponents)
    return {
      imageURL: "images/Ai.png",
      elementList: [
        defaultElements.ExitButton(),
        defaultElements.SaveButton(setListElements),
        defaultElements.DisplayLink(list, setListElements),
        defaultElements.StatsLink(list, setListElements),
        {
          id: le(2).header,
          type: "choiceButton",
          x: 162,
          y: 52,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[2].element.li_list ),
          value: le(2).value
        },
        {
          id: le(12).header,
          type: "choiceButton",
          x: 162,
          y: 102,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[12].element.li_list ),
          value: le(12).value
        },
        {
          id: le(13).header,
          type: "choiceButton",
          x: 162,
          y: 152,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[13].element.li_list ),
          value: le(13).value
        },
        {
          id: le(14).header,
          type: "choiceButton",
          x: 162,
          y: 202,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[14].element.li_list ),
          value: le(14).value
        },
        {
          id: le(6).header,
          type: "choiceButton",
          x: 162,
          y: 252,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[6].element.li_list ),
          value: le(6).value
        },
        {
          id: le(15).header,
          type: "choiceButton",
          x: 450,
          y: 52,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[15].element.li_list ),
          value: le(15).value
        },
        {
          id: le(1).header,
          type: "choiceButton",
          x: 450,
          y: 102,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[1].element.li_list ),
          value: le(1).value
        },
        {
          id: le(16).header,
          type: "choiceButton",
          x: 450,
          y: 152,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[16].element.li_list ),
          value: le(16).value
        },
        {
          id: le(17).header,
          type: "choiceButton",
          x: 450,
          y: 302,
          width: 137,
          height: 44,
          invisible: false,
          list: Object.keys( aiComponents[17].element.li_list ),
          value: le(17).value
        },
      ],
      unvisibleBackground: true
    }
  },
}
