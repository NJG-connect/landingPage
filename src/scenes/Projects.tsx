import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { useSprings, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import projectsImage, { projectsImageType } from "../assets/images/projects";
import ContentIsVisible from "../hooks/useElementIsVisible";
import projectsJson from '../utils/projects.json';

const formatCards = projectsJson.map((el, index) => ({ ...el, image: projectsImage[el.keyPhoto as projectsImageType] }));
const cards = formatCards.reverse();

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: any) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Projects() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [currentCard, setCurrentCard] = useState(cards.length - 1)
  const [isVisible, setVisible] = useState(false);
  const visible = ContentIsVisible(styles.projects);
  useEffect(() => {
    if (isVisible === false) {
      if (visible) {
        setVisible(true);
      }
      return
    }
    return
  }, [isVisible, visible])

  const [cardsSate, set] = useSprings(isVisible ? cards.length : 0, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      // @ts-ignore
      set((i: any) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit

        if (isGone) {
          if (index === currentCard) {
            if (index === 0) {
              setCurrentCard(cards.length - 1)
            } else {
              setCurrentCard(index - 1)
            }
          } else {
            // @ts-ignore
            setTimeout(() => void gone.delete(index) || set((i: any) => i === index && to(i)), 600);
          }
        }

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length) {
        // @ts-ignore
        setTimeout(() => void gone.clear() || set((i: any) => to(i)), 600);
      }
    }
  );
  return (
    <div id={styles.projects}>
      <div id={styles.container}>
        <h2 className={styles.title}>NOS RÉALISATION</h2>
        <div className={styles.content} >
          {cardsSate.map(({ x, y, rot, scale }, i) => {
            return (
              <animated.div
                key={i}
                className={styles.card}
                style={{
                  transform: interpolate(
                    [x, y],
                    (x, y) => `translate3d(${x}px,${y}px,0)`
                  ),
                }}
              >
                <animated.div
                  className={styles.cardContent}
                  {...bind(i)}
                  style={{
                    transform: interpolate([rot, scale], trans),
                    backgroundImage: `url(${cards[i].image})`,
                  }}
                />
              </animated.div>
            )
          })}
          <div className={styles.contentDesc}>
            <p className={styles.titleCard}>{cards[currentCard].title}</p>
            <p className={styles.description}>{cards[currentCard].description}</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Projects;
