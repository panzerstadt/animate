import React, { useEffect } from "react";

import styles from "./index.module.css";

import Body from "./bodyParts/Body";
import Eyes from "./bodyParts/Eyes";
import Hands from "./bodyParts/Hands";
import Feet from "./bodyParts/Feet";

const Character = ({ emotion, movement }) => {
  return (
    <div className={styles.container}>
      <Body className={styles.body} emotion={emotion}>
        <Eyes className={styles.eye} emotion={emotion} />
        <Hands className={styles.hand} emotion={emotion} />
      </Body>
      <Feet className={styles.feet} emotion={emotion} />
    </div>
  );
};

export default Character;
