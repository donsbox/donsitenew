export const PROFILE = {
  // 1. 站点基础信息
  site: {
    SEO: {
      title: "DonBox | Product Manager",
      description: "E-commerce PM with Economics background & AI enthusiast.",
    }
  },

  // 2. 名字与定位
  intro: {
    name: "Don",
    role: "Product Manager",
    description: "Bridging the gap between Economic Logic and AI Innovation.",
    avatar: "/avatar.jpg", 
  },

  // 3. 关于我
  about: {
    description: "Product Manager with a Management Master's and a Dual Degree in Economics.",
    location: "China / New Zealand",
  },

  // 4. 社交与链接 (补全所有可能被调用的字段)
  links: {
    twitter: "https://twitter.com/zeroXall",
    github: "https://github.com/donsbox",
    linkedin: "https://linkedin.com/in/donlau",
  },
  repo: "https://github.com/donsbox/donsitenew", 

  // 5. 杂项
  timezone: "Asia/Shanghai",
  words: [
    "Economic logic defines the floor, AI innovation defines the ceiling.",
  ],

  // 6. 核心数据列表 (使用双重命名确保组件能找到 map 的对象)
  
  // 项目列表
  projects: [
    { title: "E-commerce Project", description: "Optimization with AI", link: "#" }
  ],
  
  // 工作经历 (兼容 experience 和 workExperience)
  experience: [
    { company: "Tech Firm", position: "PM", start: "2022", end: "Present", tasks: ["Strategy"] }
  ],
  workExperience: [
    { company: "Tech Firm", position: "PM", start: "2022", end: "Present", tasks: ["Strategy"] }
  ],

  // 教育背景 (兼容 studies 和 education)
  studies: [
    { title: "Master in Management", institution: "University", start: "2021", end: "2023" }
  ],
  education: [
    { title: "Master in Management", institution: "University", start: "2021", end: "2023" }
  ],

  // 兴趣与书籍 (兼容 books 和 list)
  books: [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ],
  bookList: [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ]
};
