import React, { useEffect } from "react";

import styles from "./index.module.css";

import Body from "./bodyParts/Body";
import Eyes from "./bodyParts/Eyes";
import Hands from "./bodyParts/Hands";

const Character = ({ emotion, movement }) => {
  console.log(`CHARACTER: i am now ${emotion}!`);
  return (
    <div className={styles.container}>
      <Body className={styles.body} emotion={emotion}>
        <Eyes className={styles.eye} emotion={emotion} />
        <Hands className={styles.hand} emotion={emotion} />
      </Body>
    </div>
  );
};

export default Character;
