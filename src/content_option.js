const logotext = 'Sylitas';
const meta = {
  title: 'Sylitas | Nguyễn Tuấn Duy',
  description: 'Nguyễn Tuấn Duy is a Senior Fullstack Software Engineer focused on backend systems, data engineering, internal tools, and product delivery.',
};

const introdata = {
  title: "Hi, I'm Nguyễn Tuấn Duy",
  animated: {
    1: 'Senior Fullstack Software Engineer',
    2: 'Backend-focused product builder',
    3: 'Data engineer for high-scale systems',
    4: 'Builder of internal tools and developer workflows',
  },
  description: 'I build practical software across backend, data, and product layers — from APIs and real-time services to internal tools that help teams move faster.',
  your_img_url: 'images/profile.jpg',
};

const dataabout = {
  title: 'A bit about me',
  aboutme:
    "I'm a backend-first fullstack engineer with experience across product delivery, platform thinking, and data-heavy systems. My work spans JavaScript and TypeScript services, React-based product development, cloud infrastructure, CI/CD, and internal tooling. I enjoy turning ambiguous product or technical requirements into clear systems, practical implementation plans, and reliable software that teams can build on.",
};
const worktimeline = [
  {
    jobtitle: 'Senior Backend Engineer + Data Engineer',
    where: 'Birdeye.so',
    date: 'Sep 2025 - Present',
  },
  {
    jobtitle: 'Senior Fullstack Software Engineer + Data Engineer',
    where: 'FPT Smart Cloud',
    date: 'Apr 2024 - Sep 2025',
  },
  {
    jobtitle: 'Senior Backend Software Engineer',
    where: 'EMDDI / XanhSM',
    date: 'Jul 2023 - Apr 2024',
  },
  {
    jobtitle: 'Fullstack Software Engineer',
    where: 'Mor Software',
    date: 'May 2023 - Jul 2023',
  },
  {
    jobtitle: 'Middle Fullstack → Senior Backend, Team Lead Backend',
    where: 'FPT Software (Quadient)',
    date: 'Jul 2021 - May 2023',
  },
  {
    jobtitle: 'Fullstack Software Engineer & Data Analysis',
    where: 'Hanoi Telecom',
    date: 'Oct 2020 - Jul 2021',
  },
  {
    jobtitle: 'Internship → Fullstack Developer',
    where: 'Vietnam Academy of Science and Technology (VAST)',
    date: 'Jun 2019 - Sep 2020',
  },
];

const skills = [
  {
    name: 'JavaScript / TypeScript / Node.js',
    value: 95,
  },
  {
    name: 'Backend APIs, Realtime Services, Queues',
    value: 90,
  },
  {
    name: 'ReactJS / Fullstack Product Delivery',
    value: 82,
  },
  {
    name: 'AWS / Docker / CI-CD / Kubernetes',
    value: 80,
  },
  {
    name: 'Data Systems: MongoDB, Redis, ClickHouse, ElasticSearch',
    value: 85,
  },
];

const services = [
  {
    title: 'Backend & Platform Engineering',
    description:
      'I design and implement backend systems that are practical, observable, and ready for real product usage — including REST APIs, real-time services, message queues, background jobs, and integrations across complex business flows.',
  },
  {
    title: 'Fullstack Product Delivery',
    description:
      'I work comfortably across backend and frontend to ship end-to-end features, especially when product requirements are ambiguous and need someone to turn them into technical solutions, implementation plans, and reliable delivery.',
  },
  {
    title: 'Data, Tooling, and Automation',
    description:
      'I build internal tools, data pipelines, and workflow automation that help teams move faster — from crawling and streaming data to AI-assisted internal tools, deployment flows, and developer productivity improvements.',
  },
];

const dataportfolio = [
  {
    img: 'images/birdeye.png',
    description: 'Birdeye.so — backend and data engineering for real-time multi-chain analytics, internal tools, and AI-assisted workflows.',
    link: 'https://birdeye.so',
  },
  {
    img: 'images/youtube-downloader.png',
    description: 'YT Playlist Sync — a macOS app for downloading YouTube music with playlist sync and Apple Music integration.',
    link: 'https://github.com/sylitas/youtube-downloader',
  },
  {
    img: 'images/openclaw-review-solution.svg',
    description: 'OpenClaw Review Solution — a local review tool for AI agents to render artifacts and collect human feedback in an Electron UI.',
    link: 'https://github.com/sylitas/openclaw-review-solution',
  },
  {
    img: 'images/portfolio.png',
    description: 'This portfolio website — source code and personal web presence.',
    link: 'https://github.com/sylitas/react-portfolio',
  },
  {
    img: 'images/parallax-scrolling.png',
    description: 'Parallax scrolling demo exploring interactive front-end motion.',
    link: 'https://sylitas.github.io/Parallax-scrolling/',
  },
  {
    img: 'images/old-resume.png',
    description: 'Previous online resume version and older portfolio iteration.',
    link: 'https://sylitas.github.io/MonCV/',
  },
  {
    img: 'images/AWS.png',
    description: 'Node.js and AWS-focused personal project built around cloud-oriented engineering work.',
    link: 'https://github.com/sylitas/-FPTSoftware--Enrisk-Skill',
  },
  {
    img: 'images/message-bot.png',
    description: 'Automation and messaging experiment for Instagram workflows.',
    link: 'https://github.com/sylitas/InstagramLoopMessage',
  },
  {
    img: 'images/syl-bot.png',
    description: 'A Discord bot project with media and command-driven interactions.',
    link: 'https://github.com/sylitas/Syl',
  },
  {
    img: 'images/ggs-bot.png',
    description: 'A Google Sheet and Discord automation project for handling spreadsheet data.',
    link: 'https://github.com/sylitas/GoogleSheet',
  },
  {
    img: 'images/amis.png',
    description: 'Internal business support project focused on data and operations workflows.',
    link: 'https://github.com/sylitas/amis',
  },
  {
    img: 'images/lcc.png',
    description: 'A healthcare project supporting radiology and lung cancer care workflows.',
    link: 'https://github.com/sylitas/Lung-Cancer-Care',
  },
  {
    img: 'images/parcellocker.png',
    description: 'Parcel locker and logistics product work for private clients.',
    link: '#privateProject',
  },
  {
    img: 'images/switchmail.png',
    description: 'Mailing and logistics workflow work for private projects.',
    link: '#privateProject',
  },
  {
    img: 'images/flickr.png',
    description: 'An Android project for searching and browsing image results from Flickr.',
    link: 'https://github.com/sylitas/Flickr-Brower',
  },
];

const contactConfig = {
  YOUR_EMAIL: 'johnluy1999@gmail.com',
  YOUR_FONE: '(+84) 834120699',
  description: 'Feel free to reach out for product engineering, backend systems, fullstack work, or developer tooling collaboration.',
  // ? GET it on repository environment
  YOUR_SERVICE_ID: 'service_01ajcn9',
  YOUR_TEMPLATE_ID: 'template_27uqu1x',
  YOUR_USER_ID: 'ANv9uEN355wtwoLp6',
};

const socialprofils = {
  github: 'https://github.com/sylitas',
  facebook: 'https://www.facebook.com/sylitas',
  linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-tu%E1%BA%A5n-duy-697b60165/',
  instagram: 'https://www.instagram.com/sylitas/',
};
export { meta, dataabout, dataportfolio, worktimeline, skills, services, introdata, contactConfig, socialprofils, logotext };
