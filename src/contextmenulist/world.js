const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")
const particleList = [
  "angryVillager",
  "barrier",
  "blockcrack",
  "blockdust",
  "bubble",
  "cloud",
  "crit",
  "damageIndicator",
  "depthsuspend",
  "dragonbreath",
  "dripLava",
  "dripWater",
  "droplet",
  "enchantmenttable",
  "endRod",
  "explode",
  "fallingdust",
  "fireworkdSpark",
  "flame",
  "footstep",
  "happyVillager",
  "heart",
  "hugeexplosion",
  "iconcrack",
  "instantSpell",
  "largeexplode",
  "largesmoke",
  "lava",
  "magicCrit",
  "mobSpell",
  "mobSpellAmbient",
  "modappearance",
  "note",
  "portal",
  "reddust",
  "slime",
  "smoke",
  "snowballpoof",
  "snowshovel",
  "spell",
  "spit",
  "splash",
  "suspended",
  "sweepAttack",
  "take",
  "totem",
  "townaura",
  "wake",
  "witchMagic"
]

let result = [
  {
    title: "блок",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BLOCK,
      header: "блок в кординатах x{number} y{number} z{number}",
      code: "getBlock({},{},{})"
    }
  },
  {
    title: "Блок",
    element: {
      type: ElementType.SIMPLE,
      header: "Поставить в кординатах x{number} y{number} z{number} блок с ID {string} с meta {number}",
      code: "setBlock({},{},{},{},{})"
    }
  },
  {
    title: "Удалить блок",
    element: {
      type: ElementType.SIMPLE,
      header: "Удалить блок в кординатах x{number} y{number} z{number}",
      code: "removeBlock({},{},{})"
    }
  },
  {
    title: "день",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "сейчас день",
      code: "isDay()"
    }
  },
  {
    title: "дождь",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.BOOL,
      header: "сейчас дождь",
      code: "isRaining()"
    }
  },
  {
    title: "дождь",
    children: [
      {
        title: "Начать",
        element: {
          type: ElementType.SIMPLE,
          header: "Начать дождь",
          code: "setRaining(true)"
        }
      },
      {
        title: "Закончить",
        element: {
          type: ElementType.SIMPLE,
          header: "Закончить дождь",
          code: "setRaining(false)"
        }
      },
    ]
  },
  {
    title: "Молния",
    element: {
      type: ElementType.SIMPLE,
      header: "Ударить молнию в кординаты x{number} y{number} z{number}",
      code: "thunderStrike({},{},{})"
    }
  },
  {
    title: "Частицы",
    element: {
      type: ElementType.SIMPLE,
      header: `Создать частицы с ID {:list:( title:ID; list:${particleList.join(",")}; )} в кординатах x {number} y {number} z {number} с разбросом x {number} y {number} z {number} в количестве {number}`,
      code: "spawnParticle(\"{}\",{},{},{},{},{},{},1,{})"
    }
  },
  {
    title: "предмет",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.ITEMSTACK,
      header: "предмет с ID {string} с damage {number} в количестве {number}",
      code: "createItem({},{},{})"
    }
  },
  {
    title: "взрыв",
    children: [
      {
        title: "Обычный",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number}",
          code: "explode({},{},{},{},false,true)"
        }
      },
      {
        title: "С блоками",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number} с разрушением блоков ",
          code: "explode({},{},{},{},false,true)"
        }
      },
      {
        title: "С огнём",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number} с огнём ",
          code: "explode({},{},{},{},true,false)"
        }
      },
      {
        title: "С блоками и огнём",
        element: {
          type: ElementType.SIMPLE,
          header: "Создать взрыв в кординатах x {number} y {number} z {number} радиусом {number} с разрушением блоков и с огнём ",
          code: "explode({},{},{},{},true,true)"
        }
      }
    ]
  },
  {
    title: "биом",
    element: {
      type: ElementType.SIMPLE,
      returns: ReturnsType.STRING,
      header: "название биома в кординатах x {number} y {number}",
      code: "getBiomeName({},{})"
    }
  },
  {
    title: "Чат",
    element: {
      type: ElementType.SIMPLE,
      header: "написать в чат {string}",
      code: "broadcast({})"
    }
  },
  {
    title: "Для ближайшего существа",
    element: {
      type: ElementType.UL,
      cannot_inherit:true,
      header: "Для ближайшего существа от позиции {pos} в радиусе {number} типа {:list:( title:тип; list:ANY,UNKNOWN,PLAYER,NPC,MONSTER,ANIMAL,LIVING,ITEM,PROJECTILE,PIXELMON,VILLAGER; )}",
      preCode: "var closestEntity = ",
      code: "getClosestEntity({},{},EntityType_{});\n if (closestEntity) {:[closest-entity:]}"
    }
  },
  {
    title: "Для ближайшых существ",
    element: {
      type: ElementType.UL,
      cannot_inherit:true,
      header: "Для ближайших существ от позиции {pos} в радиусе {number} типа {:list:( title:тип; list:ANY,UNKNOWN,PLAYER,NPC,MONSTER,ANIMAL,LIVING,ITEM,PROJECTILE,PIXELMON,VILLAGER; )}",
      preCode: "var nearbyEntities = ",
      code: "getNearbyEntities({},{},EntityType_{});\n for (var i=0;i<nearbyEntities.length;i++) {var closestEntity=nearbyEntities[i]; \n :[closest-entity:]}"
    }
  }
]

module.exports = result
