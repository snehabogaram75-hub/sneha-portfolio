/**
 * Portfolio data for Sneha Bogaram.
 * Existing Netflix-style UI is preserved; only portfolio content is updated.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Sneha Bogaram',
  displayName: 'Sneha Bogaram',
  firstName: 'SNEHA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SNEHA BOGARAM ORIGINAL',
  role: 'Computer Science Engineer • Data Analyst • AI/ML',
  tagline: ['Computer Science Engineering', 'Data Analyst', 'AI/ML • Python • SQL • C'],
  intro: 'B.Tech graduate in Computer Science and Engineering (CSE), building practical skills in Python, SQL, AI/ML and data analysis. Interested in data analysis, data preprocessing, machine learning, visualization and extracting meaningful insights from data.',
  location: 'Hyderabad, Telangana',
  email: 'snehabogaram75@gmail.com',
  links: {
        linkedin: 'https://www.linkedin.com/in/sneha-bogaram-5640262a3',
        github: 'https://github.com/snehabogaram75-hub',
  },
  resumePdf: '/assets/Sneha_Bogaram_Resume.pdf',
  portrait: {
    src: '/assets/portrait-no-bg-720.png',
    srcSet: '/assets/portrait-no-bg-420.png 420w, /assets/portrait-no-bg-720.png 720w, /assets/portrait-no-bg-1100.png 1100w',
    alt: 'Portrait of Sneha Bogaram',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Predictive Maintenance', 'Python'],
};

export const education = [
  {
    school: 'Princeton Institute of Engineering and Technology for Women',
    place: 'Hyderabad, Telangana',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    period: '2022 – 2026',
    score: '7.90 CGPA',
  },
];

export const experience = [
  {
    company: 'NeuSparkX Technologies Pvt Ltd',
    role: 'AI/ML',
    place: 'India',
    period: 'Current',
    points: [
      'Working on AI/ML-focused tasks and developing practical machine learning skills.',
      'Exploring data preparation, model training, prediction and evaluation workflows.',
      'Building experience with Python and machine learning through project-based work.',
    ],
  },
  {
    company: 'TAO DIGITALS',
    role: 'AI Data Annotation Intern',
    place: 'India',
    period: 'May 2026 – June 2026',
    points: [
      'Annotated and validated datasets for AI and Machine Learning model training while maintaining annotation quality.',
      'Performed data classification, labeling and quality validation according to annotation guidelines.',
      'Reviewed annotated datasets to identify inconsistencies and improve data quality.',
      'Collaborated with cross-functional teams to deliver accurate datasets within project timelines.',
      'Maintained documentation and followed quality assurance standards.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'boiler-predictive-maintenance',
    title: '250TPH Boiler Predictive Maintenance',
    year: '2026',
    genre: 'AI/ML • LSTM • Predictive Maintenance',
    logline:
      'A time-series machine learning project focused on forecasting boiler component conditions and identifying potential maintenance risks.',
    stack: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'NumPy', 'Scikit-learn'],
    build: [
      'Developed LSTM-based time-series forecasting workflows for boiler component data, including ash deposition in the Economizer and Air Preheater.',
      'Worked with multiple prediction horizons to estimate current and future ash deposition and support earlier identification of critical operating conditions.',
      'Handled leakage prediction as a separate modelling task and examined component risk indicators for predictive-maintenance use cases.',
    ],
    features: [
      '250TPH boiler component monitoring',
      'Time-series forecasting with LSTM',
      'Economizer ash deposition prediction',
      'Air Preheater ash deposition prediction',
      'Multiple future prediction horizons',
      'Separate air/steam leakage modelling',
      'Component risk and time-to-critical analysis',
    ],
    metrics: [
      { value: '250TPH', label: 'boiler capacity' },
      { value: 'LSTM', label: 'time-series model' },
      { value: 'Multi-horizon', label: 'future predictions' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    year: '2026',
    genre: 'Machine Learning • Classification',
    logline:
      'A machine learning project focused on identifying customers who may be likely to leave a service.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization'],
    build: [
      'Explored a customer churn prediction use case using a machine learning workflow.',
      'Focused on understanding customer data, preparing features and evaluating classification predictions.',
    ],
    features: [
      'Customer data exploration',
      'Data preprocessing',
      'Feature preparation',
      'Machine learning classification workflow',
      'Model evaluation',
      'Churn prediction use case',
    ],
    metrics: [
      { value: 'ML', label: 'classification approach' },
      { value: 'Python', label: 'implementation language' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'wayvo',
    title: 'Wayvo Application',
    year: '2026',
    genre: 'Flutter • Application Development',
    logline:
      'A mobile application project built with Flutter, with ongoing work on app assets and launcher icon integration.',
    stack: ['Flutter', 'Dart', 'Mobile UI', 'Android', 'iOS'],
    build: [
      'Worked on a Flutter application project and its mobile app structure.',
      'Configured application assets and worked through launcher icon generation and platform-specific setup.',
    ],
    features: [
      'Flutter application development',
      'Mobile user interface',
      'Application asset management',
      'Launcher icon setup',
      'Platform-specific configuration',
    ],
    metrics: [
      { value: 'Flutter', label: 'app framework' },
      { value: 'Mobile', label: 'application platform' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'hospital-los-xai',
    title: 'Hospital Length of Stay Prediction using Explainable AI',
    year: '2026',
    genre: 'Machine Learning • Healthcare • Explainable AI',
    logline: 'A machine learning project to predict hospital length of stay and understand the factors influencing model predictions.',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Explainable AI'],
    build: [
      'Cleaned and preprocessed healthcare data, handled missing values and performed feature engineering.',
      'Conducted exploratory data analysis to explore important patient features.',
      'Implemented regression and classification models using Scikit-learn.',
      'Evaluated model performance using appropriate metrics.',
      'Explored Explainable AI methods to interpret model predictions and improve transparency.',
    ],
    features: [
      'Healthcare data preprocessing',
      'Exploratory data analysis',
      'Machine learning modelling',
      'Model evaluation',
      'Explainable AI',
    ],
    metrics: [],
    palette: violet,
    motif: 'flow',
  },
  {
    id: 'traffic-violation-detection',
    title: 'Traffic Violation Detection System',
    year: '2026',
    genre: 'Python • OpenCV • Computer Vision',
    logline: 'A computer vision project for vehicle detection and number plate recognition with violation records stored in MySQL.',
    stack: ['Python', 'OpenCV', 'MySQL', 'Image Processing'],
    build: [
      'Developed vehicle detection and number plate recognition workflows using Python and OpenCV.',
      'Applied image processing techniques to support vehicle identification.',
      'Stored traffic violation records in a MySQL database for retrieval.',
      'Explored automation of traffic monitoring using computer vision.',
    ],
    features: [
      'Vehicle detection',
      'Number plate recognition',
      'Image processing',
      'MySQL record storage',
    ],
    metrics: [],
    palette: ocean,
    motif: 'shield',
  }
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'academic-participation',
    title: 'Academic & Extracurricular Participation',
    org: 'School Activities',
    detail: 'Actively participated in academic and extracurricular activities during schooling.',
    laurel: 'Participation',
  },
  {
    id: 'teamwork-leadership',
    title: 'Teamwork & Leadership',
    org: 'Event Participation',
    detail: 'Demonstrated teamwork and leadership skills through participation in events.',
    laurel: 'Teamwork',
  },
  {
    id: 'abacus-certification',
    title: 'Abacus Certification',
    org: 'Abacus',
    detail: 'Earned an Abacus certification demonstrating concentration and calculation skills.',
    laurel: 'Certification',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Deloitte', name: 'Data Analytics Job Simulation', link: '' },
  { issuer: 'Tata', name: 'Data Visualization: Empowering Business with Effective Insights', link: '' },
  { issuer: 'IBM SkillsBuild', name: 'IBM SkillsBuild', link: '' },
  { issuer: 'Skill India', name: 'Python Programming', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Languages used in project work',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary focus' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    subtitle: 'Model development and prediction',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'LSTM', mono: 'Ls' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Scikit-learn', mono: 'Sk' },
    ],
  },
  {
    id: 'data',
    title: 'Data Handling',
    subtitle: 'Preparing and working with datasets',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Data Preprocessing', mono: 'Dp' },
      { name: 'Data Visualization', mono: 'Dv' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Development',
    subtitle: 'Project workflow and development tools',
    skills: [
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Git', mono: 'Gt' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'application',
    title: 'Application Development',
    subtitle: 'Mobile app project experience',
    skills: [
      { name: 'Flutter', mono: 'Fl' },
      { name: 'Dart', mono: 'Da' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['250TPH Boiler Predictive Maintenance', 'Customer Churn Prediction'],
  SQL: ['Data handling and database fundamentals'],
  'Machine Learning': ['250TPH Boiler Predictive Maintenance', 'Customer Churn Prediction'],
  LSTM: ['250TPH Boiler Predictive Maintenance'],
  TensorFlow: ['250TPH Boiler Predictive Maintenance'],
  'Scikit-learn': ['Machine learning project workflows'],
  Pandas: ['Boiler time-series data preparation', 'Customer data preparation'],
  NumPy: ['Numerical data processing'],
  'Data Preprocessing': ['Boiler predictive maintenance', 'Customer churn prediction'],
  'Data Visualization': ['Exploratory data analysis workflows'],
  'Jupyter Notebook': ['Machine learning experiments'],
  'VS Code': ['Project development'],
  Git: ['Development workflow'],
  MySQL: ['Database fundamentals'],
  Flutter: ['Wayvo Application'],
  Dart: ['Wayvo Application'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'B.Tech',
    synopsis: 'Building a foundation in computer science and developing an interest in artificial intelligence and machine learning.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Graduate',
        description: 'Completed a Bachelor of Technology and began focusing on practical AI/ML and software projects.',
        tags: ['B.Tech', 'Computer Science', 'AI/ML'],
        runtime: 'Graduated 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning AI & ML',
    period: '2026',
    synopsis: 'Developing hands-on experience with Python, machine learning, time-series data and prediction workflows.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Data',
        description: 'Working with structured datasets, data preparation and exploratory analysis.',
        tags: ['Python', 'Pandas', 'NumPy'],
        runtime: 'Project-based learning',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Model',
        description: 'Exploring LSTM models and multi-horizon forecasting for boiler predictive maintenance.',
        tags: ['LSTM', 'TensorFlow', 'Forecasting'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Projects',
    period: '2026',
    synopsis: 'Applying technical learning to predictive maintenance, customer churn prediction and mobile application development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Predictive Maintenance',
        description: 'Working on ash deposition and leakage prediction for 250TPH boiler components.',
        tags: ['Boiler', 'LSTM', 'Risk Prediction'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Customer Churn',
        description: 'Exploring a machine learning classification use case to predict possible customer churn.',
        tags: ['Python', 'Machine Learning', 'Classification'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Wayvo',
        description: 'Working on a Flutter application and its mobile development assets.',
        tags: ['Flutter', 'Dart', 'Mobile App'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'The Next Chapter',
    period: 'Now',
    synopsis: 'Continuing to strengthen Python, machine learning and practical engineering skills.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Keep Building',
        description: 'Improving project quality, model evaluation and the ability to explain technical work clearly.',
        tags: ['Python', 'AI/ML', 'Continuous Learning'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Featured project',
    title: 'Boiler Predictive Maintenance',
    detail: 'LSTM forecasting for boiler component conditions',
    palette: ocean,
  },
  {
    label: 'AI/ML project',
    title: 'Ash Deposition Prediction',
    detail: 'Economizer and Air Preheater modelling',
    palette: crimson,
  },
  {
    label: 'Prediction use case',
    title: 'Leakage Modelling',
    detail: 'Separate leakage prediction and risk indicators',
    palette: amber,
  },
  {
    label: 'Machine learning',
    title: 'Customer Churn',
    detail: 'Customer data and classification workflow',
    palette: violet,
  },
  {
    label: 'Application project',
    title: 'Wayvo',
    detail: 'Flutter mobile application',
    palette: jade,
  },
  {
    label: 'Core language',
    title: 'Python',
    detail: 'Current focus for AI/ML development',
    palette: ocean,
  },
  {
    label: 'Model approach',
    title: 'LSTM',
    detail: 'Time-series forecasting',
    palette: crimson,
  },
  {
    label: 'Data tools',
    title: 'Pandas & NumPy',
    detail: 'Data preparation and numerical processing',
    palette: amber,
  },
  {
    label: 'Development',
    title: 'Flutter',
    detail: 'Mobile application development',
    palette: jade,
  },
  {
    label: 'Career focus',
    title: 'AI & Machine Learning',
    detail: 'Learning through practical projects',
    palette: violet,
  },
];

/** Slides for the "Play Intro" cinematic sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',
    title: 'Sneha Bogaram',
    lines: ['B.Tech graduate', 'Hyderabad, Telangana', 'AI/ML and Python-focused project work'],
    chips: ['AI/ML', 'Python'],
  },
  {
    kicker: 'Technical focus',
    title: 'Learning by building.',
    lines: ['Python, machine learning and data preparation', 'Time-series forecasting with LSTM models'],
    chips: ['Python', 'LSTM', 'TensorFlow', 'Pandas'],
  },
  {
    kicker: 'Featured project',
    title: 'Boiler Predictive Maintenance',
    lines: ['250TPH boiler component monitoring', 'Ash deposition forecasting and separate leakage modelling'],
    chips: ['Predictive Maintenance', 'LSTM'],
  },
  {
    kicker: 'Machine learning',
    title: 'Customer Churn Prediction',
    lines: ['Customer data preparation', 'Classification and model evaluation workflow'],
    chips: ['Python', 'Machine Learning'],
  },
  {
    kicker: 'Application development',
    title: 'Wayvo',
    lines: ['Flutter application project', 'Mobile UI and application asset configuration'],
    chips: ['Flutter', 'Dart'],
  },
  {
    kicker: 'Experience',
    title: 'Growing through practice',
    lines: ['AI/ML-related project work', 'AI data annotation internship at TAO DIGITALS'],
  },
  {
    kicker: 'Current mission',
    title: 'Build. Learn. Improve.',
    lines: ['Strengthening Python and machine learning skills', 'Turning project work into practical solutions'],
  },
];

export type ProfileId = 'sneha' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sneha',
    name: 'Sneha',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Projects, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'AI/ML',
    blurb: 'Machine learning projects and tools',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'The journey and project highlights',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'Introduction • Education & experience',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Projects • AI/ML & Application Development`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Featured projects and technical interests',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Moments',
    card: 'Achievements & Certifications',
    meta: `${achievements.length} Verified Achievements • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};
