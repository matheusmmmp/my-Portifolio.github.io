import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, profile } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, text, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        className="bg-jetLight rounded-[20px] py-6 px-6 min-h-[280px] flex justify-start
        items-center flex-col gap-4">
        <img src={icon} alt="" className="w-14 h-14 object-contain mt-2" />
        <h3 className="text-timberWolf text-[18px] font-bold text-center">
          {title}
        </h3>
        <p className="text-french text-[14px] leading-[21px] text-center">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={`mt-4 ${styles.bodyOnLight}`}>
        {profile.about}
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
