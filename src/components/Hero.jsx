// Topo escolhido em 22/11/2026 (D-28/D-37): conteúdo inalterado. Na proposta v8 mudam só:
//   1. o nome no desktop passa de battleGray (#858585) para onyx (#5b5b5b), por contraste sobre o mapa;
//   2. os três passos também aparecem em telas menores, como linha compacta abaixo do texto
//      (`hero-steps-compact`; o bloco grande `hero-steps` continua igual na metade preta);
//   3. textos vêm de content.en/pt (i18n).
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useContent } from '../i18n';
import { bwmap, worldmap, download } from '../assets';

const Hero = () => {
  const { hero, resumePdf, ui } = useContent();
  const email = 'matheusmmmp@hotmail.com';

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img src={bwmap} alt="" className="w-full h-full sm:block hidden object-cover" />
      </div>
      <div className="absolute inset-0 z-0">
        <img src={worldmap} alt="" className="w-full h-full sm:hidden block object-cover" />
      </div>
      <section
        aria-label={hero.role}
        className="hero-section relative w-full min-h-screen mx-auto
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`hero-copy relative z-[1] w-full ${styles.paddingX}
          max-w-7xl mx-auto flex flex-row items-start gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3" aria-hidden="true">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="lg:max-w-[640px] sm:max-w-[520px]">
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              {hero.greeting}{' '}
              <span
                className="sm:text-onyx sm:text-[90px]
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Matheus Pereira
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              {hero.role}
              <br />
              {hero.focus}
            </p>
            <p className="mt-3 text-jet sm:text-[19px] text-[16px] leading-[28px] sm:max-w-[460px] max-w-[270px]">
              {hero.lead}
            </p>
            <p className="mt-2 text-jet sm:text-[15px] text-[13px] font-semibold tracking-wide sm:max-w-[460px] max-w-[250px]">
              {hero.meta}
            </p>

            <div className="mt-6 flex sm:flex-row flex-col items-start gap-3">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center gap-2
                sm:text-[18px] text-[15px] text-timberWolf font-bold font-beckman
                uppercase tracking-[1px] whitespace-nowrap py-3 px-4 rounded-[10px]
                bg-jetLight hover:bg-battleGray hover:text-eerieBlack
                transition duration-[0.2s] ease-in-out">
                {hero.resumeButton}
                <img src={download} alt="" className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-contain" />
                <span className="sr-only">{ui.newTab}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center sm:text-[18px] text-[15px] text-eerieBlack
                font-bold font-beckman uppercase tracking-[1px] whitespace-nowrap
                py-3 px-4 rounded-[10px] border-2 border-jetLight bg-flashWhite/70
                hover:bg-jetLight hover:text-timberWolf
                transition duration-[0.2s] ease-in-out">
                {hero.emailButton}
              </a>
            </div>

            {/* Compact steps: shown wherever the large block on the dark half is hidden (index.css). */}
            <div className="hero-steps-compact mt-7">
              <p className="font-beckman text-[12px] tracking-[2px] uppercase text-jet">
                {hero.stepsTitle}
                <span className="font-poppins normal-case tracking-normal text-onyx font-semibold">
                  {' '}
                  · {hero.context}
                </span>
              </p>
              <ol aria-label={hero.stepsAria} className="list-none mt-2 grid sm:grid-cols-3 grid-cols-1 gap-2">
                {hero.steps.map((step, index) => (
                  <li
                    key={step.label}
                    className="bg-jet/95 border border-onyx rounded-[10px] sm:px-3 px-3 sm:py-[10px] py-2
                    flex sm:flex-col flex-row sm:items-start items-baseline sm:gap-1 gap-3">
                    <span className="font-beckman text-[11px] leading-[14px] tracking-[2px] uppercase text-taupe whitespace-nowrap sm:min-w-0 min-w-[78px]">
                      <span className="text-timberWolf mr-[5px]">{String(index + 1).padStart(2, '0')}</span>
                      {step.label}
                    </span>
                    <span className="text-[13px] leading-[18px] font-semibold text-flashWhite">{step.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Dark half: how the models were run in production. Hidden on narrow or tall windows (see index.css). */}
        <div className="hero-steps font-poppins">
          <p className="hero-steps-title font-beckman text-[14px] tracking-[2px] uppercase text-timberWolf">
            {hero.stepsTitle}
          </p>
          <ol aria-label={hero.stepsAria} className="list-none">
            {hero.steps.map((step, index) => (
              <li
                key={step.label}
                className="hero-step bg-jet/80 border border-onyx rounded-[10px]
                px-4 text-right whitespace-nowrap overflow-hidden"
                style={{ '--i': index + 1 }}>
                <p className="font-beckman text-[12px] leading-[14px] tracking-[2px] uppercase text-taupe">
                  <span className="text-timberWolf mr-[6px]">{String(index + 1).padStart(2, '0')}</span>
                  {step.label}
                </p>
                <p className="hero-step-title font-semibold text-flashWhite">{step.title}</p>
                <p className="text-[13px] leading-[18px] text-french">{step.detail}</p>
              </li>
            ))}
          </ol>
          <div className="hero-steps-rail" aria-hidden="true" />
          {hero.steps.map((step, index) => (
            <span key={step.label} className="hero-step-dot" style={{ '--i': index + 1 }} aria-hidden="true" />
          ))}
          <div className="hero-steps-foot text-right">
            <p className="font-beckman text-[12px] tracking-[2px] uppercase text-taupe">{hero.context}</p>
            <a
              href="#work"
              className="block mt-[2px] text-[16px] font-semibold text-flashWhite underline underline-offset-4 hover:text-french">
              {hero.readMore}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <a href="#about" aria-label={ui.scrollHint}>
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4
              border-french border-dim flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
