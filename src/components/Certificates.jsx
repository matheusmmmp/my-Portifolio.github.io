import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { degreeImages, courseImages } from '../constants';
import { useContent } from '../i18n';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const DateBadge = ({ date }) => (
  <div className="absolute top-0 right-0 z-20 m-3">
    <div
      className="bg-night text-timberWolf text-[13px] font-semibold font-poppins
      tracking-[1px] rounded-full px-3 h-9 flex justify-center items-center opacity-[0.92]">
      {date}
    </div>
  </div>
);

const CertificateCard = ({ name, description, image, date, index }) => (
  <motion.li
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    className="relative lg:flex-[3.5] flex-none w-full lg:w-auto flex items-center justify-center min-w-[280px] lg:h-[420px] h-[320px] card-shadow list-none">
    <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>
    <img src={image} alt="" loading="lazy" className="absolute w-full h-full object-cover rounded-[24px]" />
    <DateBadge date={date} />
    <div className="absolute bottom-0 sm:p-8 p-5 justify-start w-full flex-col bg-[rgba(20,20,20,0.82)] rounded-b-[24px] z-20">
      <h3 className="font-bold sm:text-[25px] text-[22px] leading-[1.2] text-timberWolf uppercase font-beckman">{name}</h3>
      <p className="mt-1 text-silver sm:text-[14px] text-[13px] max-w-3xl sm:leading-[24px] leading-[20px] font-poppins tracking-[1px]">
        {description}
      </p>
    </div>
  </motion.li>
);

// Course card: the provider's logo stays whole in the upper part (object-contain),
// instead of being cropped behind the title as a full-bleed cover would be.
const CourseCard = ({ name, description, image, date, background, index }) => (
  <motion.li
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
    className="relative sm:flex-1 flex-none w-full min-w-[280px] sm:h-[300px] h-[280px] card-shadow overflow-hidden list-none"
    style={{ background }}>
    <img src={image} alt="" loading="lazy" className="absolute top-0 left-0 w-full sm:h-[196px] h-[176px] object-contain py-3" />
    <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5]"></div>
    <DateBadge date={date} />
    <div className="absolute bottom-0 sm:px-8 px-5 py-4 justify-start w-full flex-col bg-[rgba(20,20,20,0.9)] z-20">
      <h3 className="font-bold sm:text-[22px] text-[19px] leading-[1.2] text-timberWolf uppercase font-beckman">{name}</h3>
      <p className="mt-1 text-silver sm:text-[14px] text-[13px] sm:leading-[24px] leading-[20px] font-poppins tracking-[1px]">
        {description}
      </p>
    </div>
  </motion.li>
);

// Text with inline links, given as segments [{ t }, { t, href }].
const Segments = ({ parts, newTab }) =>
  parts.map((part) =>
    part.href ? (
      <a
        key={part.t}
        href={part.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-flashWhite underline underline-offset-4 decoration-dim hover:decoration-flashWhite rounded-[4px]">
        {part.t}
        <span className="sr-only"> {newTab}</span>
      </a>
    ) : (
      <span key={part.t}>{part.t}</span>
    )
  );

const Certificates = () => {
  const { education, ui } = useContent();
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{education.sub}</p>
        <h2 id="education-title" className={styles.sectionHeadTextLight}>
          {education.title}
        </h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className={`mt-4 ${styles.bodyOnDark}`}>
        {education.intro}
      </motion.p>

      <motion.ul
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto mt-[50px] flex lg:flex-row flex-col gap-5`}>
        {education.degrees.map((degree, index) => (
          <CertificateCard key={degree.name} index={index} image={degreeImages[index]} {...degree} />
        ))}
      </motion.ul>

      <div className="mt-12 rounded-[20px] glassmorphism sm:p-8 p-5">
        <h3 className="text-timberWolf font-semibold uppercase tracking-[2px] text-[16px] font-poppins">
          {education.outputsTitle}
        </h3>
        <ul className="mt-4 space-y-3 list-none">
          {education.outputs.map((parts) => (
            <li key={parts[0].t} className="flex gap-3 text-french text-[15.5px] leading-[26px] font-poppins">
              <span aria-hidden="true" className="mt-[10px] w-2 h-2 rounded-full bg-timberWolf shrink-0" />
              <span>
                <Segments parts={parts} newTab={ui.newTab} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-12 text-timberWolf font-semibold uppercase tracking-[2px] text-[16px] font-poppins">
        {education.coursesTitle}
      </h3>
      <motion.ul
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto mt-4 flex sm:flex-row flex-col gap-5`}>
        {education.courses.map((course, index) => (
          <CourseCard key={course.name} index={index} {...courseImages[index]} {...course} />
        ))}
      </motion.ul>

      <p className="mt-6 text-french text-[16px] leading-[28px] font-poppins">{education.other}</p>
    </div>
  );
};

export default SectionWrapper(Certificates, 'education');
