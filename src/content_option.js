const logotext = 'Sylitas';
const meta = {
  title: 'Nguyễn Tuấn Duy — Backend Engineer',
  description: 'I build backend systems that survive production. Real-time data pipelines, multi-chain analytics infrastructure, internal tooling, and security-sensitive engineering across fintech, blockchain, and logistics.',
};

const introdata = {
  title: 'Nguyễn Tuấn Duy',
  animated: {
    1: 'Backend engineer for high-throughput distributed systems',
    2: 'Builder of developer tools and AI-assisted workflows',
    3: 'Platform thinking — from cache strategy to production debugging',
    4: 'Security-conscious engineer with operational instinct',
  },
  description:
    'I build backend systems that survive production. My work spans real-time data pipelines, multi-chain analytics infrastructure, internal developer tooling, and security-sensitive product engineering across fintech, blockchain, and logistics domains.',
  your_img_url: 'images/profile.jpg',
};

const dataabout = {
  title: 'A bit about me',
  aboutme:
    "I'm a backend-first engineer who thinks about systems the way they behave under load, not just on paper. Over 7 years I've built and operated services handling real-time data at scale — caching strategies that don't silently fail, alert pipelines that don't waste daily slots on invalid events, worker topologies that survive restarts without losing state.\n\nI've led backend teams, designed event-driven architectures with Kafka and CDC pipelines, and built internal AI tooling that teams actually use. I don't chase technology for its own sake — I pick the tool that survives the next incident.\n\nMy default mode is practical. I value systems that are observable, testable, and boringly reliable over clever ones that no one dares touch at 2AM.",
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
    where: 'VAST',
    date: 'Jun 2019 - Sep 2020',
  },
];

const skills = {
  core: ['TypeScript', 'JavaScript', 'Node.js', 'Go', 'Python'],
  backend: ['REST API', 'gRPC', 'WebSocket', 'Message Queues', 'Event-Driven Architecture'],
  data: ['Kafka', 'Redis', 'Elasticsearch', 'ClickHouse', 'MongoDB', 'CDC (Debezium)'],
  infra: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx'],
};

const services = [
  {
    title: 'Backend & Platform Engineering',
    description:
      'I design and build backend systems for production — not just CRUD APIs. Real-time services, cache layers that invalidate correctly, message-driven pipelines, and distributed systems that handle partial failure without cascading.',
  },
  {
    title: 'Developer Tools & AI Workflows',
    description:
      'I build internal tools that teams actually adopt. From custom CLI tools and bot automation to AI-assisted workflows and code analysis agents — I make developer experience a first-class concern, not an afterthought.',
  },
  {
    title: 'Data Infrastructure & Pipelines',
    description:
      'I work across the data stack — streaming ingestion via Kafka and CDC, OLAP storage with ClickHouse, search and observability with Elasticsearch, and caching strategies that balance consistency, latency, and operational complexity.',
  },
];

const featuredProjects = [
  {
    img: 'images/birdeye.png',
    description:
      'Backend & data engineering for Birdeye — a real-time multi-chain crypto analytics platform serving millions of traders. Designed cache invalidation pipelines, cross-indicator alert operators, and AI-assisted internal workflows.',
    link: 'https://birdeye.so',
  },
  {
    img: 'images/portfolio.png',
    description:
      'Hermes Agent — a personal AI engineering assistant with tool-using capabilities, configured with multi-profile architecture, custom MCP servers, and production workflow integrations.',
    link: 'https://github.com/sylitas',
  },
  {
    img: 'images/youtube-downloader.png',
    description:
      'YT Playlist Sync — a macOS desktop app for downloading YouTube music with playlist sync and Apple Music integration, built with Electron.',
    link: 'https://github.com/sylitas/youtube-downloader',
  },
  {
    img: 'images/openclaw-review-solution.svg',
    description:
      'OpenClaw Review Solution — an Electron-based local review tool for AI agent artifacts, enabling human feedback loops in AI development workflows.',
    link: 'https://github.com/sylitas/openclaw-review-solution',
  },
  {
    img: 'images/portfolio.png',
    description:
      'This portfolio itself — a React SPA with Three.js visualizations, deployed via GitHub Pages on a custom domain.',
    link: 'https://github.com/sylitas/react-portfolio',
  },
];

