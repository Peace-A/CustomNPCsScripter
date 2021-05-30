module.exports = {
  "npc-events": {
    "event": {
      "title": "События",
      "children": {
        "init": {
          "title": "В начале",
          "element": {
            "type": 0,
            "header": "Hello World! {npc-events number}",
            "code": "say hello {}"
          }
        },
        "tick": {
          "title": "Каждый тик",
          "element": {
            "type": 0,
            "header": "Bye",
            "code": "print bey"
          }
        },
        "interact": {
          "title": "При правом клике от игрока"
        }
      }
    }
  },
  "operators": {
    "operators": {
      "title": "Операторы",
      "children": {
        "if": {
          "title": "Если",
          "element": {
            "type": 1,
//             cannot_be_inherits: true,
            returns: "string",
            "header": "Если {npc-events string}",
            "code": "if ({}) {\n[number]}"
          }
        }
      }
    }
  },
  "number": {
    "number": {
      "title": "Число",
      "element": {
        "type": 0,
        "header": "<input type=\"number\">",
        "code": "<>"
      }
    }
  },
  "string": {
    "string": {
      "title": "Текст",
      "element": {
        "type": 0,
        "header": "<input>",
        "code": "\"<>\""
      }
    }
  },
  "create-func": {
    "func": {
      "title": "Создать новою функцию",
      "element": {
        "type": "func"
      }
    }
  }
}
