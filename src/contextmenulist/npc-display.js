const { ElementType, ReturnsType } = require('../ContextMenuConstants')
const { assertChildrens } = require('../AssertContextMenuList') 
const { BooleanLiList } = require('../NpcTabsTools')

module.exports = [
  {
    title: 'Имя',
    element: {
      type: ElementType.LI,
      header: 'Задать имя нпса ":__:"',
      code: 'event.npc.getDisplay().setName(":__:")'
    }
  },
  {
    title: 'Титул',
    element: {
      type: ElementType.LI,
      header: 'Задать титул нпса ":__:"',
      code: 'event.npc.getDisplay().setTitle(":__:")'
    }
  },
  {
    title: 'Скин url',
    element: {
      type: ElementType.LI,
      header: 'Задать скин нпса по url ":__:"',
      code: 'event.npc.getDisplay().setSkinUrl(":__:")'
    }
  },
  {
    title: 'Скин игрока',
    element: {
      type: ElementType.LI,
      header: 'Задать скин нпса по игроку ":__:"',
      code: 'event.npc.getDisplay().setSkinPlayer(":__:")'
    }
  },
  {
    title: 'Скин текстура',
    element: {
      type: ElementType.LI,
      header: 'Задать скин нпса по текстуре ":__:"',
      code: 'event.npc.getDisplay().setSkinTexture(":__:")'
    }
  },
  {
    title: 'Живая анимация',
    element: {
      type: ElementType.LI,
      header: 'Живая анимация нпса - :__:',
      code: 'event.npc.getDisplay().setHasLivingAnimation(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: 'Видимость',
    element: {
      type: ElementType.LI,
      header: 'Нпс видимый - :__:',
      code: 'event.npc.getDisplay().setVisible(:__:)',
      li_list: {
        "Да": "0",
        "Нет": "1",
        "Частично": "2"
      }
    }
  },
  {
    title: 'Полоска хп',
    element: {
      type: ElementType.LI,
      header: 'Полоска хп нпса - :__:',
      code: 'event.npc.getDisplay().setBossbar(:__:)',
      li_list: {
        "Невидима": "0",
        "Видима": "1",
        "Видима когда атакован": "2"
      }
    }
  },
  {
    title: 'Размер',
    element: {
      type: ElementType.LI,
      header: 'Задать размер нпса :__:',
      code: 'event.npc.getDisplay().setSize(:__:)'
    }
  },
  {
    title: 'Показывать имя',
    element: {
      type: ElementType.LI,
      header: ':__: имя нпса',
      code: 'event.npc.getDisplay().setShowName(:__:)',
      li_list: {
        "Показывать": "0",
        "Спрятать": "1",
        "Показывать когда атакован": "2"
      }
    }
  },
  {
    title: 'Плащ',
    element: {
      type: ElementType.LI,
      header: 'Задать текстуру плаща нпса ":__:"',
      code: 'event.npc.getDisplay().setCapeTexture(":__:")'
    }
  },
  {
    title: 'Глаза',
    element: {
      type: ElementType.LI,
      header: 'Задать текстуру глаз нпса ":__:"',
      code: 'event.npc.getDisplay().setOverlayTexture(":__:")'
    }
  },
  {
    title: 'Цвет полоски хп',
    element: {
      type: ElementType.LI,
      header: 'Задать :__: цвет для полоски хп нпса',
      code: 'event.npc.getDisplay().setBossColor(":__:")',
      li_list: {
        "розовый": "0",
        "синий": "1",
        "красный": "2",
        "зелёный": "3",
        "желтый": "4",
        "фиолетовый": "5",
        "белый": "6"
      }
    }
  },
  {
    title: 'Модель',
    element: {
      type: ElementType.LI,
      header: 'Задать модель ":__:" для нпса',
      code: 'event.npc.getDisplay().setModel(":__:")'
    }
  },
  {
    title: 'Хитбоксы',
    element: {
      type: ElementType.LI,
      header: 'Хитбоксы для нпса - :__:',
      code: 'event.npc.getDisplay().setHasHitbox(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: 'Размер модели',
    element: {
      type: ElementType.LI,
      header: 'Задать :__: для нпса',
      code: 'event.npc.getDisplay().setModelScale(:__:)'
    }
  },
  {
    title: 'Оттенок',
    element: {
      type: ElementType.LI,
      header: 'Установить оттенок :__:',
      code: 'event.npc.getDisplay().setTint(":__:")'
    }
  }
]

