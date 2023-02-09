const { ElementType, ReturnsType } = require("../ContextMenuConstants")

module.exports = {
  event: {
    title: "События",
    children: [
      {
        title: "В начале",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "В начале",
          code: "function init(event) {:[itemscripted:]}"
        }
      },
      {
        title: "Ежесекундно",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Ежесекундно",
          code: "function tick(event) {:[itemscripted:]}"
        }
      },
      {
        title: "При правом клике игрока предметом",
        children: [
          {
            title: "в воздух",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При правом клике в воздух",
              code: "function interact(event) {if (event.type == 0) { :[player itemscripted:] } }"
            }
          },
          {
            title: "в существо",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При правом клике в существо",
              code: "function interact(event) {if (event.type == 1) { :[player target-entity itemscripted:] } }"
            }
          },
          {
            title: "в блок",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При правом клике в блок",
              code: "function interact(event) {if (event.type == 2) { :[player target-block itemscripted:] } }"
            }
          }
        ]
      },
      {
        title: "При левом клике игрока предметом",
        children: [
          {
            title: "в воздух",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При левом клике в воздух",
              code: "function attack(event) {if (event.type == 0) { :[player itemscripted:] } }"
            }
          },
          {
            title: "в существо",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При левом клике в существо",
              code: "function attack(event) {if (event.type == 1) { :[player target-entity itemscripted:] } }"
            }
          },
          {
            title: "в блок",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При левом клике в блок",
              code: "function attack(event) {if (event.type == 2) { :[player target-block itemscripted:] } }"
            }
          }
        ]
      },
      {
        title: "Когда предмет кто-то бросает",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда предмет кто-то бросает",
          code: "function toss(event) {:[player itemscripted:]}"
        }
      },
      {
        title: "Когда предмет кто-то подбирает",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда предмет кто-то подбирает",
          code: "function pickedUp(event) {:[player itemscripted:]}"
        }
      }
    ]
  }
}
