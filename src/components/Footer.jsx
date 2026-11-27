import { links } from '../constants';
import { useContent } from '../i18n';

// Footer with the MIT credit the template asks for, the profiles and the other language.
const Footer = () => {
  const { footer, ui } = useContent();
  const link =
    'text-french underline underline-offset-4 decoration-onyx hover:text-flashWhite hover:decoration-flashWhite rounded-[4px]';
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2e2e31]">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 font-poppins text-[14px] leading-[22px] text-taupe">
        <div className="flex flex-col gap-1">
          <p className="text-timberWolf font-semibold">{footer.copyright}</p>
          <p>
            {footer.creditBefore}
            <a href={links.template} target="_blank" rel="noopener noreferrer" className={link}>
              {footer.creditLink}
              <span className="sr-only"> {ui.newTab}</span>
            </a>
            {footer.creditAfter}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 list-none">
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              LinkedIn<span className="sr-only"> {ui.newTab}</span>
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={link}>
              GitHub<span className="sr-only"> {ui.newTab}</span>
            </a>
          </li>
          <li>
            <a
              href={footer.otherLanguage.href}
              hrefLang={footer.otherLanguage.hrefLang}
              lang={footer.otherLanguage.hrefLang}
              className={link}>
              {footer.otherLanguage.label}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
