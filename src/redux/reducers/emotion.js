const emotion = (state = [], action) => {
  switch (action.type) {
    case "HAPPY":
      return [
        ...state,
        {
          emotion: "happy"
        }
      ];
    case "NEUTRAL":
      return [
        ...state,
        {
          emotion: "neutral"
        }
      ];
    default:
      return state;
  }
};

export default emotion;
