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
          code: "function init(event) {[npc api]}"
        }
      },
      {
        title: "Ежесекундно",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Ежесекундно",
          code: "function tick(event) {[npc api]}"
        }
      },
      {
        title: "Когда взаимодействует игрок",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда взаимодействует игрок",
          code: "function interact(event) {[npc api player]}"
        }
      },
      {
        title: "Когда получает урон",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда получает урон",
          code: "function damaged(event) {[npc api source-entity]}"
        }
      },
      {
        title: "Когда умер",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда умер",
          code: "function died(event) {[npc api source-entity]}"
        }
      },
      {
        title: "Когда нанёс урон",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда нанёс урон",
          code: "function meleeAttack(event) {[npc api target-entitylivingbase]}"
        }
      },
      {
        title: "Когда выстрелел",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда выстрелел",
          code: "function rangedLaunched(event) {[npc api target-entitylivingbase]}"
        }
      },
      {
        title: "Когда увидил врага",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда увидил врага",
          code: "function target(event) {[npc api entity-entitylivingbase]}"
        }
      },
      {
        title: "Когда потерял из виду врага",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда потерял из виду врага",
          code: "function targetLost(event) {[npc api target-entitylivingbase]}"
        }
      },
      {
        title: "Когда убил кого-то",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда убил кого-то",
          code: "function kill(event) {[npc api entity-entitylivingbase]}"
        }
      },
      {
        title: "При прикосновении",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "При прикосновении",
          code: "function collide(event) {[npc api entity-entity]}"
        }
      }
    ]
  }
}
