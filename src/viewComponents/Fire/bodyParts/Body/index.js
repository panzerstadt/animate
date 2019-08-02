import React, { useReducer, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./index.module.css";

import useInterval from "../../../../hooks/useInterval";
import reducer from "./reducer";

// what can this body part do?
const Body = ({ state }) => {
  const [bodyState, dispatch] = useReducer(reducer, [
    { outer: {}, inner: {}, animationVariant: {} }
  ]);

  useEffect(() => {
    dispatch({ type: "NEUTRAL" });
  }, []);

  const lastAction = bodyState.slice(-1)[0];

  const [toggle, setToggle] = useState(true);
  useInterval(() => {
    setToggle(p => !p);
  }, 700);

  return (
    <div className={styles.container}>
      <motion.img
        className={styles.outer}
        src={lastAction.outer}
        alt="outer body"
        animate={toggle ? "one" : "two"}
        variants={lastAction.animationVariant.outer}
      />
      <motion.img
        className={styles.inner}
        src={lastAction.inner}
        alt="outer body"
        animate={toggle ? "one" : "two"}
        variants={lastAction.animationVariant.inner}
      />
    </div>
  );
};

export default Body;
