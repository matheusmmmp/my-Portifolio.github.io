import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import {  contacts } from '../constants';

const ContactCard = ({ index, title, icon, url }) => {
  const isEmail = title === 'E-mail';

  const handleButtonClick = () => {
    if (isEmail) {
      window.open(`mailto:${url}`);
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
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        className="xs:w-[248px] w-full bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>     
      </button>
    </motion.div>
   
  );
};

const Contact = () => {
  return (
        <div className="-mt-[6rem]">   
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <div className="mt-20 flex flex-wrap gap-10">   
        {contacts.map((contact, index) => (
          <ContactCard key={contact.title} index={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
