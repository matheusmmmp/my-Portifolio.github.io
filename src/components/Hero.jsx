// Topo escolhido em 22/11/2026 (D-28): opção A (fluxo do trabalho em produção) + frase 2.
// Parte do Hero.jsx da proposta v2 (site-pranchas/proposta_v2_src). O que muda em relação a ela:
//   1. o bloco de texto sai do posicionamento absoluto e entra no fluxo (classe `hero-copy`), e a seção
//      troca h-screen por min-h-screen: em janela baixa a seção cresce em vez de cortar os botões;
//   2. os dois mapas de fundo ficam num invólucro `relative` e ocupam a altura da seção;
//   3. a classe `hero-section` na seção (em tablet em pé o corte usa o gradiente do celular);
//   4. o bloco `hero-steps` com os quatro passos, na metade preta.
// Depende de: `profile` e `production` em constants/index.js e do trecho de CSS em index.css
// (arquivos constants.trecho.js e index.trecho.css desta pasta).
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { profile, production } from '../constants';
import { bwmap, worldmap, download } from '../assets';
import myResume from '../assets/Matheus_de_Medeiros_Pereira_-_Data_Scientist.pdf';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src={bwmap}
          alt=""
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={worldmap}
          alt=""
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="hero-section relative w-full min-h-screen mx-auto
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`hero-copy relative z-[1] w-full ${styles.paddingX}
          max-w-7xl mx-auto flex flex-row items-start gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="lg:max-w-[640px] sm:max-w-[520px]">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I&apos;m{' '}
              <span
                className="sm:text-battleGray sm:text-[90px]
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Matheus Pereira
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              {profile.role}
              <br />
              {profile.focus}
            </p>
            <p className="mt-3 text-jet sm:text-[19px] text-[16px] leading-[28px] sm:max-w-[460px] max-w-[250px]">
              {profile.lead}
            </p>
            <p className="mt-2 text-jet sm:text-[15px] text-[13px] font-semibold tracking-wide sm:max-w-[460px] max-w-[230px]">
              {profile.meta}
            </p>

            <div className="mt-6 flex sm:flex-row flex-col items-start gap-3">
              <a
                href={myResume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center gap-2
                sm:text-[18px] text-[15px] text-timberWolf font-bold font-beckman
                uppercase tracking-[1px] whitespace-nowrap py-3 px-4 rounded-[10px]
                bg-jetLight hover:bg-battleGray hover:text-eerieBlack
                transition duration-[0.2s] ease-in-out">
                My resume
                <img
                  src={download}
                  alt=""
                  className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-contain"
                />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center sm:text-[18px] text-[15px] text-eerieBlack
                font-bold font-beckman uppercase tracking-[1px] whitespace-nowrap
                py-3 px-4 rounded-[10px] border-2 border-jetLight bg-flashWhite/70
                hover:bg-jetLight hover:text-timberWolf
                transition duration-[0.2s] ease-in-out">
                Email me
              </a>
            </div>
          </div>
        </div>

        {/* Dark half: how the models were run in production. Hidden on narrow or tall windows (see index.css). */}
        <div className="hero-steps font-poppins">
          <p className="hero-steps-title font-beckman text-[14px] tracking-[2px] uppercase text-timberWolf">
            Models in production
          </p>
          <ol aria-label="How I ran models in production" className="list-none">
            {production.steps.map((step, index) => (
              <li
                key={step.label}
                className="hero-step bg-jet/80 border border-onyx rounded-[10px]
                px-4 text-right whitespace-nowrap overflow-hidden"
                style={{ '--i': index + 1 }}>
                <p className="font-beckman text-[12px] leading-[14px] tracking-[2px] uppercase text-taupe">
                  <span className="text-timberWolf mr-[6px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {step.label}
                </p>
                <p className="hero-step-title font-semibold text-flashWhite">
                  {step.title}
                </p>
                <p className="text-[13px] leading-[18px] text-french">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
          <div className="hero-steps-rail" aria-hidden="true" />
          {production.steps.map((step, index) => (
            <span
              key={step.label}
              className="hero-step-dot"
              style={{ '--i': index + 1 }}
              aria-hidden="true"
            />
          ))}
          <div className="hero-steps-foot text-right">
            <p className="font-beckman text-[12px] tracking-[2px] uppercase text-taupe">
              {production.context}
            </p>
            <a
              href="#work"
              className="block mt-[2px] text-[16px] font-semibold text-flashWhite underline underline-offset-4 hover:text-french">
              Read the full experience ↓
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-10 w-full
          flex justify-center items-center">
          <a href="#about" aria-label="Scroll to the overview">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
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
