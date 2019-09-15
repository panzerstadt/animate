import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import useHover from "../hooks/useHover";
import useInterval from "../hooks/useInterval";
import Character from "../viewComponents/Chick";

// 1. connect the global state with the character
// 2. define what the character can do
// 3. export
const Chick = ({ emotion, movement, ...props }) => {
  // this is a component that joins what the character looks like as well as
  // what are the actions that a character can do and exports it as a
  // complete character

  //   const [bipolar, setBipolar] = useState(false);
  //   useInterval(() => {
  //     setBipolar(p => !p);
  //   }, 5000);

  //   useEffect(() => {
  //     bipolar ? props.becomeNeutral() : props.becomeHappy();
  //   }, [bipolar]);

  const ref = useRef();
  const hover = useHover(ref);
  useEffect(() => {
    hover ? props.becomeHappy() : props.becomeNeutral();
  }, [hover]);

  console.log("CHICK COMPONENT: ", emotion.emotion);
  return (
    <div ref={ref}>
      <Character emotion={emotion.emotion} movement={movement.movement} />
    </div>
  );
};

const mapStateToProps = state => {
  // last item in state. possible to grab sequence
  return {
    emotion: state.emotion.length > 0 && state.emotion.slice(-1)[0],
    movement: state.movement.length > 0 && state.movement.slice(-1)[0]
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
)(Chick);
