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
    description: "Bridging the gap between Economic Logic and AI Innovation. 3 years of experience in e-commerce products.",
    avatar: "/avatar.jpg", 
  },

  // 3. 关于我
  about: {
    description: "An INTJ Product Manager with a Management Master's and a Dual Degree in Economics. Focused on building data-driven products.",
    location: "China / New Zealand",
  },

  // 4. 社交与仓库
  links: {
    twitter: "https://twitter.com/zeroXall",
    github: "https://github.com/donsbox",
    linkedin: "https://linkedin.com/in/donlau",
  },
  repo: "https://github.com/donsbox/donsitenew", 

  // 5. 杂项配置
  timezone: "Asia/Shanghai",
  words: [
    "Economic logic defines the floor, AI innovation defines the ceiling.",
  ],

  // 6. 核心数据盒（确保这些名字与组件匹配）
  // 这里的数组即便为空也必须保留 []
  projects: [
    {
      title: "E-commerce Optimization",
      description: "Optimizing distribution logic with data models.",
      link: "https://github.com/donsbox",
    }
  ],
  
  // 兼容性处理：同时提供 experience 和 experiences
  experience: [
    {
      company: "E-commerce Company",
      location: "China",
      position: "Product Manager",
      start: "2022",
      end: "Present",
      tasks: ["Strategy", "AI Implementation"],
    }
  ],
  experiences: [
    {
      company: "E-commerce Company",
      location: "China",
      position: "Product Manager",
      start: "2022",
      end: "Present",
      tasks: ["Strategy", "AI Implementation"],
    }
  ],

  // 兼容性处理：同时提供 studies 和 education
  studies: [
    {
      title: "Master in Management",
      institution: "Your University",
      start: "2021",
      end: "2023",
    },
    {
      title: "Bachelor in Economics",
      institution: "Your University",
      start: "2017",
      end: "2021",
    }
  ],
  education: [
    {
      title: "Master in Management",
      institution: "Your University",
      start: "2021",
      end: "2023",
    }
  ],

  books: [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
    }
  ]
};
