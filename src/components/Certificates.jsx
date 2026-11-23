import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { certificates, courses, otherCourses } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const CertificateCard = ({ name, description, image, date, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative lg:flex-[3.5] flex-none w-full lg:w-auto flex items-center justify-center min-w-[280px] lg:h-[420px] h-[320px] card-shadow">
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>
      <img
        src={image}
        alt=""
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      <div className="absolute top-0 right-0 z-20 m-3">
        <div
          className="bg-night text-timberWolf text-[13px] font-semibold font-poppins
          tracking-[1px] rounded-full px-3 h-9 flex justify-center items-center opacity-[0.92]">
          {date}
        </div>
      </div>
      <div className="absolute bottom-0 sm:p-8 p-5 justify-start w-full flex-col bg-[rgba(20,20,20,0.82)] rounded-b-[24px] z-20">
        <h3 className="font-bold sm:text-[25px] text-[22px] leading-[1.2] text-timberWolf uppercase font-beckman">
          {name}
        </h3>
        <p className="mt-1 text-silver sm:text-[14px] text-[13px] max-w-3xl sm:leading-[24px] leading-[20px] font-poppins tracking-[1px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Course card: the provider's logo stays whole in the upper part (object-contain),
// instead of being cropped behind the title as a full-bleed cover would be.
const CourseCard = ({ name, description, image, date, background, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative sm:flex-1 flex-none w-full min-w-[280px] sm:h-[300px] h-[280px] card-shadow overflow-hidden"
      style={{ background }}>
      <img
        src={image}
        alt=""
        className="absolute top-0 left-0 w-full sm:h-[196px] h-[176px] object-contain py-3"
      />
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5]"></div>
      <div className="absolute top-0 right-0 z-20 m-3">
        <div
          className="bg-night text-timberWolf text-[13px] font-semibold font-poppins
          tracking-[1px] rounded-full px-3 h-9 flex justify-center items-center opacity-[0.92]">
          {date}
        </div>
      </div>
      <div className="absolute bottom-0 sm:px-8 px-5 py-4 justify-start w-full flex-col bg-[rgba(20,20,20,0.9)] z-20">
        <h3 className="font-bold sm:text-[22px] text-[19px] leading-[1.2] text-timberWolf uppercase font-beckman">
          {name}
        </h3>
        <p className="mt-1 text-silver sm:text-[14px] text-[13px] sm:leading-[24px] leading-[20px] font-poppins tracking-[1px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My study journey</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Education.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className={`mt-4 ${styles.bodyOnDark}`}>
          A Bachelor&apos;s degree in Computer Science, a postgraduate diploma in Data Science
          and an MSc in Computer Science in progress at UFSC, where my research is a
          reproducible benchmark for time-series forecasting.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col gap-5">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} index={index} {...certificate} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <h3 className="mt-12 text-timberWolf font-semibold uppercase tracking-[2px] text-[16px] font-poppins">
          Courses
        </h3>
        <div className="mt-4 flex sm:flex-row flex-col gap-5">
          {courses.map((course, index) => (
            <CourseCard key={course.id} index={index} {...course} />
          ))}
        </div>
      </motion.div>

      <p className="mt-6 text-french text-[16px] leading-[28px] font-poppins">
        Also: {otherCourses}
      </p>
    </div>
  );
};

export default SectionWrapper(Certificates, 'certificates');
