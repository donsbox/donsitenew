// Personal information only. Project content lives in the projects collection.
// Add an email or social profile only after Don confirms the public address.
export const PROFILE = {
  name: "Don",
  timezone: "Asia/Shanghai",
  links: { github: "https://github.com/donsbox" },
  repo: "https://github.com/donsbox/donsitenew",
  locales: {
    "zh-CN": {
      title: "Don · AI 产品经理作品集",
      description: "Don 的产品作品集：从电商产品经验出发，探索 AI 产品架构、工作流设计与可核验的交付成果。包含 RELAY Social OS 和 AIinvest 中英文案例。",
      role: "产品经理 · AI 工作流产品设计",
      introduction: "把复杂问题，转化为可执行的 AI 工作流。",
      summary: "从电商产品经验出发，关注 AI 如何进入真实工作：明确问题、组织上下文、保留人的判断，并让结果可以编辑、复用与验证。",
      about: "我的方向是 AI 工作流产品设计。作品集围绕产品定义、系统边界、状态流转和交付质量展开，呈现源码支持的能力与仍需验证的假设。",
      capabilities: ["问题定义与范围取舍", "产品架构与数据对象", "人机协作与工作流编排", "验收标准与反馈闭环"],
      contact: "欢迎交流 AI 产品、创作者工具与工作流设计。可通过已确认的 GitHub 主页了解项目与联系入口。",
    },
    en: {
      title: "Don · AI Product Portfolio",
      description: "Don’s product portfolio: bringing e-commerce product experience to AI architecture, workflow design and verifiable delivery. Bilingual case studies of RELAY Social OS and AIinvest.",
      role: "Product Manager · AI Workflow Design",
      introduction: "Turning complex problems into actionable AI workflows.",
      summary: "Building on e-commerce product experience, I explore how AI fits into real work: define the problem, organize context, preserve human judgment, and make outputs editable, reusable and testable.",
      about: "My focus is AI workflow product design. These cases examine product definition, system boundaries, state transitions and delivery quality, separating source-backed capabilities from assumptions that still need validation.",
      capabilities: ["Problem framing & scope", "Product architecture & data models", "Human–AI workflow orchestration", "Acceptance criteria & feedback loops"],
      contact: "Let’s talk about AI products, creator tools and workflow design. My verified GitHub profile provides project information and contact options.",
    },
  },
} as const;
