import React, { useReducer, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./index.module.css";

import useInterval from "../../../../hooks/useInterval";
import reducer from "../../reducers";

// what can this body part do?
const Feet = ({ emotion, className }) => {
  const [bodyState, dispatch] = useReducer(reducer.feet, [
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
          className={styles.leftFoot}
          src={lastAction.assets.eyeLeft}
          alt="left foot"
          animate={toggle ? "one" : "two"}
          variants={lastAction.animationVariant.left}
        />
        <motion.img
          className={styles.rightFoot}
          src={lastAction.assets.eyeRight}
          alt="right foot"
          animate={toggle ? "one" : "two"}
          variants={lastAction.animationVariant.right}
        />
      </div>
    </div>
  );
};

export default Feet;
