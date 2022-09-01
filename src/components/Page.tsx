import { ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles.module.css";
import { PageProps } from "../interfaces/ParalaxI";

export const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer
      offset={offset}
      speed={0.2}
      onClick={onClick}
    >
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer
      offset={offset}
      speed={0.6}
      onClick={onClick}
    >
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);
