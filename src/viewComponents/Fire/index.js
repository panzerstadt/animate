import React, { useEffect } from "react";

import styles from "./index.module.css";

import Body from "./bodyParts/Body";

const FireCharacter = ({ emotion, movement }) => {
  return (
    <div className={styles.container}>
      <Body className={styles.body} state={emotion} />
    </div>
  );
};

export default FireCharacter;
