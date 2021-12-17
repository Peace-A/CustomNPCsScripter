const { ElementType, ReturnsType } = require("../ContextMenuConstants") 

module.exports = {
  operators: {
    title: "Операторы",
    children: [
      {
        title: "Если",
        element: {
          type: ElementType.UL,
          header: "Если {bool}",
          code: "if ({}) { :[ :] }"
        }
      },
      {
        title: "С шансом",
        element: {
          type: ElementType.UL,
          header: "С шансом в {number} процентов",
          code: "if(Math.random()<=({}/100)) { :[ :] }"
        }
      },
      {
        title: "x=y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.BOOL,
          header: "{number string}={number string}",
          code: "({})==({})"
        }
      },
      {
        title: "x>y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.BOOL,
          header: "{number}>{number}",
          code: "({})>({})"
        }
      },
      {
        title: "x>=y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.BOOL,
          header: "{number}>={number}",
          code: "({})>=({})"
        }
      },
      {
        title: "x<y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.BOOL,
          header: "{number}<{number}",
          code: "({})<({})"
        }
      },
      {
        title: "x<=y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.BOOL,
          header: "{number}<={number}",
          code: "({})<=({})"
        }
      },
      {
        title: "x+y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "{number}+{number}",
          code: "({})+({})"
        }
      },
      {
        title: "x-y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "{number}-{number}",
          code: "({})-({})"
        }
      },
      {
        title: "x/y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "{number}/{number}",
          code: "({})/({})"
        }
      },
      {
        title: "x*y",
        element: {
          type: ElementType.SIMPLE,
          returns: ReturnsType.NUMBER,
          header: "{number}*{number}",
          code: "({})*({})"
        }
      }
    ]
  }
}
 
