import HAPPY_LEFT from "../../../assets/happy/eye-left.png";
import HAPPY_RIGHT from "../../../assets/happy/eye-right.png";

import NEUTRAL_LEFT_EYE from "../../../assets/neutral/eye-left.png";
import NEUTRAL_RIGHT_EYE from "../../../assets/neutral/eye-right.png";
import NEUTRAL_LEFT_EYEBROW from "../../../assets/neutral/eyebrow-left.png";
import NEUTRAL_RIGHT_EYEBROW from "../../../assets/neutral/eyebrow-right.png";

const variants = {
  neutral: {
    outer: {
      one: {
        x: 0,
        y: 0
      },
      two: {
        x: 0,
        y: 10
      }
    },
    inner: {
      one: {
        x: 0,
        y: 0,
        rotate: 0
      },
      two: {
        x: 5,
        y: 10,
        rotate: 5
      }
    }
  },
  happy: {
    outer: {
      one: {
        x: 0,
        y: 0
      },
      two: {
        x: -10,
        y: 20
      }
    },
    inner: {
      one: {
        x: 0,
        y: 0,
        rotate: 0
      },
      two: {
        x: -15,
        y: 20,
        rotate: -5
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
            eyeLeft: HAPPY_LEFT,
            eyeRight: HAPPY_RIGHT,
            eyebrowLeft: "",
            eyebrowRight: ""
          },
          animationVariant: variants.happy,
          speed: 500
        }
      ];
    default:
      return [
        ...state,
        {
          assets: {
            eyeLeft: NEUTRAL_LEFT_EYE,
            eyeRight: NEUTRAL_RIGHT_EYE,
            eyebrowLeft: NEUTRAL_LEFT_EYEBROW,
            eyebrowRight: NEUTRAL_RIGHT_EYEBROW
          },
          animationVariant: variants.neutral,
          speed: 800
        }
      ];
  }
};

export default reducer;
