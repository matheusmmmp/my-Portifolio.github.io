import {
  machineLearning,
  backend,
  ux,
  prototyping,
  typescript,
  python,
  spark,
  git,
  postgresql,
  modallport,
  facil,
  cge,
  capitaltrade,
  tableau,
  pandas,
  powerbi,
  sql,
  scikitlearn,
  tensorflow,
  keras,
  xgboost,
  clearml,
  neo4j,
  pytest,
  awsCertificate,
  googleCertificate,
  benchmarkCover,
  digilabCover,
  graphPage,
  movieRecommendation,
  healthClassification,
  ufscCover,
  dataScienceCertificate,
  univaliCertificate,
  github,
  email,
  linkedin,
  resume,
} from '../assets';

// Copy mirrors the résumé (v5.1). Ongoing research is described by how it
// works, never by results.

export const profile = {
  resumeLabel: 'Résumé',
  email: 'matheusmmmp@hotmail.com',
  role: 'Data Scientist',
  focus: 'Machine Learning · NLP · Time Series',
  lead: 'I spent two years training, validating and releasing legal-document classifiers for dozens of customers, one model each.',
  meta: 'Florianópolis, Brazil · Open to data scientist roles, remote or hybrid',
  about:
    'Data Scientist with two years operating NLP models in production in the legal sector, from validation to incident response, for dozens of customers. MSc candidate in Computer Science (UFSC) with a reproducible time-series forecasting benchmark. Before that, one year in data analysis and engineering and three years in software development.',
};

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

// The four cards of the Overview section: the skill groups of the résumé.
const services = [
  {
    title: 'Machine Learning & NLP',
    text: 'Multiclass text classification, feature engineering, imbalanced classes, TF-IDF, experiments with BERT',
    icon: machineLearning,
  },
  {
    title: 'Time Series',
    text: 'Forecasting with walk-forward validation: SARIMAX, GAM, INGARCH, XGBoost, LSTM',
    icon: ux,
  },
  {
    title: 'Models in Production',
    text: 'Validation, acceptance, release, monitoring and rollback; experiment tracking with ClearML',
    icon: prototyping,
  },
  {
    title: 'Data Engineering & BI',
    text: 'Python, SQL and Spark pipelines, PostgreSQL, Neo4j; Power BI and Tableau dashboards',
    icon: backend,
  },
];

// Libraries shown as labels (no icon files in the project yet).
// Sixteen balls: two rows of eight on a desktop.
const technologies = [
  { name: 'Python', icon: python },
  { name: 'pandas', icon: pandas },
  { name: 'Scikit-learn', icon: scikitlearn },
  { name: 'TensorFlow', icon: tensorflow },
  { name: 'Keras', icon: keras },
  { name: 'XGBoost', icon: xgboost },
  { name: 'ClearML', icon: clearml },
  { name: 'pytest', icon: pytest },
  { name: 'SQL', icon: sql },
  { name: 'PostgreSQL', icon: postgresql },
  { name: 'Neo4j', icon: neo4j },
  { name: 'Spark', icon: spark },
  { name: 'Power BI', icon: powerbi },
  { name: 'Tableau', icon: tableau },
  { name: 'Git', icon: git },
  { name: 'TypeScript', icon: typescript },
];

