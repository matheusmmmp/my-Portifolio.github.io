import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { useContent } from '../i18n';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

// three.js and the balls live in their own chunk, fetched the first time the
// section gets near the screen.
const BallsCanvas = lazy(() => import('./canvas/Ball'));

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Tech = () => {
  const { tech } = useContent();
  const icons = useMemo(() => technologies.map((technology) => technology.icon), []);
  const grid = useRef(null);
  const slots = useRef([]); // DOM element that reserves each ball's place
  const centers = useRef([]); // each ball's centre (from the grid's corner) and radius, in pixels
  const spins = useRef(technologies.map(() => ({ x: 0, y: 0 })));
  const drag = useRef(null);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const still = useMemo(prefersReducedMotion, []);

  // Keep the centres in step with the layout. offsetLeft/offsetTop ignore the
  // section's entrance animation (a transform), which is what we want: the canvas
  // moves with the grid.
  useEffect(() => {
    const measure = () => {
      centers.current = slots.current.map((slot) => ({
        x: slot.offsetLeft + slot.offsetWidth / 2,
        y: slot.offsetTop + slot.offsetHeight / 2,
        radius: slot.offsetWidth * 0.41,
      }));
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(grid.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Load the canvas the first time the grid comes near the screen, and draw the
  // balls only while it stays near.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: '400px' }
    );
    observer.observe(grid.current);
    return () => observer.disconnect();
  }, []);

  const onPointerDown = (index) => (event) => {
    drag.current = { index, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event) => {
    if (!drag.current) return;
    const spin = spins.current[drag.current.index];
    spin.y += (event.clientX - drag.current.x) * 0.012;
    spin.x += (event.clientY - drag.current.y) * 0.012;
    drag.current.x = event.clientX;
    drag.current.y = event.clientY;
  };
  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{tech.sub}</p>
        <h2 id="tech-title" className={styles.sectionHeadTextLight}>
          {tech.title}
        </h2>
      </motion.div>

      <div ref={grid} className="relative mt-10">
        <ul className="flex flex-wrap justify-center sm:gap-x-8 gap-x-3 gap-y-6 list-none">
          {technologies.map((technology, index) => (
            <li className="sm:w-28 w-24 flex flex-col items-center" key={technology.name}>
              <div
                ref={(element) => {
                  slots.current[index] = element;
                }}
                aria-hidden="true"
                onPointerDown={onPointerDown(index)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="sm:w-28 sm:h-28 w-24 h-24 cursor-grab active:cursor-grabbing touch-pan-y select-none"
              />
              <p className="text-french sm:text-[15px] text-[13px] font-semibold font-poppins tracking-[1px] -mt-1 text-center whitespace-nowrap">
                {technology.name}
              </p>
            </li>
          ))}
        </ul>
        {loaded ? (
          <Suspense fallback={null}>
            <BallsCanvas
              icons={icons}
              centers={centers}
              spins={spins}
              drag={drag}
              active={active}
              still={still}
            />
          </Suspense>
        ) : null}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
