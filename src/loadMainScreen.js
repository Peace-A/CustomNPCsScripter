const $ = require("jquery")

module.exports = () => {

  $(".main-row").append( MainScreen() )

}

function MainScreen() {
  return $(`<main class="main-screen"></main>`)
      .append($(`<h1>Создайте новый скрипт для...</h1>`))
      .append( createBtnRowLoader("НПС", ["operators", "npc-events"]) )
      .append( createBtnRowLoader("Игрока", ["operators", "player-events"]) )
      .append( createBtnRowLoader("Блока", ["operators", "block-events"]) )
      .append( createBtnRowLoader("Предмета", ["operators", "item-events"]) )
}

function createBtnRowLoader(name, tagList) {
  return $(`<input type="button" class="btn btn-lg btn-primary" value="${name}" >`)
    .click( ( { target } ) => {

      // set propertyes for main row
      $(target).parent().parent().attr("context-menu-data", tagList.join(' '))

      // remove main screen
      $(target).parent().remove()

    })
}
