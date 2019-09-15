import LEFT from "../assets/chick_left_feet.png";
import RIGHT from "../assets/chick_right_feet.png";

const variants = {
  neutral: {
    left: {
      one: {
        x: 0,
        y: 0
      },
      two: {
        x: 0,
        y: 0
      }
    },
    right: {
      one: {
        x: 0,
        y: 0,
        rotate: 0
      },
      two: {
        x: 0,
        y: 0,
        rotate: 0
      }
    }
  },
  happy: {
    left: {
      one: {
        x: 0,
        y: 0
      },
      two: {
        x: 0,
        y: 0
      }
    },
    right: {
      one: {
        x: 0,
        y: 0,
        rotate: 0
      },
      two: {
        x: 0,
        y: 0,
        rotate: 0
      }
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HAPPY":
      return [
        ...state,
        {
          assets: {
            eyeLeft: LEFT,
            eyeRight: RIGHT,
            eyebrowLeft: "",
            eyebrowRight: ""
          },
          animationVariant: variants.happy,
          speed: 300
        }
      ];
    default:
      return [
        ...state,
        {
          assets: {
            eyeLeft: LEFT,
            eyeRight: RIGHT,
            eyebrowLeft: "",
            eyebrowRight: ""
          },
          animationVariant: variants.neutral,
          speed: 800
        }
      ];
  }
};

export default reducer;
