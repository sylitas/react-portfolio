const logotext = "Sylitas";
const meta = {
  title: "Sylitas",
  description:
    "I’m Nguyễn Tuấn Duy Software Engineer _ Full stack developer, currently working in Hà Nội, Việt Nam",
};

const introdata = {
  title: "Hi!👋🏻 Welcome to my profile",
  animated: {
    1: "My name is Nguyễn Tuấn Duy",
    2: "I'm a Software Engineer",
    3: "a Cloud Developer",
    4: "and a Photographer",
  },
  description: "I'm in love with JS programming and JS Framework",
  your_img_url: "images/profile.jpg",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "I’m an excellent fun and friendly person, I’m honest and punctual, I work well in a team but also on my own as I like to set myself goals that I will achieve, and I have good listening and communication skills. I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.",
};
const worktimeline = [
  {
    jobtitle: "Database Developer",
    where: "FPT Information System",
    date: "Oct 2019 - Jan 2020",
  },
  {
    jobtitle: "Fullstack Developer",
    where: "HTC Telecom",
    date: "Oct 2020 - May 2021",
  },
  {
    jobtitle: "Backend Developer",
    where: "SOTATEK., JSC",
    date: "May 2021 - Jul 2021",
  },
  {
    jobtitle: "Fullstack Developer",
    where: "FPT Software",
    date: "Jul 2021 - Present",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "NodeJS",
    value: 90,
  },
  {
    name: "ReactJS",
    value: 50,
  },
  {
    name: "Amazon Web Services",
    value: 70,
  },
];

const services = [
  {
    title: "Software Engineer",
    description:
      "I am a software engineer with a passion for designing and developing innovative software solutions. I have expertise in programming languages such as Java, Python, and C++, and I am comfortable working with various software development tools and frameworks. My experience includes developing software applications for web, desktop, and mobile platforms, as well as building scalable and secure database systems. I am a team player and possess excellent problem-solving skills, which allow me to work effectively in a fast-paced and collaborative environment. I am constantly learning and exploring new technologies to improve my skills and keep up with the latest industry trends.",
  },
  {
    title: "Cloud developer",
    description:
      "I am an AWS cloud developer with a passion for leveraging cloud technologies to design and develop scalable and reliable solutions. I have a deep understanding of cloud computing concepts and possess extensive experience in AWS services such as EC2, S3, Lambda, CloudFormation, and CloudWatch. I am adept at deploying, managing, and automating cloud infrastructure and applications using DevOps tools like Jenkins, Git, and Docker. My experience includes designing and implementing solutions for web applications, data analytics, machine learning, and IoT. I am a problem-solver who enjoys finding innovative ways to optimize cloud resources and ensure high availability and performance. I am a team player who values collaboration and continuous learning to keep up with the fast-paced and ever-evolving cloud industry.",
  },
  {
    title: "Fullstack Developer",
    description:
      "I am a JS fullstack developer with a passion for creating elegant and functional web applications. I am proficient in both front-end and back-end development, with expertise in JavaScript, HTML, CSS, Node.js, and popular JS frameworks such as React, Angular, and Vue.js. I have experience working with databases such as MongoDB, MySQL, and PostgreSQL, as well as integrating third-party APIs and services. I am a problem-solver who enjoys finding innovative solutions to complex challenges, and I am comfortable working in a fast-paced, agile development environment. My experience includes developing scalable and responsive web applications, implementing security and performance optimizations, and building RESTful APIs. I am a team player who values collaboration and continuous learning to stay up-to-date with the latest industry trends and best practices.",
  },
];

const dataportfolio = [
  {
    img: "images/parallax-scrolling.png",
    description: "Demo parallax scrolling",
    link: "https://sylitas.github.io/Parallax-scrolling/",
  },
  {
    img: "images/portfolio.png",
    description: "Source Code of this site",
    link: "https://github.com/sylitas/react-portfolio",
  },
  {
    img: "images/old-resume.png",
    description: "Source Code of my old resume",
    link: "https://sylitas.github.io/MonCV/",
  },
  {
    img: "images/AWS.png",
    description:
      "Source code of personal project at FPT Software about NodeJS and AWS",
    link: "https://github.com/sylitas/-FPTSoftware--Enrisk-Skill",
  },
  {
    img: "images/message-bot.png",
    description: "Implementing a sending message bot for spamming at Instagram",
    link: "https://github.com/sylitas/InstagramLoopMessage",
  },
  {
    img: "images/syl-bot.png",
    description:
      "A discord bot can play music and youtube video following by command",
    link: "https://github.com/sylitas/Syl",
  },
  {
    img: "images/ggs-bot.png",
    description:
      "A discord bot can extract xlsx and csv files of Google Sheet using command",
    link: "https://github.com/sylitas/GoogleSheet",
  },
  {
    img: "images/amis.png",
    description: "Project AMIS",
    link: "https://github.com/sylitas/amis",
  },
  {
    img: "images/lcc.png",
    description: "Project Lung Cancer Care",
    link: "https://github.com/sylitas/Lung-Cancer-Care",
  },
  {
    img: "images/parcellocker.png",
    description: "Project logistic about parcel locker",
    link: "#privateProject",
  },
  {
    img: "images/switchmail.png",
    description: "Project logistic about mailing",
    link: "#privateProject",
  },
  {
    img: "images/flickr.png",
    description:
      "Project about searching all cat images at Flickr using Android Mobile",
    link: "https://github.com/sylitas/Flickr-Brower",
  },
];

const contactConfig = {
  YOUR_EMAIL: "johnluy1999@gmail.com",
  YOUR_FONE: "(+84)834120699",
  description: "Feel free to contact me anytime!",
  // ? GET it on repository environment
  YOUR_SERVICE_ID: "service_01ajcn9",
  YOUR_TEMPLATE_ID: "template_27uqu1x",
  YOUR_USER_ID: "ANv9uEN355wtwoLp6",
};

const socialprofils = {
  github: "https://github.com/sylitas",
  facebook: "https://www.facebook.com/sylitas",
  linkedin:
    "https://www.linkedin.com/in/nguy%E1%BB%85n-tu%E1%BA%A5n-duy-697b60165/",
  instagram: "https://www.instagram.com/sylitas/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
