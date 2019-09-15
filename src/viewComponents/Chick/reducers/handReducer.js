import LEFT from "../assets/chick_left-hand.png";
import RIGHT from "../assets/chick_right-hand.png";

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
        y: 20
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
        y: 20,
        rotate: 0
      }
    }
  }
};

const transitions = {
  happy: {
    stiffness: 1000
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
          animationVariant: {
            ...variants.happy,
            transition: { ...transitions.happy }
          },
          speed: 250
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
          animationVariant: {
            ...variants.neutral,
            transition: { ...transitions.neutral }
          },
          speed: 800
        }
      ];
  }
};

export default reducer;
