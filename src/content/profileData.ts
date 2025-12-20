export const PROFILE = {
  // 1. 站点全局信息
  site: {
    SEO: {
      title: "DonBox | Product Manager",
      description: "E-commerce PM with Economics background & AI enthusiast.",
    }
  },

  // 2. 核心定位
  intro: {
    name: "Don",
    role: "E-commerce Product Manager",
    description: "Bridging the gap between Economic Logic and AI Innovation. 3 years of experience in high-growth e-commerce products.",
    avatar: "/avatar.jpg", 
  },

  // 3. 关于我
  about: {
    description: "An INTJ Product Manager with a Management Master's and a Dual Degree in Economics. I specialize in building logical, data-driven products.",
    location: "China / New Zealand",
  },

  // 4. 链接与仓库 (必须确保每个字段都存在)
  links: {
    twitter: "https://twitter.com/zeroXall",
    github: "https://github.com/donsbox",
    linkedin: "https://linkedin.com/in/donlau",
    mail: "mailto:your-email@example.com",
    discord: "#",
  },
  repo: "https://github.com/donsbox/donsitenew", 

  // 5. 时区与格言
  timezone: "Asia/Shanghai",
  words: [
    "Economic logic defines the floor, AI innovation defines the ceiling.",
    "Logic is the beginning of wisdom, not the end."
  ],

  // 6. 核心数据列表 (这是解决 .map() 报错的关键，补全所有变体)
  
  // 项目列表
  projects: [
    { title: "E-commerce Growth", description: "AI-driven optimization", link: "#" }
  ],
  
  // 工作经历 (兼容多种可能的命名)
  experience: [
    { company: "Tech Firm", position: "Product Manager", start: "2022", end: "Present", tasks: ["Product Strategy"] }
  ],
  experiences: [
    { company: "Tech Firm", position: "Product Manager", start: "2022", end: "Present", tasks: ["Product Strategy"] }
  ],
  workExperience: [
    { company: "Tech Firm", position: "Product Manager", start: "2022", end: "Present", tasks: ["Product Strategy"] }
  ],

  // 教育经历 (兼容多种可能的命名)
  studies: [
    { title: "Master in Management", institution: "University", start: "2021", end: "2023" }
  ],
  education: [
    { title: "Master in Management", institution: "University", start: "2021", end: "2023" }
  ],

  // 书单 (兼容多种可能的命名)
  books: [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ],
  bookList: [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ],

  // 技能标签
  skills: ["Product Strategy", "AI", "Economics", "SQL"],
  mainStack: ["AI Tools", "Product Management", "Data Analysis"]
};
