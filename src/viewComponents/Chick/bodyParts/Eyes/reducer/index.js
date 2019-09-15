import LEFT from "../../../assets/chick_eyes_left.png";
import RIGHT from "../../../assets/chick_eyes_right.png";

const variants = {
  neutral: {
    left: {
      one: {
        x: 0,
        y: 0,
        height: 15
      },
      two: {
        x: 0,
        y: 0,
        height: 15
      }
    },
    right: {
      one: {
        x: 0,
        y: 0,
        height: 15,
        rotate: 0
      },
      two: {
        x: 0,
        y: 0,
        height: 15,
        rotate: 0
      }
    }
  },
  happy: {
    left: {
      one: {
        x: 0,
        y: 0,
        height: 15,
        width: 12
      },
      two: {
        x: 0,
        y: 0,
        height: 0,
        width: 12
      }
    },
    right: {
      one: {
        x: 0,
        y: 0,
        height: 15,
        width: 8,
        rotate: 0
      },
      two: {
        x: 0,
        y: 0,
        height: 0,
        width: 8,
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