const experiences = [
  {
    title: 'Mid-level Data Scientist',
    company_name: 'Fácil · Espaider, legal-tech software',
    icon: facil,
    iconBg: '#004d87',
    date: 'Jul 2024 - Jul 2026',
    points: [
      'Built multiclass text-classification models for legal documents (Scikit-learn, TensorFlow/Keras) for dozens of customers, each with its own model.',
      'Validated every candidate against the production model (Top-1/Top-3, precision, recall, F1, error analysis) and supported acceptance with customers and engineering.',
      "Structured the team's experiment workflow with ClearML: run logging and comparison, artifact versioning and a delivery report for each customer version.",
      'Led the response to a production incident: same-day rollback and fix of the root cause, a preprocessing skew between training and serving.',
      "Evaluated BERT and Legal-BERT (Hugging Face) on the company's data; they did not outperform the TF-IDF models in production, which were kept.",
    ],
  },
  {
    title: 'Junior Data Scientist',
    company_name: 'Santa Catarina State Comptroller · CGE-SC',
    icon: cge,
    iconBg: '#f4f4f6',
    date: 'Nov 2023 - Aug 2024',
    points: [
      'Automated in Python the ingestion of public-accounts filings (PostgreSQL dumps, consistency checks, Data Warehouse load), with monitoring and e-mail alerts.',
      'Built data-integration pipelines with Spark and SQL and graph analyses of company-relationship networks in Neo4j.',
      'Delivered dashboards in Power BI, Tableau and OBIEE to track internal-control indicators.',
    ],
  },
  {
    title: 'Data Analyst',
    company_name: 'Capital Trade, Itajaí',
    icon: capitaltrade,
    iconBg: '#ffffff',
    date: 'Sep 2023 - Nov 2023',
    points: ['Statistical analysis for forecasting and segmentation (Python, R, SQL, Power BI, Tableau).'],
  },
  {
    title: 'Web Developer',
    company_name: 'Modallport Sistemas, Itajaí',
    icon: modallport,
    iconBg: '#333333',
    date: 'Jun 2020 - Sep 2023',
    points: [
      'Developed and maintained port-management systems in production (ASP.NET Core, C#, MySQL, Azure AD), from requirements gathering to prototyping.',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Admission Forecasting',
    kind: 'MSc research · in progress',
    description:
      'Reproducible benchmark of daily respiratory hospital admissions in São Paulo. Data pipeline over three public sources with a data-quality gate; walk-forward validation (4 windows of 180 days) and 5 seeds; seven models, from baselines and SARIMAX to XGBoost and LSTM, across eight feature sets.',
    tags: ['Python', 'XGBoost', 'LSTM', 'SARIMAX', 'walk-forward', 'pytest'],
    image: benchmarkCover,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'DigiLab',
    kind: 'Personal project · in progress',
    description:
      'A virtual pet with a modular brain: it senses its environment, responds to the needs of a simulated body, decides what to do and learns. Simulation engine in Python and a playable web game in TypeScript, React and three.js. A local LLM turns its internal state into speech, with a second model as judge.',
    tags: ['Python', 'TypeScript', 'React', 'three.js', 'Ollama'],
    image: digilabCover,
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Health Classification',
    kind: 'Study project · 2022',
    description: 'High-dimensional data processing and modeling of cancer classifiers with Scikit-learn.',
    tags: ['Python', 'Scikit-learn', 'dimensionality reduction'],
    image: healthClassification,
    repo: 'https://github.com/matheusmmmp/SKLearn-HealthDataset',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Movie Recommendation',
    kind: 'Study project · 2023',
    description: 'Movie recommendation model with PySpark MLlib using the ALS algorithm.',
    tags: ['PySpark', 'MLlib', 'ALS'],
    image: movieRecommendation,
    repo: 'https://github.com/matheusmmmp/MLlib-movieRecommendation',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'PageRank Analysis',
    kind: 'Study project · 2023',
    description: 'PageRank analysis of a graph with PySpark.',
    tags: ['PySpark', 'graphs'],
    image: graphPage,
    repo: 'https://github.com/matheusmmmp/MLlib-graphPageRank',
    demo: '',
  },
];

// Degrees only. Courses go in a text line under the cards.
const certificates = [
  {
    id: 'education-1',
    name: 'MSc in Computer Science',
    description: 'UFSC · in progress, defense expected Mar 2027',
    date: '2024 – 2027',
    image: ufscCover,
  },
  {
    id: 'education-2',
    name: 'Postgraduate Diploma in Data Science',
    description: 'IGTI',
    date: '2021 – 2022',
    image: dataScienceCertificate,
  },
  {
    id: 'education-3',
    name: 'BSc in Computer Science',
    description: 'UNIVALI',
    date: '2016 – 2021',
    image: univaliCertificate,
  },
];

// Courses shown as cards. `background` matches the image's own background.
const courses = [
  {
    id: 'course-1',
    name: 'AWS Cloud Practitioner Essentials',
    description: 'Amazon Web Services · course',
    date: '2021',
    image: awsCertificate,
    background: '#f4f4f4',
  },
  {
    id: 'course-2',
    name: 'Google Cloud Computing Foundations',
    description: 'Google Cloud · course',
    date: '2022',
    image: googleCertificate,
    background: '#f4f4f4',
  },
];

const otherCourses = 'Data Scientist and Big Data Architect Bootcamps, IGTI (2022)';

const contacts = [
  {
    title: 'E-mail',
    icon: email,
    url: 'matheusmmmp@hotmail.com',
  },
  {
    title: 'LinkedIn',
    icon: linkedin,
    url: 'https://www.linkedin.com/in/matheus-de-medeiros-pereira-b90295359/',
  },
  {
    title: 'GitHub',
    icon: github,
    url: 'https://github.com/matheusmmmp',
  },
  {
    title: 'Résumé',
    icon: resume,
    url: 'resume',
  },
];

const production = {
  context: 'Fácil · legal-tech · 2024–2026',
  steps: [
    {
      label: 'Train',
      title: 'One model per customer',
      detail: 'legal-document classifiers',
    },
    {
      label: 'Validate',
      title: 'Candidate vs. production model',
      detail: 'Top-1/Top-3 · precision · recall · F1',
    },
    {
      label: 'Release',
      title: 'Customer acceptance, tracked in ClearML',
      detail: 'runs compared · artifacts versioned · delivery report',
    },
  ],
};

export {
  services,
  technologies,
  experiences,
  projects,
  certificates,
  courses,
  otherCourses,
  contacts,
  production,
};
