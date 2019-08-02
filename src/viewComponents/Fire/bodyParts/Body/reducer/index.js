import INNER_BODY_NEUTRAL from "../../../assets/neutral/body-inner.png";
import INNER_BODY_HAPPY from "../../../assets/happy/body-inner.png";
import OUTER_BODY_NEUTRAL from "../../../assets/neutral/body-outer.png";
import OUTER_BODY_HAPPY from "../../../assets/happy/body-outer.png";

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
        x: 15,
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
          outer: OUTER_BODY_HAPPY,
          inner: INNER_BODY_HAPPY,
          animationVariant: variants.happy
        }
      ];
    default:
      return [
        ...state,
        {
          outer: OUTER_BODY_NEUTRAL,
          inner: INNER_BODY_NEUTRAL,
          animationVariant: variants.neutral
        }
      ];
  }
};

export default reducer;
