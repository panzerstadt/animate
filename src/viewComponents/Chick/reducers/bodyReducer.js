import OUTER_BODY from "../assets/chick_body.png";

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
        x: 0,
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
          outer: OUTER_BODY,
          //   inner: INNER_BODY_HAPPY,
          animationVariant: variants.happy,
          speed: 150
        }
      ];
    default:
      return [
        ...state,
        {
          outer: OUTER_BODY,
          //   inner: INNER_BODY_NEUTRAL,
          animationVariant: variants.neutral,
          speed: 800
        }
      ];
  }
};

export default reducer;
