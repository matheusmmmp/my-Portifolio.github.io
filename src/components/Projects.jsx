import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { useContent } from '../i18n';
import { fadeIn, textVariant } from '../utils/motion';
import { seriesPath, testWindows, yearTicks } from './forecastSeries';

// One compact card per project: scope, idea in one or two sentences, three scale numbers,
// a few tags, one call to action and the case studies inside the card. No results (D-36).

const isExternal = (href) => /^https?:/.test(href);
const ext = (href) => (isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {});

const panelText = 'font-mono uppercase tracking-[2px] text-[12px] fill-[#b5b5ba]';

// Real series (weekly mean) with the four rolling-origin test windows shaded.
const ForecastVisual = ({ v }) => (
  <svg viewBox="0 0 640 250" role="img" aria-label={v.alt} className="w-full h-auto block">
    <rect width="640" height="250" fill="#141416" />
    <g stroke="#232327" strokeWidth="1">
      {[70, 110, 150, 190].map((y) => (
        <line key={y} x1="0" x2="640" y1={y} y2={y} />
      ))}
    </g>
    <g transform="translate(20 40)">
      {testWindows.map(([a, b], i) => (
        <g key={a}>
          <rect x={a} y="0" width={b - a} height="170" fill="#d4d4d8" opacity={i % 2 ? 0.1 : 0.16} />
          <line x1={a} x2={a} y1="0" y2="170" stroke="#66666e" strokeDasharray="3 3" />
        </g>
      ))}
      <path d={seriesPath} transform="scale(1 0.85)" fill="none" stroke="#f4f4f6" strokeWidth="1.6" strokeLinejoin="round" />
      {yearTicks.map(([year, x]) => (
        <text key={year} x={x + 2} y="186" className="font-mono text-[10px] fill-[#66666e]">
          {year}
        </text>
      ))}
    </g>
    <text x="20" y="26" className={panelText}>{v.top}</text>
    <text x="620" y="26" textAnchor="end" className={panelText}>{v.right}</text>
  </svg>
);

// Design of the experiments: one seed shared by paired lives in four arms, 14 days each.
const DigilabVisual = ({ v }) => {
  const lanes = [70, 110, 150, 190];
  return (
    <svg viewBox="0 0 640 250" role="img" aria-label={v.alt} className="w-full h-auto block">
      <rect width="640" height="250" fill="#141416" />
      <circle cx="70" cy="130" r="16" fill="#f4f4f6" />
      <circle cx="70" cy="130" r="26" fill="none" stroke="#66666e" />
      <text x="70" y="176" textAnchor="middle" className={panelText}>{v.seed}</text>
      {lanes.map((y, i) => (
        <g key={y}>
          <path d={`M96 130 C 140 130, 140 ${y}, 184 ${y}`} fill="none" stroke="#66666e" strokeWidth="1.4" />
          <circle cx="196" cy={y} r="9" fill="none" stroke="#d4d4d8" strokeWidth="1.6" />
          <text x="196" y={y + 4} textAnchor="middle" className="font-mono text-[10px] fill-[#d4d4d8]">
            {String.fromCharCode(65 + i)}
          </text>
          {Array.from({ length: 14 }, (_, d) => (
            <rect key={d} x={222 + d * 26} y={y - 7} width="20" height="14" rx="3" fill="#d4d4d8" opacity={0.18 + (d % 7 === 6 ? 0.2 : 0)} />
          ))}
        </g>
      ))}
      <text x="222" y="222" className="font-mono text-[10px] fill-[#66666e]">{v.day1}</text>
      <text x="580" y="222" textAnchor="end" className="font-mono text-[10px] fill-[#66666e]">{v.day14}</text>
      <text x="20" y="30" className={panelText}>{v.top}</text>
      <text x="620" y="30" textAnchor="end" className={panelText}>{v.right}</text>
    </svg>
  );
};

