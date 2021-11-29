const $ = require("jquery")
const ClipboardJS = require("clipboard")
const ModalForm = require("../ModalForm")
const { SettingsModalForm, initSettings } = require("../settings.js")
const { addPage, HEADER_HEIGHT } = require("../doPage")

const PAGE_MAX_NUMBER = 4

module.exports = () => {
  $(() => {

    // load first doPage
    addPage()

    // init resizer`s main-rows
    ResizerOfMainRows()
    window.onresize = ResizerOfMainRows
    function ResizerOfMainRows() {
      let height = window.innerHeight - document.getElementById("header").clientHeight
      $("body>main").css("height", height)
      $(".doPage").css("height", height)
      $(".do-workspace").css("height", height-HEADER_HEIGHT)
    }

    // init tab creator button
    $("#tab-creator").click(()=>{
      let doPageNumber = $("#main-page-viewer").children().length
      if ( doPageNumber <= PAGE_MAX_NUMBER )
        addPage()
    })

    // init modal form close event 
    $(".modal *").click(e=>e.stopPropagation())
    $(".modal").click(()=>$("#modal-form").hide())

    // init setting button
    initSettings()
    $("#settings-btn").click(()=>{
      SettingsModalForm().show()
    })

    // init hide button for clipboard
    new ClipboardJS('.copy-btn')

    // init log modal form caller
    $("#log-caller").click(()=>{
      console.log(ModalForm)
      let logModalForm = ModalForm({
        title: "Список обновлений",
        body: [[
          "0.6 Beta",
          "Первый выпуск скриптера.",
          "Благодарю @!!TorayLife за помощь в локализации."
        ],[
          "0.7",
          "-Новые елементы интерфейса",
          "-Система проверки ошибок",
          "-Подсказки в контекстном меню",
          "-Поддержка скриптовых дверей",
          "-Поддержка на десктопе",
          "-Удобная робота с частицами",
          "-Поддержка взаемодействия с ближайшими сушествами",
          "-Система изменения характеристик нпс",
          "-Поддержка нескольких вкладок",
          "-Система настроек",
          "-Тёмная тема",
          "-Улучшен внешний вид контекстного меню",
          "-Поддержка таймеров",
          "-Поддеожка создания интерфейсов",
          "-Исправлено многочесленое количечество багов"
        ]
        ]
      })
      logModalForm.show()
    })

  })
}
