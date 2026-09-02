import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { certificates } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const CertificateCard = ({
  name,
  description,
  image,
  date,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative lg:flex-[3.5] flex-[10] flex items-center justify-center min-w-[300px] h-[420px] cursor-pointer card-shadow"
    >
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>
      <img src={image} alt={name} className="absolute w-full h-full object-cover rounded-[24px]" />
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">    
      <div className="absolute inset-0 flex justify-end m-3">
          <div            
            className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
          >
            {date}
          </div>
        </div>   
        <h2 className="font-bold sm:text-[27px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
          {name}
        </h2>
        <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
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
        <p className={`${styles.sectionSubText} `}>My Study Journey</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          A Bachelor&apos;s degree in Computer Science and a postgraduate degree in Data Science, followed by cloud
          certifications from Google Cloud and AWS. I am currently completing a Master&apos;s in Computer Science at UFSC,
          where my research applies deep learning to time-series forecasting.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} index={index} {...certificate} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certificates, 'certificates');
