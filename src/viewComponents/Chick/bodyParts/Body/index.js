import React, { useReducer, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./index.module.css";

import useInterval from "../../../../hooks/useInterval";
import reducer from "./reducer";

// what can this body part do?
const Body = ({ emotion, className, children }) => {
  const [bodyState, dispatch] = useReducer(reducer, [
    { outer: {}, inner: {}, animationVariant: {}, speed: 700 }
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
      <motion.div
        className={styles.container}
        animate={toggle ? "one" : "two"}
        variants={lastAction.animationVariant.outer}
      >
        <img className={styles.outer} src={lastAction.outer} alt="outer body" />
        {/* <motion.img
          className={styles.inner}
          src={lastAction.inner}
          alt="outer body"
          animate={toggle ? "one" : "two"}
          variants={lastAction.animationVariant.inner}
        /> */}
        {children}
      </motion.div>
    </div>
  );
};

export default Body;
