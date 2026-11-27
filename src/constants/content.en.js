// English copy (default, served at "/"). Source: Planner, "15 Reestruturação do portfólio",
// 03_conteudo_site_en_pt.md and 04_cases_tecnicos.md. Ongoing research is described by method
// and scale only (D-36): no errors, scores, improvements or conclusions anywhere in this file.
import {
  healthClassification,
  movieRecommendation,
  graphPage,
} from '../assets';
import { links } from './links';
import resumePdf from '../assets/Matheus_de_Medeiros_Pereira_-_Data_Scientist.pdf';

const content = {
  lang: 'en',
  htmlLang: 'en',
  path: '/',
  meta: {
    title: 'Matheus Pereira · Data Scientist (Machine Learning, NLP, Forecasting)',
    description:
      'Data Scientist with two years of NLP models in production, plus research in time series forecasting and simulation experiments. Based in Florianópolis.',
  },
  resumePdf,
  ui: {
    resume: 'Résumé',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    skip: 'Skip to content',
    home: 'Matheus Pereira, back to the top',
    scrollHint: 'Scroll to the introduction',
    newTab: '(opens in a new tab)',
  },
  nav: [
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'work', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'contact', title: 'Contact' },
  ],
  hero: {
    greeting: 'Hi, I’m',
    role: 'Data Scientist',
    focus: 'Machine Learning · NLP · Time Series',
    lead: 'I spent two years training, validating and releasing legal-document classifiers for dozens of customers, one model each.',
    meta: 'Florianópolis, Brazil · Open to data scientist roles, remote or hybrid',
    resumeButton: 'My résumé',
    emailButton: 'Email me',
    stepsTitle: 'Models in production',
    stepsAria: 'How I ran models in production',
    context: 'Fácil · legal-tech · 2024–2026',
    readMore: 'Read the full experience ↓',
    steps: [
      { label: 'Train', title: 'One model per customer', detail: 'legal-document classifiers' },
      { label: 'Validate', title: 'Candidate vs. production model', detail: 'Top-1/Top-3 · precision · recall · F1' },
      { label: 'Release', title: 'Customer acceptance, tracked in ClearML', detail: 'runs compared · artifacts versioned · delivery report' },
    ],
  },
  about: {
    sub: 'Introduction',
    title: 'About.',
    text: 'Data Scientist with two years operating NLP models in production in the legal sector, from validation to incident response, for dozens of customers. Alongside that work I study how to evaluate models properly: my MSc research at UFSC compares seven forecasting models under one reproducible temporal protocol, and in an independent project I run pre-registered simulation experiments with adaptive agents. Before data science, one year in data analysis and engineering in the public sector and three years in software development.',
    pillars: [
      {
        icon: 'production',
        title: 'Machine Learning & NLP in production',
        text: 'Text classifiers trained, validated against the production model and released for dozens of customers, with experiment tracking in ClearML and same-day rollback when a release failed.',
        link: { label: 'See experience', href: '#work' },
      },
      {
        icon: 'forecast',
        title: 'Statistical modeling & forecasting',
        text: 'Seven forecasting models under one rolling-origin protocol, paired Diebold–Mariano tests with Holm correction, and a negative-binomial count model implemented from scratch.',
        link: { label: 'See the forecasting project', href: '#project-forecast' },
      },
      {
        icon: 'experiment',
        title: 'Experimental AI',
        text: 'Simulation experiments with adaptive agents: design and reading rule written before the run, paired lives with shared seeds, every official number recomputed and asserted in CI.',
        link: { label: 'See DigiLab', href: '#project-digilab' },
      },
    ],
  },
  projects: {
    sub: 'Research and projects',
    title: 'Selected research & projects.',
    intro: 'Two ongoing research projects. Results stay on each research site until the work is finished.',
    labels: { cases: 'Case studies', read: 'Read case study', explore: 'Explore the project' },
    main: [
      {
        id: 'forecast',
        label: 'MSc research · UFSC · in progress',
        badges: ['Machine Learning', 'Time Series', 'Research'],
        title: 'Respiratory Admissions Forecasting',
        subtitle: 'Forecasting respiratory hospital admissions with machine learning and time series analysis',
        visual: {
          kind: 'forecast',
          top: 'Daily admissions · São Paulo',
          right: '4 test windows',
          alt: 'Weekly mean of daily respiratory hospital admissions of São Paulo residents, 2019 to 2024, with the four 180-day test windows of 2023 and 2024 shaded. Data and evaluation design only, no model output.',
        },
        text: 'A comparative study of seven models forecasting daily respiratory hospital admissions in São Paulo, 1 to 30 days ahead. It combines temporal validation, statistical tests and environmental data, with an interactive demo app and an API.',
        stats: [
          { value: '7', label: 'Models' },
          { value: '5', label: 'Horizons' },
          { value: '2019–24', label: 'Period' },
        ],
        stackLine: ['Python', 'XGBoost', 'LSTM', 'SARIMAX', 'INGARCH', 'FastAPI', 'Streamlit', 'Docker'],
        textLinks: [
          { icon: 'study', label: 'Full study', text: 'Methods, protocol and provisional results on the research site.', href: links.forecastSite },
          { icon: 'demo', label: 'Interactive demo', text: 'Streamlit dashboard with the series, the protocol and diagnostics.', href: links.forecastApp },
          { icon: 'code', label: 'Source code', text: 'Pipeline, tests, CI and Docker on GitHub.', href: links.forecastRepo },
        ],
      },
      {
        id: 'digilab',
        label: 'Independent research · in progress',
        title: 'DigiLab',
        subtitle: 'Experimental AI · Artificial life',
        visual: {
          kind: 'digilab',
          top: 'Paired simulated lives',
          right: '4 arms · 1 seed',
          seed: 'Seed',
          day1: 'Day 1',
          day14: 'Day 14',
          alt: 'Experiment design: one random seed shared by four arms, A to D, each a simulated life of 14 days. No results are shown.',
        },
        text: 'A simulated animal with a body that needs care and a decision system that learns, used as a lab. Each experiment is planned before it runs and compares paired lives.',
        stats: [
          { value: '10,080', label: 'simulated lives' },
          { value: '2', label: 'public studies' },
          { value: '14 days', label: 'per life' },
        ],
        tags: ['Python', 'SciPy', 'DuckDB', 'Experimental design', 'Agent-based simulation'],
        cta: { label: 'Explore research', href: links.digilabSite },
        cases: [
          { icon: 'arms', title: 'Body effect or reward credit?', text: 'Pre-registered four-arm experiment on 9,600 paired lives.', href: links.digilabStudy1 },
          { icon: 'screen', title: 'Screening before a full run', text: 'A planned 480-life screening to decide on the next experiment.', href: links.digilabStudy2 },
        ],
        links: [
          { label: 'Source code', href: links.digilabRepo, github: true },
          { label: 'Dataset', href: links.digilabDataset },
        ],
      },
    ],
    earlierTitle: 'Earlier study projects',
    earlier: [
      {
        title: 'Health classification',
        year: '2023',
        text: 'High-dimensional cancer classification with Scikit-learn.',
        image: healthClassification,
        href: 'https://github.com/matheusmmmp/SKLearn-HealthDataset',
      },
      {
        title: 'Movie recommendation',
        year: '2022',
        text: 'ALS recommender with PySpark MLlib.',
        image: movieRecommendation,
        href: 'https://github.com/matheusmmmp/MLlib-movieRecommendation',
      },
      {
        title: 'PageRank analysis',
        year: '2022',
        text: 'Graph ranking with PySpark.',
        image: graphPage,
        href: 'https://github.com/matheusmmmp/MLlib-graphPageRank',
      },
    ],
    githubLabel: 'GitHub',
  },
  tech: {
    sub: 'My skills',
    title: 'Technologies.',
  },
  experience: {
    sub: 'What I’ve done so far',
    title: 'Work Experience.',
    resumeButton: 'My résumé',
    items: [
      {
        title: 'Mid-level Data Scientist',
        company: 'Fácil · Espaider, legal-tech software',
        date: 'Jul 2024 – Jul 2026',
        points: [
          'Built multiclass text-classification models for legal documents (Scikit-learn, TensorFlow/Keras) for dozens of customers, each with its own model.',
          'Validated every candidate against the production model (Top-1/Top-3, precision, recall, F1, error analysis) and supported acceptance with customers and engineering.',
          'Structured the team’s experiment workflow with ClearML: run logging and comparison, artifact versioning and a delivery report for each customer version.',
          'Led the response to a production incident: same-day rollback and fix of the root cause, a preprocessing skew between training and serving.',
          'Evaluated BERT and Legal-BERT (Hugging Face) on the company’s data; they did not outperform the TF-IDF models in production, which were kept.',
        ],
      },
      {
        title: 'Junior Data Scientist',
        company: 'Santa Catarina State Comptroller · CGE-SC',
        date: 'Nov 2023 – Aug 2024',
        points: [
          'Automated in Python the ingestion of public-accounts filings (PostgreSQL dumps, consistency checks, Data Warehouse load), with monitoring and e-mail alerts.',
          'Built data-integration pipelines with Spark and SQL and graph analyses of company-relationship networks in Neo4j.',
          'Delivered dashboards in Power BI, Tableau and OBIEE to track internal-control indicators.',
        ],
      },
      {
        title: 'Data Analyst',
        company: 'Capital Trade, Itajaí',
        date: 'Sep 2023 – Nov 2023',
        points: ['Statistical analysis for forecasting and segmentation (Python, R, SQL, Power BI, Tableau).'],
      },
      {
        title: 'Web Developer',
        company: 'Modallport Sistemas, Itajaí',
        date: 'Jun 2020 – Sep 2023',
        points: [
          'Developed and maintained port-management systems in production (ASP.NET Core, C#, MySQL, Azure AD), from requirements gathering to prototyping.',
        ],
      },
    ],
  },
  education: {
    sub: 'My study journey',
    title: 'Education.',
    intro: 'A Bachelor’s degree in Computer Science, a postgraduate diploma in Data Science and an MSc in Computer Science in progress at UFSC.',
    degrees: [
      { name: 'MSc in Computer Science', description: 'UFSC · in progress, defence expected Mar 2027', date: '2024 – 2027' },
      { name: 'Postgraduate Diploma in Data Science', description: 'IGTI', date: '2021 – 2022' },
      { name: 'BSc in Computer Science', description: 'UNIVALI', date: '2016 – 2021' },
    ],
    outputsTitle: 'Research outputs',
    outputs: [
      [{ t: 'MSc dissertation in Computer Science, UFSC — in progress, defence expected March 2027' }],
      [
        { t: 'Software: ' },
        { t: 'sp-respiratory-admissions-forecast v0.1.1', href: links.forecastRepo },
        { t: ' — DOI ' },
        { t: '10.5281/zenodo.24567671', href: links.forecastDoi },
      ],
      [
        { t: 'Public research sites: ' },
        { t: 'forecasting study', href: links.forecastSite },
        { t: '; ' },
        { t: 'DigiLab case studies', href: links.digilabSite },
      ],
      [{ t: 'Public dataset: ' }, { t: 'DigiLab case studies (Hugging Face)', href: links.digilabDataset }],
    ],
    coursesTitle: 'Courses',
    courses: [
      { name: 'AWS Cloud Practitioner Essentials', description: 'Amazon Web Services · course', date: '2021' },
      { name: 'Google Cloud Computing Foundations', description: 'Google Cloud · course', date: '2022' },
    ],
    other: 'Also: Data Scientist and Big Data Architect Bootcamps, IGTI (2022)',
  },
  contact: {
    sub: 'Get in touch',
    title: 'Contact.',
    text: 'Open to data scientist roles, remote or hybrid from Florianópolis. The fastest way to reach me is email.',
    cards: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', resume: 'Résumé' },
  },
  footer: {
    copyright: '© 2026 Matheus de Medeiros Pereira',
    creditBefore: 'Built on the open-source ',
    creditLink: 'Portfolio Template',
    creditAfter: ' by Shaquille Ndunda (MIT)',
    otherLanguage: { label: 'Português', href: '/pt/', hrefLang: 'pt-BR' },
  },
};

export default content;
