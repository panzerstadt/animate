const movement = (state = [], action) => {
  switch (action.type) {
    case "LEFT":
      return [
        ...state,
        {
          movement: "left"
        }
      ];
    case "RIGHT":
      return [
        ...state,
        {
          movement: "right"
        }
      ];
    default:
      return state;
  }
};

export default movement;
