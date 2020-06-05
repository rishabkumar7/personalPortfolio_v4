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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
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
    img: '02.png',
    title: 'Weather Dashboard',
    info: '',
    info2: '',
    url: 'https://weatherdashboard.rishabkumar.ga/',
    repo: 'https://github.com/rishabkumar7/weatherDashboard', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: '03.png',
    title: 'My Blog Site',
    info: '',
    info2: '',
    url: 'https://blog.rishabkumar.ga',
    repo: 'https://github.com/rishabkumar7/myblog', // if no repo, the button will not show up
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
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
