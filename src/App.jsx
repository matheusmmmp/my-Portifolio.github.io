import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Projects,
  Certificates,
} from './components';
import { LangContext, contents, langFromPath, applyDocumentLanguage } from './i18n';

const App = () => {
  const content = contents[langFromPath(window.location.pathname)];

  useEffect(() => {
    applyDocumentLanguage(content);
  }, [content]);

  return (
    <LangContext.Provider value={content}>
      {/* "user": framer-motion skips movement when the visitor asks for reduced motion. */}
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          {content.ui.skip}
        </a>
        <div className="relative z-0" id="top">
          <Navbar />
          <main id="main" tabIndex={-1}>
            <Hero />
            <div className="bg-about bg-cover bg-center bg-no-repeat">
              <About />
            </div>
            <div className="bg-night">
              <Projects />
            </div>
            <div className="bg-snowMountain bg-cover bg-center bg-no-repeat pb-10">
              <Tech />
            </div>
            <div
              className="bg-experience bg-cover bg-center bg-no-repeat
              rounded-tl-[150px] rounded-br-[150px]">
              <div
                className="bg-experienceLight bg-cover bg-center
                bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                <Experience />
              </div>
            </div>
            <div className="bg-tech bg-cover bg-center bg-no-repeat pt-16 pb-10">
              <Certificates />
            </div>
            <div className="relative z-0">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LangContext.Provider>
  );
};

export default App;
