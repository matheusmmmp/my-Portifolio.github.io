import {
  frontend,
  machineLearning,
  ux,
  prototyping,
  javascript,
  typescript,
  python,
  spark,
  reactjs,
  git,
  modallport,
  wishbox,
  tableau,
  pandas,
  gcp,
  powerbi,
  aws,
  sql,
  cheap2ship,
  igp,
  petshopDash,
  graphPage,
  movieRecommendation,
  anomalyDetection,
  healthClassification,
  awsCertificate,
  dataScienceCertificate,
  googleCertificate,
  univaliCertificate,
  github,
  email,
  instagram,
  linkedin
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Analytics',
    icon: ux,
  },
  {
    title: 'Machine Learning',
    icon: machineLearning,
  },
  {
    title: 'Cloud Compute',
    icon: frontend,
  },
  {
    title: 'Collaboration',
    icon: prototyping,
  },
];

const contacts = [
  {
    title: 'LinkedIn',
    icon: linkedin,
    url: 'https://www.linkedin.com/in/matheus-de-medeiros-pereira-52b245140/'
  },
  {
    title: 'Instagram',
    icon: instagram,
    url: 'https://www.instagram.com/_matheusmmp/'
  },
  {
    title: 'GitHub',
    icon: github,
    url: 'https://github.com/matheusmmmp?tab=repositories'
  },
  {
    title: 'E-mail',
    icon: email,
    url: 'matheusmmmp@hotmail.com'
  },
];


const technologies = [
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'spark',
    icon: spark,
  },
  {
    name: 'javascript',
    icon: javascript,
  },
  {
    name: 'typescript',
    icon: typescript,
  },
  {
    name: 'reactjs',
    icon: reactjs,
  },
  {
    name: 'tableau',
    icon: tableau,
  },
  {
    name: 'pandas',
    icon: pandas,
  },
  {
    name: 'gcp',
    icon: gcp,
  },
  {
    name: 'powerbi',
    icon: powerbi,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'FullStack Web Developer',
    company_name: 'Modallport Sistemas Ltda',
    icon: modallport,
    iconBg: '#333333',
    date: 'Jun 2020 - Present',
  },
  {
    title: 'Junior FullStack Web Developer',
    company_name: 'Cheapship',
    icon: cheap2ship,
    iconBg: '#333333',
    date: 'Jan 2020 - May 2020',
  },
  {
    title: 'Criminal Forensic Intern',
    company_name: 'Instituto Geral de Pericias de Santa Catarina',
    icon: igp,
    iconBg: '#333333',
    date: 'Jun 2018 - May 2019',
  },
  {
    title: 'Social Media Intern - Marketing',
    company_name: 'Wishbox',
    icon: wishbox,
    iconBg: '#333333',
    date: 'Mar 2017 - Jun 2017',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Health Classification',
    description: 'High Dimensional Data Processing and Modeling of Cancer Classifiers.',
    tags: [
      {
        name: 'powerbi',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: healthClassification,
    repo: 'https://github.com/matheusmmmp/SKLearn-HealthDataset',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'PetShop Dashboard',
    description:
      'Development and Visualization of a PetShop Dashboard through Power BI.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: petshopDash,
    repo: 'https://github.com/matheusmmmp/dataAnalysis-petShop',
    demo: 'https://app.powerbi.com/view?r=eyJrIjoiNzJkZGYwMDAtZWFiZi00OTcxLTg0ZWMtNDAxODcyOTcwMzE3IiwidCI6ImQwOTEwZmZkLThhMzctNGJkYi1iYTY1LTdkMmQwZWI1N2RlOSIsImMiOjR9',
  },
  {
    id: 'project-3',
    name: 'Page Rank Analysis',
    description: 'Page Rank Analysis with PySpark MLlib using Graph library',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: graphPage,
    repo: 'https://github.com/matheusmmmp/MLlib-graphPageRank',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Movie Recommendation',
    description: `Movie Recommendation model with PySpark MLlib using ALS Recommendation algorithm.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movieRecommendation,
    repo: 'https://github.com/matheusmmmp/MLlib-movieRecommendation',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Anomaly Detection',
    description:
      'Solving a anomaly detection problem with a boxplot and histogram analysis or machine learning with k-means algorithm.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: anomalyDetection,
    repo: 'https://github.com/matheusmmmp/MLlib-anomalyDetection',
    demo: '',
  },
];

const certificates = [
  {
    id: 'certificate-1',
    name: 'Google Cloud Computing Foundations Academy',
    description: 'Google',   
    date:'2022',  
    image: googleCertificate
  },
  {
    id: 'certificate-2',
    name: 'AWS Cloud Practitioner Essentials',
    description: 'Amazon Web Services (AWS)',   
    date:'2022',  
    image: awsCertificate
  },
  {
    id: 'certificate-3',
    name: 'Data Science',
    date:'2022',  
    description: 'MBA Postgraduate Lato Sensu - IGTI',    
    image: dataScienceCertificate
  },
  {
    id: 'certificate-4',
    name: 'Computer Science',
    date:'2021',  
    description: `Bachelor degree - UNIVALI`,  
    image: univaliCertificate
  }
];


export { services, technologies, experiences, projects, certificates, contacts};