const sideProjects = [
  {
    img: 'images/amis.png',
    description:
      'Business support tool for internal data and operations workflows — AMIS+ integration, Google Data Studio, and Discord bot.',
    link: 'https://github.com/sylitas/amis',
  },
  {
    img: 'images/pls-parcel-locker.jpg',
    description:
      'PLS-Merge / Parcel Locker — logistics system for parcel locker analytics across EU, UK, and Japan markets. Built with Node.js, Elasticsearch, RabbitMQ, and Docker for FPT Software / Quadient.',
    link: '#privateProject',
  },
  {
    img: 'images/neopost-logistics.jpg',
    description:
      'NeopostLab — POC and rapid prototyping for Quadient. Serverless architecture on AWS with CloudFormation, GraphQL, and SOAP integrations. Part of the Neopost R&D pipeline.',
    link: '#privateProject',
  },
  {
    img: 'images/ai-mentor.jpg',
    description:
      'AI Mentor — virtual assistant platform for employee upskilling at FPT Smart Cloud. Led a team of 6 backend devs, built CDC pipeline from MySQL to AI training data using Debezium, Kafka, and Go services.',
    link: '#privateProject',
  },
  {
    img: 'images/xanhsm-taxi.jpg',
    description: 'XanhSM electric taxi — payment system backend handling prepay/postpaid, ZaloPay, Viettel Money, VnDirect, bank, Visa, and QR payment integrations.',
    link: '#privateProject',
  },
  {
    img: 'images/talent-assessment.jpg',
    description:
      'Talent Assessment — exam creation and evaluation system with GraphQL API, Prisma, PostgreSQL, and Apollo Server. Automated scoring, participant management, and CI/CD via Jenkins.',
    link: '#privateProject',
  },
  {
    img: 'images/old-resume.png',
    description:
      'Previous online resume (MonCV) — earlier portfolio iteration, now superseded by sylitas.com.',
    link: 'https://sylitas.github.io/MonCV/',
  },
  {
    img: 'images/parallax-scrolling.png',
    description: 'Parallax scrolling demo exploring interactive front-end motion and scroll-driven animations.',
    link: 'https://sylitas.github.io/Parallax-scrolling/',
  },
  {
    img: 'images/message-bot.png',
    description: 'Instagram auto-messaging workflow experiment.',
    link: 'https://github.com/sylitas/InstagramLoopMessage',
  },
  {
    img: 'images/ggs-bot.png',
    description: 'Google Sheet + Discord bot — automated spreadsheet-to-messaging pipeline.',
    link: 'https://github.com/sylitas/GoogleSheet',
  },
  {
    img: 'images/syl-bot.png',
    description: 'Syl — Discord bot with media commands and server management.',
    link: 'https://github.com/sylitas/Syl',
  },
  {
    img: 'images/lcc.png',
    description:
      'Lung Cancer Care — CT image visualization and doctor annotation tool for VAST. PHP, JWT, MariaDB.',
    link: 'https://github.com/sylitas/Lung-Cancer-Care',
  },
  {
    img: 'images/flickr.png',
    description: 'Flickr Browser — Android app for browsing Flickr image results.',
    link: 'https://github.com/sylitas/Flickr-Brower',
  },
  {
    img: 'images/AWS.png',
    description: 'AWS + Node.js cloud engineering project.',
    link: 'https://github.com/sylitas/-FPTSoftware--Enrisk-Skill',
  },
];

const contactConfig = {
  YOUR_EMAIL: 'johnluy1999@gmail.com',
  YOUR_FONE: '(+84) 834120699',
  description: 'For backend engineering, platform work, or developer tooling — reach out.',
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
export {
  meta,
  dataabout,
  featuredProjects,
  sideProjects,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
