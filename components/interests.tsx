"use client";
import { useLanguage } from "@/contexts/language-context";

const dataEN = [
  {
    title: "AI Product Development",
    items: [
      "AI-native product design",
      "Product management for LLM applications",
      "Prompt engineering and evaluation",
      "Human-centred AI interfaces",
    ],
  },
  {
    title: "Applied Machine Learning",
    items: [
      "Retrieval-Augmented Generation (RAG)",
      "Knowledge-graph reasoning",
      "Large-language-model applications",
      "Foundation models and prompt-based systems",
    ],
  },
  {
    title: "Intelligent Systems and Search",
    items: [
      "Adversarial search and game AI",
      "Alpha-Beta pruning and heuristic design",
      "Real-time decision-making under time budgets",
    ],
  },
  {
    title: "Full-Stack Engineering",
    items: [
      "Chrome and browser-extension development",
      "Python / Flask back-ends",
      "Next.js / React front-ends",
      "Network-traffic analysis and monitoring",
    ],
  },
];

const dataZH = [
  {
    title: "AI 产品开发",
    items: [
      "AI 原生产品设计",
      "大模型应用的产品管理",
      "提示工程与效果评估",
      "以人为本的 AI 交互界面",
    ],
  },
  {
    title: "应用机器学习",
    items: [
      "检索增强生成（RAG）",
      "知识图谱推理",
      "大语言模型应用",
      "基础模型与提示驱动系统",
    ],
  },
  {
    title: "智能系统与搜索",
    items: [
      "对抗搜索与游戏 AI",
      "Alpha-Beta 剪枝与启发式设计",
      "时间约束下的实时决策",
    ],
  },
  {
    title: "全栈工程",
    items: [
      "Chrome 浏览器扩展开发",
      "Python / Flask 后端",
      "Next.js / React 前端",
      "网络流量分析与监测",
    ],
  },
];

export function Interests() {
  const { lang } = useLanguage();
  const data = lang === "en" ? dataEN : dataZH;

  return (
    <div>
      <h2 className="section-title" style={{ marginTop: 0, marginBottom: "18px" }}>
        {lang === "en" ? "Research Interests" : "研究方向"}
      </h2>
      <ul
        className="sq"
        style={{
          fontSize: "12pt",
          lineHeight: 1.7,
          color: "var(--body)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {data.map((g) => (
          <li key={g.title}>
            <span style={{ fontWeight: 400 }}>{g.title}</span>
            <br />
            <span style={{ fontWeight: 200 }}>{g.items.join("、")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
