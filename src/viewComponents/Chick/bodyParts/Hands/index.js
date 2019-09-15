import React, { useReducer, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./index.module.css";

import useInterval from "../../../../hooks/useInterval";
import reducer from "./reducer";

// what can this body part do?
const Hand = ({ emotion, className }) => {
  const [bodyState, dispatch] = useReducer(reducer, [
    { assets: {}, animationVariant: {}, speed: 700 }
  ]);

  useEffect(() => {
    switch (emotion) {
      case "happy":
        dispatch({ type: "HAPPY" });
        break;
      default:
        dispatch({ type: "NEUTRAL" });
        break;
    }
  }, [emotion]);

  const lastAction = bodyState.slice(-1)[0];

  const [toggle, setToggle] = useState(true);
  useInterval(() => {
    setToggle(p => !p);
  }, lastAction.speed || 300);

  return (
    <div className={className}>
      <div className={styles.container}>
        <motion.img
          className={styles.leftHand}
          src={lastAction.assets.eyeLeft}
          alt="left hand"
          animate={toggle ? "one" : "two"}
          variants={lastAction.animationVariant.left}
        />
        <motion.img
          className={styles.rightHand}
          src={lastAction.assets.eyeRight}
          alt="right hand"
          animate={toggle ? "one" : "two"}
          variants={lastAction.animationVariant.right}
        />
      </div>
    </div>
  );
};

export default Hand;
