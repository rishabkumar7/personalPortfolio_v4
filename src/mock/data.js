import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Rishab ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Rishab',
  subtitle: '',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I try to create noice web experiences. I am experienced in Amazon Web Services and can help clients with several related technologies.',
  paragraphTwo: 'A young technical guy with experience in creating solutions for customers.',
  paragraphThree: 'Dynamic and goal-oriented. Confident and poised in interactions with individuals at all levels. Focused and dedicated; I have a good eye for detail and put in my best effort in time management and prioritization.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: '01.png',
    title: 'Covid Dashboard',
    info: '',
    info2: '',
    url: 'https://covid-19.rishabkumar.ga/',
    repo: 'https://github.com/rishabkumar7/covid-19', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: '05.jpg',
    title: 'Weather Dashboard',
    info: '',
    info2: '',
    url: 'https://weatherdashboard.rishabkumar.ga/',
    repo: 'https://github.com/rishabkumar7/weatherDashboard', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: '04.jpg',
    title: 'My Blog Site',
    info: '',
    info2: '',
    url: 'https://blog.rishabkumar.ga',
    repo: 'https://github.com/rishabkumar7/myblog', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: '06.jpg',
    title: 'Cloud Notes',
    info: '',
    info2: '',
    url: 'https://rishabkumar7.github.io/CloudNotes/',
    repo: 'https://github.com/rishabkumar7/CloudNotes', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: '07.jpg',
    title: 'Hacker News Clone',
    info: '',
    info2: '',
    url: 'https://hackernews-clone.rishabkumar.ga/#/',
    repo: 'https://github.com/rishabkumar7/hackernews', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rishabkumar7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/rishabk7',
    },
    {
      id: uuidv1(),
      name: 'dev',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rishabkumar7/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/rishabkumar7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
