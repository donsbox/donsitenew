export const languages = ["zh-CN", "en"] as const;
export type Language = (typeof languages)[number];

export const homePath = (lang: Language) => lang === "en" ? "/en/" : "/";
export const projectsPath = (lang: Language) => `${lang === "en" ? "/en" : ""}/projects/`;
export const projectPath = (lang: Language, projectId: string) => `${projectsPath(lang)}${projectId}/`;

export const labels = {
  "zh-CN": {
    home: "首页", projects: "项目案例", contact: "联系", about: "关于我",
    focus: "产品方法", selected: "精选项目", all: "查看全部案例", read: "阅读案例",
    evidence: "交付与证据", verified: "源码／文档中可核实", unverified: "尚待验证",
    prototype: "源码原型", specification: "产品规格与交付基线",
    reviewed: "源码核查日期", source: "查看源码快照", sources: "参考源码与文档",
    restricted: "源仓库需要访问权限", public: "公开源仓库",
    scope: "案例范围", scopeNote: "本案例依据仓库快照进行静态核查，不代表线上运行验证。个人职责、协作分工和量化成果尚待补充确认。",
    back: "返回项目列表", contribution: "个人职责与协作分工待确认",
    portfolio: "产品作品集", attribution: "模板基础：Tech Tim（MIT）",
    repository: "站点源码", skip: "跳至正文", theme: "切换主题",
  },
  en: {
    home: "Home", projects: "Case studies", contact: "Contact", about: "About",
    focus: "Product approach", selected: "Selected work", all: "All case studies", read: "Read case study",
    evidence: "Delivery & evidence", verified: "Present in source / documents", unverified: "Still unverified",
    prototype: "Source-code prototype", specification: "Product specification & delivery baseline",
    reviewed: "Source reviewed", source: "View source snapshot", sources: "Source files & documents",
    restricted: "Source repository requires access", public: "Public source repository",
    scope: "Case scope", scopeNote: "This case is based on a static repository review, not a live-service test. Individual responsibilities, collaboration boundaries and measured outcomes still require confirmation.",
    back: "Back to case studies", contribution: "Individual responsibilities and collaboration to be confirmed",
    portfolio: "Product portfolio", attribution: "Template foundation: Tech Tim (MIT)",
    repository: "Site source", skip: "Skip to content", theme: "Toggle theme",
  },
} as const;
