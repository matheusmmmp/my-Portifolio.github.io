import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { contactIcons, links } from '../constants';
import { useContent } from '../i18n';

// Real links (they used to be buttons calling window.open), so they work with the
// keyboard, open in a new tab with the middle button and show their address.
const ContactCard = ({ index, title, icon, href, external, newTab }) => (
  <motion.li
    variants={fadeIn('right', 'spring', 0.3 * index, 0.75)}
    className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card list-none">
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="xs:w-[248px] w-full bg-jetLight rounded-[20px] py-5 px-12 xs:min-h-[240px] min-h-[150px]
      flex justify-evenly items-center flex-col hover:bg-[#3b3b3b] transition duration-[0.2s]">
      <img src={icon} alt="" className="w-14 h-14 object-contain" />
      <span className="text-timberWolf text-[18px] font-bold text-center">{title}</span>
      {external ? <span className="sr-only">{newTab}</span> : null}
    </a>
  </motion.li>
);

const Contact = () => {
  const { contact, resumePdf, ui } = useContent();
  const cards = [
    { title: contact.cards.email, icon: contactIcons.email, href: `mailto:${links.email}` },
    { title: contact.cards.linkedin, icon: contactIcons.linkedin, href: links.linkedin, external: true },
    { title: contact.cards.github, icon: contactIcons.github, href: links.github, external: true },
    { title: contact.cards.resume, icon: contactIcons.resume, href: resumePdf, external: true },
  ];
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{contact.sub}</p>
        <h2 id="contact-title" className={styles.sectionHeadTextLight}>
          {contact.title}
        </h2>
      </motion.div>
      <p className={`mt-4 ${styles.bodyOnDark}`}>{contact.text}</p>
      <ul className="mt-14 flex flex-wrap gap-10">
        {cards.map((card, index) => (
          <ContactCard key={card.title} index={index} newTab={ui.newTab} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
