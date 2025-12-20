export const PROFILE = {
  // 1. 基础 SEO
  site: {
    SEO: {
      title: "DonBox | Product Manager",
      description: "E-commerce PM | Economics & AI Enthusiast",
    }
  },

  // 2. 核心个人信息
  intro: {
    name: "Don",
    role: "Product Manager",
    description: "Bridging the gap between Economic Logic and AI Innovation. Based in China, heading to New Zealand.",
    avatar: "/avatar.jpg", 
  },

  // 3. 详细描述
  about: {
    description: "An INTJ Product Manager with a Management Master's and a Dual Degree in Economics. Specializing in AI-driven e-commerce optimization.",
    location: "China / New Zealand",
  },

  // 4. 社交与链接
  links: {
    twitter: "https://twitter.com/zeroXall",
    github: "https://github.com/donsbox",
    linkedin: "https://linkedin.com/in/donlau",
    mail: "mailto:your-email@example.com",
  },
  repo: "https://github.com/donsbox/donsitenew", 

  // 5. 杂项
  timezone: "Asia/Shanghai",
  words: [
    "Economic logic defines the floor, AI innovation defines the ceiling.",
  ],

  // 6. 核心数据盒（修复 .map 报错的关键：提供多重命名的空数组备份）
  
  // 项目 (兼容 projects / projectList)
  projects: [
    { title: "E-commerce Optimization", description: "AI data modeling", link: "#" }
  ],
  projectList: [],

  // 经历 (兼容 experience / experiences / workExperience)
  experience: [
    { company: "E-commerce Firm", position: "PM", start: "2022", end: "Present", tasks: ["Strategy"] }
  ],
  experiences: [],
  workExperience: [],

  // 学历 (兼容 studies / education)
  studies: [
    { title: "Master in Management", institution: "University", start: "2021", end: "2023" },
    { title: "Bachelor in Economics", institution: "University", start: "2017", end: "2021" }
  ],
  education: [],

  // 书籍 (兼容 books / bookList)
  books: [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ],
  bookList: []
};
