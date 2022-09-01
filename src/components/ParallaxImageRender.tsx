import React, { useRef } from "react";
import { Parallax, IParallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../index.module.css";

export const ParallaxImageRender = () => {
  const parallax = useRef<IParallax>(null);
  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax ref={parallax} pages={4} className={styles.container}>
        <ParallaxLayer offset={1} speed={2} className={styles.first_image}>
          <div>Texto 1</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}>
          <div>Texto 2</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2}>
          <div>Texto 3</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
