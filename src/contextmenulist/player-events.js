const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  event: {
    title: "События",
    children: [
      {
        title: "В начале",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "В начале",
          code: "function init(event) {[player api]}"
        }
      },
      {
        title: "Ежесекундно",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Ежесекундно",
          code: "function tick(event) {[player api]}"
        }
      },
      {
        title: "При правом клике",
        children: [
          {
            title: "в воздух",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При правом клике в воздух",
              code: "function interact(event) {if (event.type == 0) { [player api] } }"
            }
          },
          {
            title: "в существо",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При правом клике в существо",
              code: "function interact(event) {if (event.type == 1) { [player api target-entity] } }"
            }
          },
          {
            title: "в блок",
            element: {
              type: ElementType.UL,
              cannot_be_inherits: true,
              header: "При правом клике в блок",
              code: "function interact(event) {if (event.type == 2) { [player api target-block] } }"
            }
          }
        ]
      },
      {
        title: "Когда ломает блок",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда ломает блок",
          code: "function broken(event) {[player api exp block]}"
        }
      },
      {
        title: "Когда бросает предмет",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда бросает предмет",
          code: "function toss(event) {[player api item-itemstack]}"
        }
      },
      {
        title: "Когда подбирает предмет",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда подбирает предмет",
          code: "function pickedUp(event) {[player api item-itemstack]}"
        }
      },
      {
        title: "Когда умер",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда умер",
          code: "function died(event) {[player api source-entity]}"
        }
      },
      {
        title: "Когда убил кого-то",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда убил кого-то",
          code: "function kill(event) {[player api entity-entitylivingbase]}"
        }
      },
      {
        title: "Когда получил урон",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда получил урон",
          code: "function damaged(event) {[player api source-entity damage-float]}"
        }
      },
      {
        title: "Когда ударил кого-то",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда ударил кого-то",
          code: "function damagedEntity(event) {[player api target-entity damage-float]}"
        }
      },
      {
        title: "Когда вистрелил",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда вистрелил",
          code: "function rangedLaunched(event) {[player api]}"
        }
      },
      {
        title: "Когда зашёл на сервер",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда зашёл на сервер",
          code: "function login(event) {[player api]}"
        }
      },
      {
        title: "Когда вышёл с сервера",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда вышёл с сервера",
          code: "function logout(event) {[player api]}"
        }
      },
      {
        title: "Когда пишет что-то в чат",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда пишет что-то в чат",
          code: "function chat(event) {[player api message-string]}"
        }
      }
    ]
  }
}

module.exports = result
