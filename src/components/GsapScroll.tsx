import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../styles.module.css";

export const GsapScroll = () => {
  const box = useRef(null);
  const asd = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(box.current, {
      scrollTrigger: {
        trigger: box.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart none none none",
        markers: true,
      },
      backgroundColor: "red",
      duration: 2,
      ease: "none",
    });
    gsap.to(asd.current, {
      scrollTrigger: {
        trigger: asd.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart none none none",
        markers: true,
      },
      backgroundColor: "blue",
      duration: 2,
      ease: "none",
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className="box" ref={box}>
        <h1>Scroll Trigger</h1>
      </div>
      <div className="box" ref={asd}>
        <h1>Scroll Trigger</h1>
      </div>
    </div>
  );
};
