const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList")

let result = {
  player: {
    title: "игрок",
    children: [
      {
        title: "мир",
        children: []
      },
      {
        title: "переменная",
        children: []
      },
      {
        title: "никнейм",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.STRING,
          header: "никнейм игрока",
          code: "event.player.getDisplayName()"
        }
      },
      {
        title: "позиция",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.POS,
          header: "позиция игрока",
          code: "event.player.getPos()"
        }
      },
      {
        title: "Закрыть gui",
        element: {
          type: ElementType.SIMPLE,
          header: "Закрыть gui",
          code: "event.player.closeGui()"
        }
      },
      {
        title: "Кикнуть",
        element: {
          type: ElementType.SIMPLE,
          header: "Кикнуть с сообщением {string}",
          code: "event.player.kick​({})"
        }
      },
      {
        title: "Сыграть звук",
        element: {
          type: ElementType.SIMPLE,
          header: "Сыграть звук с ID {string}",
          code: "event.player.playSound({})"
        }
      },
      {
        title: "сообщение",
        children: [
          {
            title: "В чат",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "Сообщить {string} в чат игроку",
              code: "event.player.message()"
            }
          },
          {
            title: "Серое",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "Отправить сообщение с заголовком {string} с текстом {string} как серый прямоугольник игроку",
              code: "event.player.sendNotification({},{},0)"
            }
          },
          {
            title: "Белое",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "Отправить сообщение с заголовком {string} с текстом {string} как белый прямоугольник игроку",
              code: "event.player.sendNotification({},{},1)"
            }
          },
          {
            title: "Синее",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "Отправить сообщение с заголовком {string} с текстом {string} как синее прямоугольник игроку",
              code: "event.player.sendNotification({},{},2)"
            }
          },
          {
            title: "Прямоугольником",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "Отправить сообщение с заголовком {string} с текстом {string} как белый прямоугольник игроку",
              code: "event.player.sendNotification({},{},3)"
            }
          }
        ]
      },
      {
        title: "голод",
        children: [
          {
            title: "количество единиц",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "количество единиц голода",
              code: "event.player.getHunger()"
            }
          },
          {
            title: "Установить",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "Установить {number} единиц голода ",
              code: "event.player.setHunger({})"
            }
          },
        ]
      },
      {
        title: "предметы",
        children: [
          {
            title: "Удалить",
            element: {
              type: ElementType.SIMPLE,
              header: "Удалить предмет с ID {string} в количестве {number}",
              code: "event.player.removeItem({},-1,{})"
            }
          },
          {
            title: "Выдать",
            element: {
              type: ElementType.SIMPLE,
              header: "Выдать предмет с ID {string} с damage {number} в количестве {number}",
              code: "event.player.giveItem({},{},{})"
            }
          }
        ]
      },
      {
        title: "точка возрождения",
        children: [
          {
            title: "Поставить",
            element: {
              type: ElementType.SIMPLE,
              header: "Поставить spawnpoint в кординаты x {number} y {number} z {number}",
              code: "event.player.setSpawnpoint({},{},{})"
            }
          },
          {
            title: "Сбросить",
            element: {
              type: ElementType.SIMPLE,
              header: "Сбросить spawnpoint",
              code: "event.player.resetSpawnpoint()"
            }
          }
        ]
      },
      {
        title: "опыт",
        children: [
          {
            title: "уровень",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "уровень игрока",
              code: "event.player.getExpLevel()"
            }
          },
          {
            title: "Установить",
            element: {
              type: ElementType.SIMPLE,
              header: "Установить уровень игрока {number}",
              code: "event.player.setExpLevel({})"
            }
          },
        ]
      },
      {
        title: "gamemode",
        children: [
          {
            title: "в креативе",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "в креативе",
              code: "event.player.getGamemode() == 1"
            }
          },
          {
            title: "в выживании",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "в выживании",
              code: "event.player.getGamemode() == 0"
            }
          },
          {
            title: "в приключении",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "в приключении",
              code: "event.player.getGamemode() == 2"
            }
          },
          {
            title: "в спектаторе",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "в спектаторе",
              code: "event.player.getGamemode() == 3"
            }
          },
          {
            title: "В креатив",
            element: {
              type: ElementType.SIMPLE,
              header: "Войти в режим креатива",
              code: "event.player.setGamemode(1)"
            }
          },
          {
            title: "В выживании",
            element: {
              type: ElementType.SIMPLE,
              header: "Войти в режим выживания",
              code: "event.player.setGamemode(0)"
            }
          },
          {
            title: "В приключении",
            element: {
              type: ElementType.SIMPLE,
              header: "Войти в режим приключения",
              code: "event.player.setGamemode(2)"
            }
          },
          {
            title: "В спектаторе",
            element: {
              type: ElementType.SIMPLE,
              header: "Войти в режим спектатора",
              code: "event.player.setGamemode(3)"
            }
          }
        ]
      },
      {
        title: "квест",
        hint: `<img src="hint/idHint.png" > ID квеста можно узнать в окне с квестом`,
        children: [
          {
            title: "выполнил",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "виполнил квест с ID {number}",
              code: "event.player.hasFinishedQuest({})"
            }
          },
          {
            title: "выполняет",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "виполняет квест с ID {number}",
              code: "event.player.hasActiveQuest({})"
            }
          },
          {
            title: "может принять",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "может принять квест с ID {number}",
              code: "event.player.canQuestBeAccepted({})"
            }
          },
          {
            title: "Начать",
            element: {
              type: ElementType.SIMPLE,
              header: "Начать квест с ID {number}",
              code: "event.player.startQuest({})"
            }
          },
          {
            title: "Выполнить",
            element: {
              type: ElementType.SIMPLE,
              header: "Выполнить квест с ID {number}",
              code: "event.player.finishQuest({})"
            }
          },
          {
            title: "Остановить",
            element: {
              type: ElementType.SIMPLE,
              header: "Остановить выполнение квеста с ID {number}",
              code: "event.player.stopQuest({})"
            }
          },
          {
            title: "Удалить",
            element: {
              type: ElementType.SIMPLE,
              header: "Удалить квест с ID {number} со всёх списков",
              code: "event.player.removeQuest({})"
            }
          }
        ]
      },
      {
        title: "фракция",
        children: [
          {
            title: "агресивен ли",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "агресивен к фракции с ID {number}",
              code: "event.player.factionStatus({}) == -1"
            }
          },
          {
            title: "нейтрален ли",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "нейтрален к фракции с ID {number}",
              code: "event.player.factionStatus({}) == 0"
            }
          },
          {
            title: "дружелюбен ли",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "дружелюбен к фракции с ID {number}",
              code: "event.player.factionStatus({}) == 1"
            }
          },
          {
            title: "Добавить очков",
            element: {
              type: ElementType.SIMPLE,
              header: "Добавить к фракции с ID {number} очков в количестве {number}",
              code: "event.player.addFactionPoints({},{})"
            }
          },
          {
            title: "количество очков",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.NUMBER,
              header: "количество очков к фракции с ID {number}",
              code: "event.player.getFactionPoints({})"
            }
          }
        ]
      },
      {
        title: "диалог",
        hint: `<img src="hint/idHint.png" > ID диалог можно узнать в окне с квестом`,
        children: [
          {
            title: "прочитал",
            element: {
              type: ElementType.SIMPLE,
              returns: ReturnsType.BOOL,
              header: "прочитал диалог с ID {number}",
              code: "event.player.hasReadDialog({})"
            }
          },
          {
            title: "Показать",
            element: {
              type: ElementType.SIMPLE,
              header: "Показать диалог с ID {number} от имени {string}",
              code: "event.player.showDialog({},{})"
            }
          },
          {
            title: "Удалить",
            element: {
              type: ElementType.SIMPLE,
              header: "Удалить диалог с ID {number}",
              code: "event.player.removeDialog({},{})"
            }
          },
          {
            title: "Добавить",
            element: {
              type: ElementType.SIMPLE,
              header: "Добавить диалог с ID {number}",
              code: "event.player.addDialog({},{})"
            }
          },
          {
            title: "Изменить",
            element: {
              type: ElementType.SIMPLE,
              header: "Добавить диалог с ID {number}",
              code: "event.player.addDialog({},{})"
            }
          }
        ]
      },
      {
        title: "Показать интерфейс",
        element: {
          type: ElementType.SIMPLE,
          header: "Показать игроку интерфейс с ID {number}",
          code: "event.player.showCustomGui(scriptGuiList[{}])"        
        }
      }
    ]
  }
}

assertChildrens(result.player.children[0], require("./world"), "event.player.world.")
assertChildrens(result.player.children[1], require("./data"), "event.player.")
assertChildrens(result.player, require("./timer"), "event.player.getTimers()")
assertChildrens(result.player, require("./entitylivingbase"), "event.player.")

module.exports = result
