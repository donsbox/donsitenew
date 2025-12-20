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
    role: "E-commerce Product Manager",
    description: "Bridging the gap between Economic Logic and AI Innovation. 3 years of experience in high-growth e-commerce products.",
    avatar: "/avatar.jpg", 
  },

  // 3. 关于我
  about: {
    description: "An INTJ Product Manager with a Management Master's and a Dual Degree in Economics. I specialize in building logical, data-driven products for the digital sector.",
    location: "Currently in China, moving to New Zealand.",
  },

  // 4. 社交与仓库（之前报错很可能因为少了 repo）
  links: {
    twitter: "https://twitter.com/zeroXall",
    github: "https://github.com/donsbox",
    linkedin: "https://linkedin.com/in/donlau",
  },
  repo: "https://github.com/donsbox/techtim-astro-bento-portfolio", // 必须保留，用于底部链接

  // 5. 其他必要配置
  timezone: "Asia/Shanghai",
  words: [
    "Economic logic defines the floor, AI innovation defines the ceiling.",
  ],

  // 6. 核心数据盒（即使目前为空，也必须保留这些 [ ] 符号，否则会报错）
  projects: [
    {
      title: "E-commerce Optimization",
      description: "Reconstructing distribution logic with AI models.",
      link: "#",
    }
  ],
  
  experience: [
    {
      company: "E-commerce Tech",
      location: "China",
      position: "Product Manager",
      start: "2022",
      end: "Present",
      tasks: ["Product Strategy", "AI Integration", "User Growth"],
    }
  ],

  studies: [
    {
      title: "Master in Management",
      institution: "Hohai University", // 这里填入你的学校
      start: "2021",
      end: "2023",
    },
    {
      title: "Bachelor in Economics",
      institution: "University Name",
      start: "2017",
      end: "2021",
    }
  ],

  books: [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
    }
  ]
};
