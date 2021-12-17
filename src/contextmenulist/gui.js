const { ElementType, ReturnsType } = require("../ContextMenuConstants")
const { assertChildrens } = require("../AssertContextMenuList") 

module.exports = [
  {
    title: "Кнопка",
    element: {
      type: ElementType.LI_UL,
      header: `Кнопка ":_label_:" x::_x_: y::_y_: ширина::_width_: высота::_height_: при нажатии на кнопку:`,
      code: `scriptGuiList[guiId].addButton(:_id_:, ":_label_:", :_x_:, :_y_:, :_width_:, :_height_:);\n scriptGuiEvents.button[:_id_: ] = function(event) { :[api gui-api player:] }`
    }
  },
  {
    title: "Слот",
    element: {
      type: ElementType.LI_UL,
      header: `Слот x::_x_: y::_y_: при клике:`,
      code: `scriptGuiList[guiId].addItemSlot(:_x_:, :_y_:);\n scriptGuiEvents.slot[:_id_:] = function(event) { :[api gui-api player slot-event-data:] }`
    }
  },
  {
    title: "Слот с предметом",
    element: {
      type: ElementType.LI,
      header: `Слот x::_x_: y::_y_: с предметом {itemstack}`,
      code: `scriptGuiList[guiId].addItemSlot(:_x_:, :_y_:, {})`
    }
  },
  {
    title: "Строка",
    element: {
      type: ElementType.LI,
      header: `Строка ":_label_:" x::_x_: y::_y_: ширина::_width_: высота::_height_:`,
      code: `scriptGuiList[guiId].addLabel(:_id_:, ":_label_:" , :_x_:, :_y_:, :_width_:, :_height_:)`
    }
  },
  {
    title: "Список",
    element: {
      type: ElementType.LI,
      header: `Список x::_x_: y::_y_: ширина::_width_: высота::_height_: с елементами :_list_:`,
      code: `scriptGuiList[guiId].addScroll(:_id_:, :_x_:, :_y_:, :_width_:, :_height_:, :_list_:)`
    }
  },
  {
    title: "Поле",
    element: {
      type: ElementType.LI,
      header: `Поле для ввода текста x::_x_: y::_y_: ширина::_width_: высота::_height_:`,
      code: `scriptGuiList[guiId].addTextField(:_id_:, :_x_:, :_y_:, :_width_:, :_height_:)`
    }
  },
  {
    title: "Текстурованая кнопка",
    element: {
      type: ElementType.LI,
      header: `Кнопка с текстурой ":_label_:" текстура::_texture_: x::_x_: y::_y_: ширина::_width_: высота::_height_: textureX::_textureX_: textureY::_textureY_:`,
      code: `scriptGuiList[guiId].addTexturedButton(:_id_:, ":_label_:", :_x_:, :_y_:, :_width_:, :_height_:, :_texture_:, :_textureX_:, :_textureY_:)`
    }
  },
  {
    title: "Картинка",
    element: {
      type: ElementType.LI,
      header: `Картинка :_texture_:  x::_x_: y::_y_: ширина::_width_: высота::_height_: textureX::_textureX_: textureY::_textureY_:`,
      code: `scriptGuiList[guiId].addTexturedRect(:_id_:, ":_texture_:", :_x_:, :_y_:, :_width_:, :_height_:, :_textureX_:, :_textureY_:)`
    }
  },
  {
    title: "Фон",
    element: {
      type: ElementType.LI,
      header: `Фоновая картинка ":__:"`,
      code: `scriptGuiList[guiId].setBackgroundTexture(":__:")`
    }
  },
  {
    title: "Останавливать игру",
    element: {
      type: ElementType.LI,
      header: `Останавливать игру - :__:`,
      code: `scriptGuiList[guiId].setDoesPauseGame(:__:)`
    }
  },
  {
    title: "Размеры",
    element: {
      type: ElementType.LI,
      header: `Размеры - ширина::_width_: высота::_height_:`,
      code: `scriptGuiList[guiId].setSize(:_width_:, :_height_:)`
    }
  },
  {
    title: "Инвентарь",
    element: {
      type: ElementType.LI,
      header: `Инвентарь игрока x::_x_: y::_y_:`,
      code: `scriptGuiList[guiId].showPlayerInventory(:_x_:, :_y_:)`
    }
  }
]
