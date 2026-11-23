import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { contacts } from '../constants';
import myResume from '../assets/Matheus_de_Medeiros_Pereira_-_Data_Scientist.pdf';

const ContactCard = ({ index, title, icon, url }) => {
  const handleButtonClick = () => {
    if (title === 'E-mail') {
      window.open(`mailto:${url}`);
    } else if (url === 'resume') {
      window.open(myResume, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <button
        onClick={handleButtonClick}
        className="xs:w-[248px] w-full bg-jetLight rounded-[20px] py-5 px-12 xs:min-h-[240px] min-h-[150px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="" className="w-14 h-14 object-contain" />
        <h3 className="text-timberWolf text-[18px] font-bold text-center">
          {title}
        </h3>
      </button>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className="-mt-[6rem]">
      <p className={styles.sectionSubTextLight}>Get in touch</p>
      <h2 className={styles.sectionHeadTextLight}>Contact.</h2>
      <p className={`mt-4 ${styles.bodyOnDark}`}>
        I am looking for a data scientist role where models have to work in production.
        The fastest way to reach me is e-mail.
      </p>
      <div className="mt-14 flex flex-wrap gap-10">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.title} index={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
