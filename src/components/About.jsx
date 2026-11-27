import { motion } from 'framer-motion';
import { styles } from '../styles';
import { pillarIcons } from '../constants';
import { useContent } from '../i18n';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// One identity, three pillars: each card proves one of them and links to the evidence.
const PillarCard = ({ index, icon, title, text, link }) => (
  <motion.li
    variants={fadeIn('up', 'spring', 0.2 * index, 0.75)}
    className="card-gradient p-[1px] rounded-[20px] shadow-card list-none">
    <div className="bg-jetLight rounded-[20px] p-7 h-full flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img src={pillarIcons[icon]} alt="" className="w-12 h-12 object-contain" />
        <span className="font-beckman text-[13px] tracking-[2px] text-taupe">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="text-timberWolf text-[20px] leading-[27px] font-bold">{title}</h3>
      <p className="text-french text-[15px] leading-[24px] flex-1">{text}</p>
      <a
        href={link.href}
        className="self-start text-[15px] font-semibold text-flashWhite underline underline-offset-4
        decoration-dim hover:decoration-flashWhite rounded-[4px]">
        {link.label} →
      </a>
    </div>
  </motion.li>
);

const About = () => {
  const { about } = useContent();
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{about.sub}</p>
        <h2 id="about-title" className={styles.sectionHeadText}>
          {about.title}
        </h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className={`mt-4 ${styles.bodyOnLight}`}>
        {about.text}
      </motion.p>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3 grid-cols-1">
        {about.pillars.map((pillar, index) => (
          <PillarCard key={pillar.title} index={index} {...pillar} />
        ))}
      </ul>
    </div>
  );
};

export default SectionWrapper(About, 'about');
