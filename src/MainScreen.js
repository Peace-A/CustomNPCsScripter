const $ = require("jquery")

module.exports = function MainScreen() {
  return $(`<main class="main-screen"></main>`)
    .append($(`<h1>Создайте новый скрипт для...</h1>`))
    .append( createBtnRowLoader("НПС", ["npc-events"]) )
    .append( createBtnRowLoader("Игрока", ["player-events"]) )
    .append( createBtnRowLoader("Блока", ["block-events"]) )
    .append( createBtnRowLoader("Двери", ["door-events"]) )
    .append( createBtnRowLoader("Предмета", ["item-events"]) )
}


function createBtnRowLoader(name, tagList) {
  return $(`<input type="button" class="btn btn-lg btn-primary" value="${name}" >`)
    .click( ( { target } ) => {

      // add default api
      tagList.unshift("api")

      // set propertyes for do-workspace
      $(target).parent().parent().attr("context-menu-data", tagList.join(' '))

      // remove main screen
      $(target).parent().remove()

    })
}