// Small neutral schematics for the case list (method, never results).
const CaseIcon = ({ kind }) => {
  const ink = '#333333';
  const soft = '#9999a1';
  const shapes = {
    models: (
      <>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <circle key={i} cx={8 + i * 8} cy="18" r="2.6" fill={ink} />
        ))}
        <path d="M6 26 H58 M6 26 V23 M58 26 V23" stroke={soft} strokeWidth="1.5" fill="none" />
        <rect x="16" y="32" width="32" height="7" rx="2" fill={ink} />
      </>
    ),
    blocks: (
      <>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="14" y={34 - i * 8} width={36 - i * 6} height="6" rx="1.5" fill={i === 3 ? soft : ink} />
        ))}
        <path d="M54 10 v8 M50 14 h8" stroke={ink} strokeWidth="1.6" />
      </>
    ),
    weekday: (
      <>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={6 + i * 7.5} y="12" width="5.5" height="24" rx="1.5" fill={i === 1 ? ink : '#c8c8cd'} />
        ))}
        <circle cx="16" cy="40" r="2" fill={ink} />
      </>
    ),
    pipeline: (
      <>
        {[0, 1, 2].map((i) => (
          <rect key={i} x={5 + i * 20} y="17" width="14" height="14" rx="3" fill={i === 1 ? soft : ink} />
        ))}
        <path d="M19 24 h6 M39 24 h6" stroke={ink} strokeWidth="1.6" />
        <path d="M44 9 l3 3 6 -6" stroke={ink} strokeWidth="1.8" fill="none" />
      </>
    ),
    arms: (
      <>
        <circle cx="10" cy="24" r="4" fill={ink} />
        {[12, 20, 28, 36].map((y) => (
          <g key={y}>
            <path d={`M14 24 C 22 24, 22 ${y}, 30 ${y}`} stroke={soft} strokeWidth="1.3" fill="none" />
            <rect x="32" y={y - 2} width="24" height="4" rx="2" fill={ink} />
          </g>
        ))}
      </>
    ),
    study: (
      <>
        <rect x="18" y="7" width="28" height="34" rx="3" fill="#fff" stroke={ink} strokeWidth="1.6" />
        <path d="M23 15 h18 M23 21 h18 M23 27 h12" stroke={soft} strokeWidth="1.6" />
        <path d="M23 34 l4 -4 4 3 6 -6" stroke={ink} strokeWidth="1.6" fill="none" />
      </>
    ),
    demo: (
      <>
        <rect x="9" y="9" width="46" height="30" rx="3" fill={ink} />
        <path d="M14 32 l7 -8 6 5 8 -11 6 6 8 -6" stroke="#f4f4f6" strokeWidth="1.5" fill="none" />
        <rect x="26" y="40" width="12" height="3" rx="1.5" fill={soft} />
      </>
    ),
    code: (
      <>
        <path d="M22 15 l-9 9 9 9 M42 15 l9 9 -9 9" stroke={ink} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 11 l-6 26" stroke={soft} strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    screen: (
      <>
        <path d="M8 10 H56 L40 26 V38 L24 38 V26 Z" fill="#c8c8cd" />
        <rect x="27" y="29" width="4" height="9" fill={ink} />
        <rect x="33" y="29" width="4" height="9" fill={soft} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className="w-[64px] h-[48px] shrink-0 rounded-[8px] bg-[#ececef] border border-[#dcdce0]">
      {shapes[kind]}
    </svg>
  );
};

const Stats = ({ stats }) => (
  <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
    {stats.map((s) => (
      <div key={s.label} className="flex flex-col-reverse">
        <dt className="text-onyx text-[12.5px] leading-[17px] font-poppins mt-1">{s.label}</dt>
        <dd className="text-eerieBlack font-poppins font-bold sm:text-[24px] text-[20px] leading-none">{s.value}</dd>
      </div>
    ))}
  </dl>
);

