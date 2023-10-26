import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  kuview,
  sca,
  myportfolio,
  threejs,
  postgresql,
  gigmanager,
  tracklication,
  logo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: web,
  },
  {
    title: 'Front-end Developer',
    icon: mobile,
  },
  {
    title: 'Back-end Developer',
    icon: backend,
  },
  {
    title: 'Full-stack Developer ',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'RSX Analyst',
    company_name: 'SCA/USFWS',
    icon: sca,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Dec 2022',
    points: [
      'Leveraged R programming language to create customized data visualization solutions, generating visually engaging and informative graphs to depict fish population trends derived from survey data, enabling efficient data communication and facilitating data-driven insights for stakeholders.',
      'Collaborated with biologists to establish strong interdisciplinary teamwork, facilitating the seamless acquisition of data and proficiently analyzing RSX structures within Survey123, while also harnessing ArcGIS mapping capabilities to deliver geospatial insights for enhanced decision-making processes.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'KuView',
    icon: kuview,
    iconBg: '#383E56',
    date: 'May 2023 - Present',
    points: [
      "Engineered Prometheus' built-in integration with Kubernetes to simplify monitoring by fetching cluster-level metrics, and harnessed Grafana to design user-friendly, interactive dashboards and dynamic visual representations of Kubernetes cluster metrics.",
      'Constructed a Kubernetes cluster using Kubectl, enabling the development and deployment of the containerized application.',
      'Optimized user experience across the Performance and Health Dashboards by integrating components with React Router, effectively managing performant rendering for displaying Kubernetes cluster latency, uptime, and error rate graphs.',
      "Orchestrated a high-performance Node.js and Express Data Aggregation Service, leveraging Node's high throughput capabilities to manage consuming cluster health data while supporting multiple services by providing the aggregate data outward.",
      "Utilized MongoDB's flexible and scalable data model for efficient storage and management of data, ensuring seamless retrieval and storage with horizontal scalability and high-performance capabilities.",
      'Extended the Authentication and Session Persistence Service, utilizing JWTs with MongoDB to persist user sessions and using bcrypt with salting authentication strategies to encrypt specific user data, enhancing the overall experience and performance.',
      'Designed a testing strategy, utilizing Supertest for server-side validation, React Testing Library for UI rendering and interaction testing, and Jest framework integration to ensure code functionality, unit tests, and system performance, for codebase maintainability, scalability, readability, and overall system dependability.',
      'Elevated application aesthetics through the utilization of SCSS, modularizing code, and establishing cohesive design patterns across diverse components and pages.',
      'Product developed under tech accelerator OSLabs.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'My-Portfolio',
    description:
      'Web application to display my recent work experience, skills, and accomplishments. Implemented 3D visuals with Three.js and styling with Tailwind. Used react for reusable components and to structure web application content.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: myportfolio,
    source_code_link: 'https://github.com/CameronKirksey21/My-Portfolio',
  },
  {
    name: 'Tracklication',
    description:
      'Effectively utilized PostgreSQL to seamlessly store and manage extensive job information, leveraging its advanced indexing and querying capabilities for efficient data retrieval, ensuring robust data integrity, and enabling seamless scalability to accommodate a growing volume of job entries.\
      Leveraged Webpack to minify, uglify, and bundle files for a more performant application, and facilitated the development process by taking advantage of hot reloading with Webpack Dev Server.',
    tags: [
      {
        name: 'Node.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'green-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'pink-text-gradient',
      },
    ],
    image: tracklication,
    source_code_link: 'https://github.com/Tracklication/Tracklication',
  },
  {
    name: 'Gig Manager',
    description:
      'Led the development of a gig manager application designed to streamline the tracking of musical performers and performance venue availability, enabling easy scheduling and enhancing the coordination of live music events, resulting in improved efficiency and seamless event management.Refactored and engineered reusable React components for task card creation and display, fortifying maintainability, fostering modularization, and adhering to Flux architecture for efficient one-way data flow.\
      Leveraged Node.js and Express.js to design, develop, and optimize middleware for efficient handling of API and endpoint calls, facilitating seamless data retrieval and storage within a MongoDB database.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: gigmanager,
    source_code_link: 'https://github.com/CameronKirksey21/Gig-Manager',
  },
];

export { services, technologies, experiences, testimonials, projects };
