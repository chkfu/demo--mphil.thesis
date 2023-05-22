// from file
import { font, color } from './../../../../../theme/styleDeclaration';

// declarations
export const theme = {

  "background": color.bg_coal,
  "fontFamily": font.content,
  "textColor": color.text_white,
  "fontSize": 14,

  "axis": {
    "domain": {
      "line": {
        "stroke": color.text_white,
        "strokeWidth": 1
      }
    },
    "legend": {
      "text": {
        "fontSize": 20,
        "fill": color.text_white
      }
    },
    "ticks": {
      "line": {
        "stroke": color.text_white,
        "strokeWidth": 1
      },
      "text": {
        "fontSize": 16,
        "fill": color.text_white
      }
    }
  },
  "grid": {
    "line": {
      "stroke": color.text_white,
      "strokeWidth": 1
    }
  },

  "legends": {
    "title": {
      "text": {
        "fontSize": 18,
        "fill": color.text_white
      }
    },
    "text": {
      "fontSize": 18,
      "fill": color.text_white
    },
    "ticks": {
      "line": {},
      "text": {
        "fontSize": 18,
        "fill": color.text_white
      }
    }
  },

  "annotations": {
    "text": {
      "fontSize": 12,
      "fill": "#333333",
      "outlineWidth": 2,
      "outlineColor": color.text_white,
      "outlineOpacity": 1
    },
    "link": {
      "stroke": "#000000",
      "strokeWidth": 1,
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "outline": {
      "stroke": "#000000",
      "strokeWidth": 2,
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "symbol": {
      "fill": "#000000",
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    }
  },

  "tooltip": {
    "container": {
      "background": "#ffffff",
      "color": color.text_darkgrey,
      "fontFamily": font.content,
      "fontSize": 8
    }
  }
};