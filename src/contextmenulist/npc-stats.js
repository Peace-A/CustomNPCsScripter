const { ElementType, ReturnsType } = require('../ContextMenuConstants')
const { assertChildrens } = require('../AssertContextMenuList') 
const { BooleanLiList } = require('../NpcTabsTools')

module.exports = [
  {
    title: "Здоровье",
    element: {
      type: ElementType.LI,
      header: "Задать максимальноe количество хп :__:",
      code: "event.npc.getStats().setMaxHealth(:__:)"
    }
  },
  {
    title: "Защита от ближних атак",
    element: {
      type: ElementType.LI,
      header: "Задать защиту от ближних атак :__:",
      code: "event.npc.getStats().setResistance(0,:__:)"
    }
  },
  {
    title: "Защита от дальних атак",
    element: {
      type: ElementType.LI,
      header: "Задать защиту от дальних атак :__:",
      code: "event.npc.getStats().setResistance(1,:__:)"
    }
  },
  {
    title: "Защита от взрывов",
    element: {
      type: ElementType.LI,
      header: "Задать защиту от взрывов :__:",
      code: "event.npc.getStats().setResistance(2,:__:)"
    }
  },
  {
    title: "Защита от откидивания",
    element: {
      type: ElementType.LI,
      header: "Задать защиту от откидивания :__:",
      code: "event.npc.getStats().setResistance(3,:__:)"
    }
  },
  {
    title: "Лечение в битве",
    element: {
      type: ElementType.LI,
      header: "Задать лечение хп во время битвы :__:",
      code: "event.npc.getStats().setCombatRegen(:__:)"
    }
  },
  {
    title: "Лечение",
    element: {
      type: ElementType.LI,
      header: "Задать лечение хп :__:",
      code: "event.npc.getStats().setHealthRegen(:__:)"
    }
  },
  {
    title: "Имунитет к ядам",
    element: {
      type: ElementType.LI,
      header: "Нпс имеет имунитет к ядам - :__:",
      code: "event.npc.getStats().setImmune(0,:__:)",
      li_list: BooleanLiList()
    }
  },
  {
    title: "Имунитет к падению",
    element: {
      type: ElementType.LI,
      header: "Нпс имеет имунитет к падению - :__:",
      code: "event.npc.getStats().setImmune(1,:__:)",
      li_list: BooleanLiList()
    }
  },
  {
    title: "Имунитет к солнцу",
    element: {
      type: ElementType.LI,
      header: "Нпс имеет имунитет к солнцу - :__:",
      code: "event.npc.getStats().setImmune(2,:__:)",
      li_list: BooleanLiList("Нет", "Да")
    }
  },
  {
    title: "Имунитет к огню",
    element: {
      type: ElementType.LI,
      header: "Нпс имеет имунитет к огню - :__:",
      code: "event.npc.getStats().setImmune(3,:__:)",
      li_list: BooleanLiList()
    }
  },
  {
    title: "Плавать",
    element: {
      type: ElementType.LI,
      header: "Нпс умеет плавать - :__:",
      code: "event.npc.getStats().setImmune(4,:__:)",
      li_list: BooleanLiList()
    }
  },
  {
    title: "Имунитет к паутине",
    element: {
      type: ElementType.LI,
      header: "Нпс имеет имунитет к паутине - :__:",
      code: "event.npc.getStats().setImmune(5,:__:)",
      li_list: BooleanLiList()
    }
  },
  {
    title: "Тип",
    element: {
      type: ElementType.LI,
      header: "Задать тип нпс - :__:",
      code: "event.npc.getStats().setCreatureType(:__:)",
      li_list: {
        "Нормальный": 0,
        "Монстр": 1,
        "Членистоногий": 2
      }
    }
  },
  {
    title: "Тип респавна",
    element: {
      type: ElementType.LI,
      header: "Задать тип респавна - :__:",
      code: "event.npc.getStats().setRespawnType(:__:)",
      li_list: {
        "Да": 0,
        "День": 1,
        "Ночь": 2,
        "Нет": 3,
        "Естественно": 4
      }
    }
  },
  {
    title: "Время респавна",
    element: {
      type: ElementType.LI,
      header: "Задать время респавна :__:",
      code: "event.npc.getStats().setRespawnTime(:__:)"
    }
  },
  {
    title: "Труп",
    element: {
      type: ElementType.LI,
      header: "Прятать труп нпс - :__:",
      code: "event.npc.getStats().setHideDeadBody(:__:)",
      li_list: BooleanLiList()
    }
  },
  {
    title: "Агро радиус",
    element: {
      type: ElementType.LI,
      header: "Задать агро радиус нпс :__:",
      code: "event.npc.getStats().setAggroRange(:__:)"
    }
  },
]
