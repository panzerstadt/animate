import React, { useEffect } from "react";

import styles from "./index.module.css";

import Body from "./bodyParts/Body";
import Eye from "./bodyParts/Eyes";

const FireCharacter = ({ emotion, movement }) => {
  console.log(`FIRE CHARACTER: i am now ${emotion}!`);
  return (
    <div className={styles.container}>
      <Eye className={styles.eye} emotion={emotion} />
      <Body className={styles.body} emotion={emotion} />
    </div>
  );
};

export default FireCharacter;
