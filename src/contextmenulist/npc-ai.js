const { ElementType, ReturnsType } = require('../ContextMenuConstants')
const { assertChildrens } = require('../AssertContextMenuList') 
const { BooleanLiList } = require('../NpcTabsTools')

module.exports = [
  {
    title: "Анимация",
    element: {
      type: ElementType.LI,
      header: 'Задать анимацию ":__:" для нпса',
      code: 'event.npc.getAi().setAnimation(AnimationType_:__:)',
      li_list: {
        "Обычный": "NORMAL",
        "Сидит": "SIT",
        "Спит": "SLEEP",
        "Руки как у зомби": "HUG",
        "Крадётся": "SNEAK",
        "Танцует ": "DANCE",
        "Прицеливается ": "AIM",
        "Ползает": "CRAWL",
        "Держит флаг": "POINT",
        "Плачет": "CRY",
        "Машет рукой": "WAVE",
        "Поклон": "BOW",
        "Кивает «Нет»": "NO",
        "Кивает «Да»": "YES"
      }
    }
  },
  {
    title: "Домашняя позиция",
    element: {
      type: ElementType.LI,
      header: 'Нпс идёт в домашнюю позицию - :__:',
      code: 'event.npc.getAi().setReturnsHome(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Месть",
    element: {
      type: ElementType.LI,
      header: 'Если найдёт врага - :__:',
      code: 'event.npc.getAi().setRetaliateType(:__:)',
      li_list: {
        "Мстить": "0",
        "Паника": "1",
        "Отступать": "2",
        "Ничего": "3"
      }
    }
  },
  {
    title: "Движение",
    element: {
      type: ElementType.LI,
      header: 'Нпс :__:',
      code: 'event.npc.getAi().setMovingType(:__:)',
      li_list: {
        "Стоит": "0",
        "Гуляет": "1",
        "Идёт по пути": "2"
      }
    }
  },
  {
    title: "Последует",
    element: {
      type: ElementType.LI,
      header: 'Нпс при перемещении :__:',
      code: 'event.npc.getAi().setNavigationType(:__:)',
      li_list: {
        "Ходит": "0",
        "Летает": "1",
        "Плавает": "2"
      }
    }
  },
  {
    title: "Стоит",
    element: {
      type: ElementType.LI,
      header: 'Нпс :__: когда стоит',
      code: 'event.npc.getAi().setStandingType(:__:)',
      li_list: {
        "вертится": "0",
        "нет движений": "1",
        "приследует": "2",
        "вертит головой": "3"
      }
    }
  },
  {
    title: "Невидимая атака",
    element: {
      type: ElementType.LI,
      header: 'Нпс атакует невидимых существ - :__:',
      code: 'event.npc.getAi().setAttackInvisible(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Радиус действия",
    element: {
      type: ElementType.LI,
      header: 'Нпс видит врагов в радиусе :__: блоков',
      code: 'event.npc.getAi().setWanderingRange(:__:)'
    }
  },
  {
    title: "Взаимодейтвие",
    element: {
      type: ElementType.LI,
      header: 'С нпс можно взаимодействовать - :__:',
      code: 'event.npc.getAi().setInteractWithNPCs(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Остановка при взаимодействии",
    element: {
      type: ElementType.LI,
      header: 'Нпс останавливается когда с ним взаимодействуют - :__:',
      code: 'event.npc.getAi().setStopOnInteract(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Скорость ходьбы",
    element: {
      type: ElementType.LI,
      header: 'Нпс ходит со скоростью :__: ',
      code: 'event.npc.getAi().setWalkingSpeed(:__:)'
    }
  },
  {
    title: "Движении по линии",
    element: {
      type: ElementType.LI,
      header: 'Нпс ходит :__: ',
      code: 'event.npc.getAi().setMovingPathType(:__:)',
      li_list: {
        "кругом": "0",
        "туда-сюда": "1"
      }
    }
  },
  {
    title: "Взаимодействие с дверью",
    element: {
      type: ElementType.LI,
      header: 'Нпс может взаимодействовать с дверью - :__:',
      code: 'event.npc.getAi().setDoorInteract(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Плавать",
    element: {
      type: ElementType.LI,
      header: 'Нпс может плавать - :__:',
      code: 'event.npc.getAi().setCanSwim(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Укрытие",
    element: {
      type: ElementType.LI,
      header: 'Нпс ищет укрытие - :__: ',
      code: 'event.npc.getAi().setSheltersFrom(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Избегает воды",
    element: {
      type: ElementType.LI,
      header: 'Нпс избегает воды - :__:',
      code: 'event.npc.getAi().setAvoidsWater(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Прыжок при атаке",
    element: {
      type: ElementType.LI,
      header: 'Нпс прыгает при атаке - :__:',
      code: 'event.npc.getAi().setLeapAtTarget(:__:)',
      li_list: BooleanLiList()
    }
  },
  {
    title: "Тактика боя",
    element: {
      type: ElementType.LI,
      header: 'Нпс использует тактику :__:',
      code: 'event.npc.getAi().setTacticalType(TacticalType_:__:)',
      li_list: {
        "Натиск": "DEFAULT",
        "Уворт": "DODGE",
        "Окружать": "SURROUND",
        "Ударить и бежать": "HITNRUN",
        "Засада": "AMBUSH",
        "Подкрадывается": "STALK",
        "Никакой": "NONE"
      }
    }
  },
  {
    title: "Радиус тактики",
    element: {
      type: ElementType.LI,
      header: 'Нпс использует тактику в радиусе :__: блоков',
      code: 'event.npc.getAi().setTacticalRange(:__:)'
    }
  }
]
