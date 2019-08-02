import React, { useEffect } from "react";
import { connect } from "react-redux";

import useInterval from "../hooks/useInterval";
import FireCharacter from "../viewComponents/Fire";

// 1. connect the global state with the character
// 2. define what the character can do
// 3. export
const Fire = ({ emotion, movement, ...props }) => {
  // this is a component that joins what the fire looks like as well as
  // what are the actions that a fire can do and exports it as a
  // complete fire character
  console.log(props);
  // useInterval(() => {
  //   props.becomeHappy();
  // }, 3000);

  useEffect(() => {
    props.becomeNeutral();
  }, []);

  console.log(emotion);
  console.log(movement);
  return (
    <FireCharacter emotion={emotion.emotion} movement={movement.movement} />
  );
};

const mapStateToProps = state => {
  return {
    emotion: state.emotion,
    movement: state.movement
  };
};

const mapDispatchToProps = dispatch => {
  return {
    becomeHappy: () =>
      dispatch({
        type: "HAPPY"
      }),
    becomeNeutral: () =>
      dispatch({
        type: "NEUTRAL"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fire);