// Forecasting card: visual, badges, idea, three numbers, stack in one line and the three
// ways in (study, demo, code) as text links.
const StudyCard = ({ project, labels, newTab, index }) => (
  <motion.article
    id={`project-${project.id}`}
    aria-labelledby={`project-${project.id}-title`}
    variants={fadeIn('up', 'spring', 0.15 * index, 0.75)}
    className="scroll-mt-[110px] flex flex-col rounded-[20px] bg-white border border-[#d4d4d8] sm:p-6 p-4
    shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]">
    <div className="rounded-[14px] overflow-hidden border border-[#2e2e31]">
      <ForecastVisual v={project.visual} />
    </div>
    <ul className="mt-4 flex flex-wrap gap-[6px] list-none">
      {project.badges.map((b) => (
        <li key={b} className="text-jet text-[11.5px] font-poppins font-semibold bg-[#ececef] rounded-[6px] px-2 py-[2px]">
          {b}
        </li>
      ))}
    </ul>
    <p className="mt-3 text-dim text-[11.5px] font-semibold font-poppins uppercase tracking-[1.5px]">{project.label}</p>
    <h3 id={`project-${project.id}-title`} className="mt-1 text-eerieBlack font-poppins font-bold sm:text-[26px] text-[22px] leading-[1.15]">
      {project.title}
    </h3>
    <p className="mt-2 text-jet font-poppins font-semibold text-[15px] leading-[22px]">{project.subtitle}</p>
    <p className="mt-3 text-jet font-poppins text-[15px] leading-[24px]">{project.text}</p>
    <Stats stats={project.stats} />
    <p className="mt-5 text-onyx font-poppins text-[12.5px]">{project.stackLine.join(' · ')}</p>
    <div className="mt-6 border-t border-[#e2e2e5] pt-4 flex-1">
      <p className="text-dim text-[11.5px] font-semibold font-poppins uppercase tracking-[1.5px]">{labels.explore}</p>
      <ul className="mt-1 list-none divide-y divide-[#e2e2e5]">
        {project.textLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href} {...ext(l.href)} className="group py-3 flex gap-4 items-center">
              <CaseIcon kind={l.icon} />
              <span className="min-w-0">
                <span className="block text-eerieBlack font-poppins font-semibold text-[15px] underline underline-offset-4
                decoration-[#9999a1] group-hover:decoration-eerieBlack">
                  {l.label} <span aria-hidden="true">↗</span>
                </span>
                <span className="block mt-[2px] text-onyx font-poppins text-[13px] leading-[19px]">{l.text}</span>
              </span>
              <span className="sr-only"> {newTab}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </motion.article>
);

