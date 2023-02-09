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
          only_one: true,
          header: "В начале",
          code: "function init(event) {:[npc:]}"
        }
      },
      {
        title: "Ежесекундно",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Ежесекундно",
          code: "function tick(event) {:[npc:]}"
        }
      },
      {
        title: "Когда взаимодействует игрок",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда взаимодействует игрок",
          code: "function interact(event) {:[npc player:]}"
        }
      },
      {
        title: "Когда получает урон",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда получает урон",
          code: "function damaged(event) {:[npc source-entity:]}"
        }
      },
      {
        title: "Когда умер",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда умер",
          code: "function died(event) {:[npc source-entity:]}"
        }
      },
      {
        title: "Когда нанёс урон",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда нанёс урон",
          code: "function meleeAttack(event) {:[npc target-entitylivingbase:]}"
        }
      },
      {
        title: "Когда выстрелел",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда выстрелел",
          code: "function rangedLaunched(event) {:[npc target-entitylivingbase:]}"
        }
      },
      {
        title: "Когда увидил врага",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда увидил врага",
          code: "function target(event) {:[npc entity-entitylivingbase:]}"
        }
      },
      {
        title: "Когда потерял из виду врага",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда потерял из виду врага",
          code: "function targetLost(event) {:[npc target-entitylivingbase:]}"
        }
      },
      {
        title: "Когда убил кого-то",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "Когда убил кого-то",
          code: "function kill(event) {:[npc entity-entitylivingbase:]}"
        }
      },
      {
        title: "При прикосновении",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          only_one: true,
          header: "При прикосновении",
          code: "function collide(event) {:[npc entity-entity:]}"
        }
      }
    ]
  }
}
