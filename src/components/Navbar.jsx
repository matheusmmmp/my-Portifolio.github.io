import { useEffect, useRef, useState } from 'react';
import { styles } from '../styles';
import { useContent } from '../i18n';
import { close, menu, logo, logotext } from '../assets';

// The big menu font (Arenq) has no accented letters: an "É" falls back to another
// typeface. The full-screen menu therefore shows the labels without accents.
const withoutAccents = (text) => text.normalize('NFD').replace(/\p{M}/gu, '');

// Scales with the screen so the longest item ("Case studies") keeps a margin on
// narrow phones; 46px from 460px of width up.
const menuItemText = 'text-[length:clamp(28px,10vw,46px)] leading-[1.1] font-bold font-arenq';

const languages = [
  { code: 'en', label: 'EN', href: '/', hrefLang: 'en', name: 'English' },
  { code: 'pt', label: 'PT', href: '/pt/', hrefLang: 'pt-BR', name: 'Português' },
];

const LanguageSwitch = ({ current, label, className = '' }) => (
  <div role="group" aria-label={label} className={`flex items-center gap-1 ${className}`}>
    {languages.map((language, index) => (
      <span key={language.code} className="flex items-center gap-1">
        {index > 0 ? (
          <span aria-hidden="true" className="text-dim">
            /
          </span>
        ) : null}
        <a
          href={language.href}
          hrefLang={language.hrefLang}
          lang={language.hrefLang}
          aria-label={language.name}
          aria-current={current === language.code ? 'page' : undefined}
          className={`px-1 rounded-[4px] ${
            current === language.code ? 'text-eerieBlack underline underline-offset-4' : 'text-dim hover:text-eerieBlack'
          }`}>
          {language.label}
        </a>
      </span>
    ))}
  </div>
);

const Navbar = () => {
  const { nav, ui, lang, path, resumePdf } = useContent();
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  // Mova draws accented capitals without the accent (Ê, Ç, Ã): the Portuguese menu uses Beckman.
  const navFont = lang === 'pt' ? 'font-beckman' : 'font-mova';

  // Escape closes the phone menu and gives the focus back to the button.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav
      aria-label={lang === 'pt' ? 'Principal' : 'Main'}
      className={`${styles.paddingX} w-full flex items-center py-2 fixed
      top-0 z-20 bg-flashWhite sm:opacity-[0.97]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href={path}
          aria-label={ui.home}
          className="flex items-center gap-2"
          onClick={(event) => {
            event.preventDefault();
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="" className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain" />
          <img
            src={logotext}
            alt=""
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </a>

        <ul className="list-none hidden xl:flex flex-row items-center 2xl:gap-9 gap-6 mt-2">
          {nav.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.id ? 'text-dim' : 'text-eerieBlack'
              } hover:text-dim 2xl:text-[19px] text-[16px] font-medium ${navFont}
                uppercase tracking-[2px] nav-links whitespace-nowrap`}>
              <a href={`#${item.id}`} onClick={() => setActive(item.id)}>
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-jetLight text-timberWolf 2xl:text-[17px] text-[15px]
              font-bold font-beckman uppercase tracking-[2px] rounded-[10px]
              px-4 py-2 hover:bg-battleGray hover:text-eerieBlack
              transition duration-[0.2s] ease-in-out whitespace-nowrap">
              {ui.resume}
              <span className="sr-only"> {ui.newTab}</span>
            </a>
          </li>
          <li className="font-mova text-[16px] tracking-[2px] uppercase">
            <LanguageSwitch current={lang} label={ui.language} />
          </li>
        </ul>

        {/* phone and tablet */}
        <div className="xl:hidden flex flex-1 justify-end items-center gap-4">
          <LanguageSwitch
            current={lang}
            label={ui.language}
            className="font-mova text-[16px] tracking-[2px] uppercase"
          />
          <button
            ref={toggleRef}
            type="button"
            aria-label={ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="p-1 rounded-[6px]">
            <img src={menu} alt="" className="w-[34px] h-[34px] object-contain" />
          </button>

          {open ? (
            <div
              id="mobile-menu"
              className="p-6 bg-flashWhite opacity-[0.98] fixed top-0 left-0 w-screen h-[100dvh] z-30 overflow-y-auto">
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label={ui.closeMenu}
                  autoFocus
                  onClick={() => {
                    setOpen(false);
                    toggleRef.current?.focus();
                  }}
                  className="p-2 rounded-[6px]">
                  <img src={close} alt="" className="w-[22px] h-[22px] object-contain" />
                </button>
              </div>
              <ul className="list-none flex flex-col gap-2 items-start justify-end mt-[3.5rem]">
                {nav.map((item) => (
                  <li
                    key={item.id}
                    className={`${
                      active === item.id ? 'text-dim' : 'text-eerieBlack'
                    } ${menuItemText} uppercase tracking-[1px]`}>
                    <a
                      href={`#${item.id}`}
                      lang={lang === 'pt' ? 'pt-BR' : 'en'}
                      aria-label={item.title}
                      onClick={() => {
                        setOpen(false);
                        setActive(item.id);
                      }}>
                      {withoutAccents(item.title)}
                    </a>
                  </li>
                ))}
                <li className={`${menuItemText} uppercase tracking-[1px] text-eerieBlack`}>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer" aria-label={`${ui.resume} ${ui.newTab}`}>
                    {withoutAccents(ui.resume)}
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