const ProjectCard = ({ project, labels, newTab, index }) => {
  if (project.textLinks) return <StudyCard project={project} labels={labels} newTab={newTab} index={index} />;
  const Visual = project.visual.kind === 'forecast' ? ForecastVisual : DigilabVisual;
  return (
    <motion.article
      id={`project-${project.id}`}
      aria-labelledby={`project-${project.id}-title`}
      variants={fadeIn('up', 'spring', 0.15 * index, 0.75)}
      className="scroll-mt-[110px] flex flex-col rounded-[20px] bg-white border border-[#d4d4d8] sm:p-6 p-4
      shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]">
      <p className="text-dim text-[11.5px] font-semibold font-poppins uppercase tracking-[1.5px]">{project.label}</p>
      <h3 id={`project-${project.id}-title`} className="mt-2 text-eerieBlack font-poppins font-bold sm:text-[26px] text-[22px] leading-[1.15]">
        {project.title}
      </h3>
      <p className="mt-1 text-onyx font-poppins font-semibold text-[15px]">{project.subtitle}</p>

      <div className="mt-4 rounded-[14px] overflow-hidden border border-[#2e2e31]">
        <Visual v={project.visual} />
      </div>

      <p className="mt-4 text-jet font-poppins text-[15px] leading-[24px]">{project.text}</p>

      <Stats stats={project.stats} />

      <ul className="mt-4 flex flex-wrap gap-[6px] list-none" aria-label="Stack">
        {project.tags.map((tag) => (
          <li key={tag} className="text-jet text-[11.5px] font-poppins bg-[#f0f0f2] border border-[#dcdce0] rounded-[6px] px-2 py-[1px]">
            {tag}
          </li>
        ))}
      </ul>

      <a
        href={project.cta.href}
        {...ext(project.cta.href)}
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-eerieBlack text-flashWhite font-poppins
        font-semibold text-[14px] py-[11px] hover:bg-jetLight transition duration-[0.2s]">
        {project.cta.label} <span aria-hidden="true">→</span>
        <span className="sr-only"> {newTab}</span>
      </a>

      <div className="mt-6 border-t border-[#e2e2e5] pt-4 flex-1">
        <p className="text-dim text-[11.5px] font-semibold font-poppins uppercase tracking-[1.5px]">{labels.cases}</p>
        <ol className="mt-1 list-none divide-y divide-[#e2e2e5]">
          {project.cases.map((c, i) => (
            <li key={c.title} className="py-3 flex gap-4 items-center">
              <CaseIcon kind={c.icon} />
              <div className="min-w-0">
                <p className="text-eerieBlack font-poppins font-semibold text-[14.5px] leading-[20px]">
                  {String(i + 1).padStart(2, '0')} — {c.title}
                </p>
                <p className="text-onyx font-poppins text-[13px] leading-[19px]">{c.text}</p>
                <a
                  href={c.href}
                  {...ext(c.href)}
                  className="mt-[2px] inline-block text-jet font-poppins font-semibold text-[13px] underline underline-offset-4
                  decoration-[#9999a1] hover:decoration-jet">
                  {labels.read} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> {newTab}</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-2 pt-4 border-t border-[#e2e2e5] flex flex-wrap justify-center gap-2">
        {project.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...ext(l.href)}
            className="inline-flex items-center gap-[6px] rounded-full border border-[#cfcfd4] px-3 py-[5px] text-jet font-poppins
            text-[12.5px] hover:bg-[#f0f0f2] transition duration-[0.2s]">
            {l.github ? <img src={github} alt="" className="w-[14px] h-[14px] invert" /> : null}
            {l.label}
            <span className="sr-only"> {newTab}</span>
          </a>
        ))}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { projects, ui } = useContent();

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{projects.sub}</p>
        <h2 id="projects-title" className={styles.sectionHeadTextLight}>
          {projects.title}
        </h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className={`mt-4 ${styles.bodyOnDark}`}>
        {projects.intro}
      </motion.p>

      <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
        {projects.main.map((project, index) => (
          <ProjectCard key={project.id} project={project} labels={projects.labels} newTab={ui.newTab} index={index} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-timberWolf font-semibold uppercase tracking-[2px] text-[16px] font-poppins">
          {projects.earlierTitle}
        </h3>
        <ul className="mt-4 list-none border-y border-[#2e2e31] divide-y divide-[#2e2e31]">
          {projects.earlier.map((item) => (
            <li key={item.title} className="py-4 flex items-center sm:gap-5 gap-3">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="hidden xs:block w-[84px] h-[52px] object-cover rounded-[8px] opacity-80"
              />
              <div className="flex-1 min-w-0">
                <p className="text-timberWolf font-semibold text-[16px] font-poppins">
                  {item.title} <span className="text-taupe font-normal">({item.year})</span>
                </p>
                <p className="text-french text-[14px] leading-[21px] font-poppins">{item.text}</p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title}: ${projects.githubLabel} ${ui.newTab}`}
                className="shrink-0 inline-flex items-center gap-2 rounded-[10px] border border-dim px-3 py-2
                text-timberWolf font-beckman uppercase tracking-[1px] text-[13px]
                hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s]">
                <img src={github} alt="" className="w-5 h-5 object-contain" />
                <span className="hidden sm:inline">{projects.githubLabel}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
