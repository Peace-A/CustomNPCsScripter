
const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  item: {
    title: "предмет",
    children: [
      {
        title: "Текстура",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать текстуру {string}",
          code: "event.item.setItemDamage(1);event.item.setTexture(1,{})"
        }
      },
      {
        title: "Количество",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать количество {number}",
          code: "event.item.setMaxStackSize({})"
        }
      },
      {
        title: "Прочность",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать прочность (0-100) {number}",
          code: "event.item.setDurabilityValue({}/100)"
        }
      },
      {
        title: "индикатор прочности",
        children: [
          {
            title: "Показать",
            element: {
              type: ElementType.SIMPLE,
              header: "Показать индикатор прочности предмета",
              code: "event.item.setDurabilityShow(true)"
            }
          },
          {
            title: "Скрыть",
            element: {
              type: ElementType.SIMPLE,
              header: "Скрыть индикатор прочности предмета",
              code: "event.item.setDurabilityShow(false)"
            }
          }
        ]
      },
      {
        title: "Цвет",
        element: {
          type: ElementType.SIMPLE,
          header: "Задать цвет {number}",
          code: "event.item.setColor({})"
        }
      }
    ]
  }
}

assertChildrens(result.item, require("./itemstack"))

module.exports = result


