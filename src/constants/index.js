// Data shared by both languages: icons, images and links. All copy lives in
// content.en.js ("/") and content.pt.js ("/pt/").
import {
  python,
  pandas,
  scikitlearn,
  tensorflow,
  keras,
  xgboostText,
  clearml,
  pytest,
  sqlNeutral,
  postgresql,
  neo4j,
  spark,
  powerbi,
  tableau,
  git,
  typescript,
  facil,
  cge,
  capitaltrade,
  modallport,
  ufscCover,
  dataScienceCertificate,
  univaliCertificate,
  awsCertificate,
  googleCertificate,
  email,
  linkedin,
  github,
  resume,
  prototyping,
  pillarForecast,
  pillarExperiment,
} from '../assets';
import { links } from './links';

export { links };

// Sixteen balls: two rows of eight on a desktop. SQL and XGBoost use neutral,
// legible white marks drawn for this site (no third-party logo).
export const technologies = [
  { name: 'Python', icon: python },
  { name: 'pandas', icon: pandas },
  { name: 'Scikit-learn', icon: scikitlearn },
  { name: 'TensorFlow', icon: tensorflow },
  { name: 'Keras', icon: keras },
  { name: 'XGBoost', icon: xgboostText },
  { name: 'ClearML', icon: clearml },
  { name: 'pytest', icon: pytest },
  { name: 'SQL', icon: sqlNeutral },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Neo4j', icon: neo4j },
  { name: 'Spark', icon: spark },
  { name: 'Power BI', icon: powerbi },
  { name: 'Tableau', icon: tableau },
  { name: 'Git', icon: git },
  { name: 'TypeScript', icon: typescript },
];

// Same order as content.*.experience.items.
export const experienceIcons = [
  { icon: facil, iconBg: '#004d87' },
  { icon: cge, iconBg: '#f4f4f6' },
  { icon: capitaltrade, iconBg: '#ffffff' },
  { icon: modallport, iconBg: '#333333' },
];

// Same order as content.*.education.degrees / courses.
export const degreeImages = [ufscCover, dataScienceCertificate, univaliCertificate];
export const courseImages = [
  { image: awsCertificate, background: '#f4f4f4' },
  { image: googleCertificate, background: '#f4f4f4' },
];

export const pillarIcons = {
  production: prototyping,
  forecast: pillarForecast,
  experiment: pillarExperiment,
};

export const contactIcons = { email, linkedin, github, resume };
