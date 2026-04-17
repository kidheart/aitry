"use client";
import { useLanguage } from "@/contexts/language-context";

const copy = {
  en: {
    title: "About Me",
    p1: (
      <>
        I am currently pursuing a{" "}
        <span style={{ fontWeight: 400 }}>Master of Artificial Intelligence</span>{" "}
        at{" "}
        <a href="https://www.monash.edu/" target="_blank" rel="noopener noreferrer">
          Monash University
        </a>
        , with a solid background in Computer Science and Engineering. My core
        focus is{" "}
        <span style={{ fontWeight: 400 }}>AI product management</span> and{" "}
        <span style={{ fontWeight: 400 }}>FinTech innovation</span> — I care not
        only about the underlying mechanics of LLMs and RAG, but about
        translating these technologies into reliable product experiences that
        solve real business problems.
      </>
    ),
    p2: (
      <>
        I have strong hands-on engineering skills and am proficient in leveraging{" "}
        <span style={{ fontWeight: 400 }}>AI-assisted development tools</span>{" "}
        to drive the full cycle from requirements analysis to{" "}
        <span style={{ fontWeight: 400 }}>MVP delivery</span>. I am actively
        seeking{" "}
        <span style={{ fontWeight: 400 }}>
          Summer 2026 internship opportunities
        </span>{" "}
        in AI Product Management or FinTech-related product and business roles.
      </>
    ),
  },
  zh: {
    title: "关于我",
    p1: (
      <>
        我目前在{" "}
        <a href="https://www.monash.edu/" target="_blank" rel="noopener noreferrer">
          莫纳什大学
        </a>
        攻读<span style={{ fontWeight: 400 }}>人工智能硕士</span>学位，拥有扎实的计算机科学工程背景。我的核心方向是{" "}
        <span style={{ fontWeight: 400 }}>AI 产品管理</span>与{" "}
        <span style={{ fontWeight: 400 }}>金融科技（FinTech）创新</span>
        ——不仅关注大语言模型（LLM）与检索增强生成（RAG）的底层逻辑，更致力于将这些技术转化为解决实际商业痛点、真实可信的产品体验。
      </>
    ),
    p2: (
      <>
        我具备极强的工程落地能力，能够熟练借助{" "}
        <span style={{ fontWeight: 400 }}>AI 辅助编程工具</span>
        完成从需求洞察到产品原型（MVP）的全闭环开发。目前正在积极寻找{" "}
        <span style={{ fontWeight: 400 }}>2026 年夏季实习机会</span>
        ，目标岗位为 AI 产品经理或金融科技相关的产品 / 业务线。
      </>
    ),
  },
};

const pStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "12pt",
  fontWeight: 200,
  lineHeight: 1.7,
  marginBottom: "16px",
  color: "var(--body)",
} as const;

export function About() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="prose-b">
      <h2 className="section-title" style={{ marginTop: 0, marginBottom: "18px" }}>
        {t.title}
      </h2>
      <p style={pStyle}>{t.p1}</p>
      <p style={{ ...pStyle, marginBottom: 0 }}>{t.p2}</p>
    </div>
  );
}
