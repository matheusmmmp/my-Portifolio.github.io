import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experienceIcons } from '../constants';
import { useContent } from '../i18n';
import { SectionWrapper } from '../hoc';
import { download, resume } from '../assets';
import { textVariant } from '../utils/motion';

const cardStyle = {
  background: '#eaeaec',
  color: '#292929',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
};

const ExperienceCard = ({ experience, icon, iconBg }) => (
  <VerticalTimelineElement
    contentStyle={cardStyle}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={
      // The date is a label, not a heading (it used to be an h3).
      <span
        className="inline-block bg-[#eaeaec] text-jet text-[17px] font-bold
        font-beckman rounded-[8px] px-3 py-1">
        {experience.date}
      </span>
    }
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={icon} alt="" className="w-[60%] h-[60%] object-contain" />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">{experience.title}</h3>
      <p className="text-dim text-[18px] font-semibold font-beckman tracking-[1px]" style={{ margin: 0 }}>
        {experience.company}
      </p>
    </div>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point) => (
        <li key={point} className="text-jet text-[14px] leading-[22px] pl-1 font-poppins">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { experience, resumePdf, ui } = useContent();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>{experience.sub}</p>
        <h2 id="work-title" className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          {experience.title}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line" animate={false}>
          {experience.items.map((item, index) => (
            <ExperienceCard key={item.title} experience={item} {...experienceIcons[index]} />
          ))}
          <VerticalTimelineElement
            contentStyle={{ ...cardStyle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img src={resume} alt="" className="w-[45%] h-[45%] object-contain" />
              </div>
            }>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center gap-2
              sm:text-[18px] text-[14px] text-timberWolf font-bold font-beckman uppercase
              py-3 px-4 whitespace-nowrap rounded-[10px] bg-jetLight
              hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out">
              {experience.resumeButton}
              <img src={download} alt="" className="sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain" />
              <span className="sr-only">{ui.newTab}</span>
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
