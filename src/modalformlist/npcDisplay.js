const {createGetter, getNewList, defaultElements} = require("../NpcTabsTools")

module.exports= {
  type: "bgImage",
  createArgs({ list, setListElements }) {
    let displayComponents = JSON.copy( require("../contextmenulist/npc-display.js") )
    let le = createGetter(list, displayComponents)
    return {
      imageURL: "images/Display.png",
      elementList: [
        defaultElements.ExitButton(),
        defaultElements.SaveButton(setListElements),
        defaultElements.AiLink(list, setListElements),
        defaultElements.StatsLink(list, setListElements),
        {
          id: le(0).header,
          type: "textInput",
          x: 100,
          y: 42,
          width: 400,
          height: 40,
          invisible: true,
          value: le(0).value
        },
        {
          id: le(1).header,
          type: "textInput",
          x: 100,
          y: 88,
          width: 400,
          height: 40,
          invisible: true,
          value: le(1).value
        },
        {
          id: le(2).header,
          type: "textInput",
          x: 160,
          y: 180,
          width: 400,
          height: 40,
          invisible: true,
          hided: true,
          value: le(2).value
        },
        {
          id: le(3).header,
          type: "textInput",
          x: 160,
          y: 180,
          width: 400,
          height: 40,
          invisible: true,
          hided: true,
          value: le(3).value
        },
        {
          id: le(4).header,
          type: "textInput",
          x: 160,
          y: 180,
          width: 400,
          height: 40,
          invisible: true,
          value: le(4).value
        },
        {
          type: "stageButton",
          x: 566,
          y: 180,
          width: 80,
          height: 40,
          title: "Текстура",
          stages: [
            {id: le(4).header, title: "Текстура"},
            {id: le(3).header, title: "Игрок"},
            {id: le(2).header, title: "URL"}
          ]
        },
        {
          id: le(5).header,
          type: "choiceButton",
          x: 234,
          y: 313,
          width: 112,
          height: 50,
          list: Object.keys( displayComponents[5].element.li_list ),
          value: le(5).value
        },
        {
          id: le(6).header,
          type: "choiceButton",
          x: 234,
          y: 360,
          width: 112,
          height: 50,
          list: Object.keys( displayComponents[6].element.li_list ),
          value: le(6).value
        },
        {
          id: le(7).header,
          type: "choiceButton",
          x: 108,
          y: 407,
          width: 244,
          height: 45,
          invisible: false,
          list: Object.keys( displayComponents[7].element.li_list ),
          value: le(7).value
        },
        {
          id: le(8).header,
          type: "textInput",
          x: 406,
          y: 134,
          width: 80,
          height: 40,
          invisible: true,
          value: le(8).value
        },
        {
          id: le(9).header,
          type: "choiceButton",
          x: 494,
          y: 38,
          width: 244,
          height: 46,
          invisible: false,
          list: Object.keys( displayComponents[9].element.li_list ),
          value: le(9).value
        },
        {
          id: le(10).header,
          type: "textInput",
          x: 160,
          y: 226,
          width: 400,
          height: 40,
          invisible: true,
          value: le(10).value
        },
        {
          id: le(11).header,
          type: "textInput",
          x: 160,
          y: 272,
          width: 400,
          height: 40,
          invisible: true,
          value: le(11).value
        },
        {
          id: le(12).header,
          type: "choiceButton",
          x: 423,
          y: 408,
          width: 250,
          height: 45,
          list: Object.keys( displayComponents[14].element.li_list ),
          value: le(12).value
        },
        /*{
          id: le(13).header,
          type: "textInput",
          x: 100,
          y: 45,
          width: 400,
          height: 35,
          invisible: true,
          value: le(13).value
        },    */
        {
          id: le(14).header,
          type: "choiceButton",
          x: 554,
          y: 360,
          width: 112,
          height: 50,
          list: Object.keys( displayComponents[14].element.li_list ),
          value: le(14).value
        },
        /*        {
          id: le(15).header,
          type: "textInput",
          x: 100,
          y: 45,
          width: 400,
          height: 35,
          invisible: true,
          value: le(15).value
        },       */
        {
          id: le(16).header,
          type: "textInput",
          x: 440,
          y: 318,
          width: 120,
          height: 40,
          invisible: true,
          value: le(16).value
        }
      ],
      unvisibleBackground: true
    }
  }
}

