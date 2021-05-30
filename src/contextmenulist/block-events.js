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
          code: "function init(event) {[blockscripted api]}"
        }
      },
      {
        title: "Ежесекундно",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Ежесекундно",
          code: "function tick(event) {[blockscripted api]}"
        }
      },
      {
        title: "Когда взаимодействует игрок",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда взаимодействует игрок",
          code: "function interact(event) {[blockscripted api player]}"
        }
      },
      {
        title: "Когда получает редстоун сигнал",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда получает редстоун сигнал",
          code: "function redstone(event) {[redstonepower-number api blockscripted]}"
        }
      },
      {
        title: "Когда кто-то падает сверху",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда кто-то падает сверху",
          code: "function fallenUpon(event) {[entity-entity api blockscripted]}"
        }
      },
      {
        title: "Когда блок сломан",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда блок сломан",
          code: "function broken(event) {[api blockscripted]}"
        }
      },
      {
        title: "Когда блок взорван",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда блок взорван",
          code: "function exploded(event) {[api blockscripted]}"
        }
      },
      {
        title: "Когда блок под дождём",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда блок под дождём",
          code: "function rainFilled(event) {[api blockscripted]}"
        }
      },
      {
        title: "Когда соседние блоки обновлены",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда соседние блоки обновлены",
          code: "function neighborChanged(event) {[api blockscripted]}"
        }
      },
      {
        title: "Когда кто-то кликнул по блоку",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда кто-то кликнул по блоку",
          code: "function clicked(event) {[api blockscripted player]}"
        }
      },
      {
        title: "Когда игрок сломал блок",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда игрок сломал блок",
          code: "function harvested(event) {[api blockscripted player]}"
        }
      },
      {
        title: "Когда кто-то дотрагивается к блоку",
        element: {
          type: ElementType.UL,
          cannot_be_inherits: true,
          header: "Когда кто-то дотрагивается к блоку",
          code: "function collide(event) {[api blockscripted entity-entity]}"
        }
      }
    ]
  }
}

