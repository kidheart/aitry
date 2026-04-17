/**
 * CV component — bilingual (English / Chinese)
 * Styled to match bereyhi.com section layout:
 *  - Section title: Oswald 30pt (section-title)
 *  - Sub-headings: Oswald 14pt (cv-section-title)
 *  - Body: Montserrat 12pt weight 200
 *  - Vercel Deployment Trigger: 2026-04-18
 *
 * Language toggle lets the user switch between EN and ZH.
 */
"use client";
import { useLanguage } from "@/contexts/language-context";
import { Download } from "lucide-react";

/* ----------------------------------------------------------------
   Data — English CV
---------------------------------------------------------------- */
const cvEN = {
  education: [
    {
      degree: "Master of Artificial Intelligence",
      institution: "Monash University",
      location: "",
      date: "Feb 2026 – Present",
      notes: "Faculty of Information Technology",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Inner Mongolia University of Technology",
      location: "",
      date: "Sep 2021 – Jun 2025",
      notes: "GPA 87.63 / 100",
    },
  ],
  experience: [
    {
      title: "Project Trainee — Team Coordinator",
      org: "Gao Hui Qiang Xue Software",
      location: "",
      date: "Aug – Sep 2024",
      bullets: [
        "Built a domain-specific AI Medical Consultation System powered by Baichuan LLM and a Neo4j knowledge graph (22,462 entities, 196,232 edges).",
        "Designed hybrid retrieval (knowledge-graph + RAG) that reduced LLM API calls by ≈70%.",
        "Coordinated a 4-person team, managing timelines, code reviews, and documentation.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Medical Consultation System",
      date: "Aug – Sep 2024",
      notes: "Project Lead / AI Engineer",
      bullets: [
        "Interned at Gao Hui Qiang Xue Software, contributing to a 4-person team building a domain-specific medical Q&A system.",
        "Architected a hybrid RAG pipeline: Baichuan LLM + Neo4j knowledge graph (22K+ entities, 196K+ edges).",
        "Implemented intelligent routing that reduced LLM API calls by ~70% while maintaining diagnostic accuracy.",
      ],
    },
    {
      title: "Shanbei Word-to-Image Assistant V1.0",
      date: "Oct – Dec 2025",
      bullets: [
        "Chrome extension for vocabulary learning: auto-detects the current word and shows 6 images via Google Custom Search API.",
        "National Software Copyright Registration No. 2026SR0163177.",
        "≥95% word-detection accuracy, <1.5 s time-to-first-image, <50 KB bundle.",
      ],
    },
    {
      title: "LightNet-Monitor (Bachelor's Thesis)",
      date: "Jan – Jun 2025",
      bullets: [
        "Lightweight network-traffic monitoring platform: real-time packet capture (tshark), protocol analysis, anomaly alerting, visual dashboards, multi-user permissions.",
      ],
    },
    {
      title: "Adversarial Search AI Agent — Pac-Man (Monash FIT5047)",
      date: "Mar 2026",
      bullets: [
        "Alpha-Beta pruning with move ordering, top-2 ghost-action pruning, BFS distance caching.",
        "34 wins, 1 draw across 35 test instances within a 10-second time budget.",
      ],
    },
  ],
  skills: [
    { category: "Languages", items: "Python, JavaScript / TypeScript, Java, SQL" },
    { category: "Frameworks & Tools", items: "Next.js, React, Flask, Docker, Neo4j, Gradio" },
    { category: "AI / ML", items: "LLM fine-tuning, RAG, knowledge-graph reasoning, prompt engineering" },
    { category: "Other", items: "Chrome Extension (Manifest V3), tshark, Git, Linux" },
  ],
  certifications: [
    "National Software Copyright — Shanbei Word-to-Image Assistant V1.0 (No. 2026SR0163177, Jan 2026)",
    "IBM / SkillUp: Introduction to Product Management; Foundations & Stakeholder Collaboration; Initial Product Strategy & Plan (via Coursera)",
    "IBM / Maven Analytics: Foundation Models & Platforms; Prompt Engineering Basics; ChatGPT for Data Analytics (via Coursera)",
  ],
  languages: [
    { lang: "Chinese (Mandarin)", level: "Native" },
    { lang: "English", level: "Coursework & working communication" },
  ],
};

/* ----------------------------------------------------------------
   Data — Chinese CV
---------------------------------------------------------------- */
const cvZH = {
  education: [
    {
      degree: "人工智能理学硕士（在读）",
      institution: "莫纳什大学",
      location: "",
      date: "2026年2月 – 至今",
      notes: "信息技术学院",
    },
    {
      degree: "计算机科学工程学士",
      institution: "内蒙古工业大学",
      location: "",
      date: "2021年9月 – 2025年6月",
      notes: "均分 87.63 / 100",
    },
  ],
  experience: [
    {
      title: "项目实习生 — 团队协调员",
      org: "高慧强学软件科技",
      location: "",
      date: "2024年8月 – 9月",
      bullets: [
        "基于百川大模型与Neo4j知识图谱（22,462个实体、196,232条关系边）构建 AI 医疗问诊系统。",
        "设计知识图谱 + RAG 混合检索方案，将 LLM API 调用量降低约70%。",
        "协调4人团队，负责进度管理、代码审查与文档撰写。",
      ],
    },
  ],
  projects: [
    {
      title: "AI 医疗问诊系统 · AI Medical Consultation System",
      date: "2024.08 – 2024.09",
      notes: "项目负责人 / AI 工程师",
      bullets: [
        "在高慧强学软件科技实习期间，参与4人团队开发面向特定领域的医疗问答系统。",
        "设计了整合百川大模型与 Neo4j 知识图谱（22K+ 实体，196K+ 关系边）的混合检索（RAG）流水线。",
        "实现智能路由机制，在保持诊断准确率的同时将 LLM API 调用量降低了约70%。",
      ],
    },
    {
      title: "扇贝单词图片助手 V1.0",
      date: "2025年10月 – 12月",
      bullets: [
        "Chrome 扩展程序，在扇贝单词应用中自动识别当前单词并通过 Google Custom Search API 展示6张图片，无需切换标签页。",
        "已获国家软件著作权登记（登记号：2026SR0163177）。",
        "单词识别准确率 ≥95%，首图加载时间 <1.5秒，打包体积 <50KB。",
      ],
    },
    {
      title: "LightNet-Monitor — 轻量级网络流量监测平台（本科毕业设计）",
      date: "2025年1月 – 6月",
      bullets: [
        "基于 tshark 实现实时抓包与协议解析（TCP/UDP/ICMP），具备异常告警、可视化仪表盘与多用户权限管理功能。",
      ],
    },
    {
      title: "对抗搜索 AI 智能体 — 多鬼魂吃豆人（莫纳什 FIT5047）",
      date: "2026年3月",
      bullets: [
        "基于 Alpha-Beta 剪枝，结合走法排序、Top-2 鬼魂动作裁剪与 BFS 距离缓存，在10秒时间预算内实时决策。",
        "35组测试：34胜1平。",
      ],
    },
  ],
  skills: [
    { category: "编程语言", items: "Python、JavaScript / TypeScript、Java、SQL" },
    { category: "框架与工具", items: "Next.js、React、Flask、Docker、Neo4j、Gradio" },
    { category: "AI / ML", items: "大模型微调、RAG 检索增强生成、知识图谱推理、提示工程" },
    { category: "其他", items: "Chrome 扩展（Manifest V3）、tshark、Git、Linux" },
  ],
  certifications: [
    "国家软件著作权 — 扇贝单词图片助手V1.0（登记号：2026SR0163177，2026年1月）",
    "IBM / SkillUp：产品管理入门；基础与利益相关者协作；初始产品战略与计划（Coursera）",
    "IBM / Maven Analytics：基础模型与平台；提示工程基础；ChatGPT 数据分析（Coursera）",
  ],
  languages: [
    { lang: "中文（普通话）", level: "母语" },
    { lang: "英语", level: "课作 / 工作语言" },
  ],
};

/* ----------------------------------------------------------------
   Sub-components
---------------------------------------------------------------- */
function CvSection({ title }: { title: string }) {
  return (
    <h3 className="cv-section-title">{title}</h3>
  );
}

function EntryBlock({
  title, sub, date, notes, bullets, link,
}: {
  title: string;
  sub?: string;
  date?: string;
  notes?: string;
  bullets?: string[];
  link?: string;
}) {
  return (
    <div className="cv-entry">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
        <span className="cv-entry-title">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </span>
        {date && <span className="cv-entry-meta">{date}</span>}
      </div>
      {sub && (
        <div style={{ fontWeight: 300, fontSize: "11.5pt", color: "var(--meta)", marginTop: "1px" }}>
          {sub}
        </div>
      )}
      {notes && (
        <div style={{ fontWeight: 200, fontSize: "11pt", color: "var(--meta)", marginTop: "2px" }}>
          {notes}
        </div>
      )}
      {bullets && bullets.length > 0 && (
        <ul
          className="sq"
          style={{
            marginTop: "6px",
            fontSize: "12pt",
            fontWeight: 200,
            lineHeight: 1.65,
            color: "var(--body)",
          }}
        >
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------
   Main CV Component
---------------------------------------------------------------- */
export function CV() {
  const { lang } = useLanguage();
  const cv = lang === "en" ? cvEN : cvZH;

  const labels = {
    en: {
      education:       "Education",
      experience:      "Work Experience",
      projects:        "Selected Projects",
      skills:          "Technical Skills",
      certifications:  "Certifications & Workshops",
      languages:       "Languages",
    },
    zh: {
      education:       "教育背景",
      experience:      "工作经历",
      projects:        "项目经历",
      skills:          "技术技能",
      certifications:  "资质证书",
      languages:       "语言能力",
    },
  }[lang];

  return (
    <div className="prose-b" id="cv">
      {/* Section heading + language toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "4px",
        }}
      >
        <h2 className="section-title" style={{ marginTop: 0, marginBottom: 0 }}>
          {lang === "en" ? "Curriculum Vitae" : "简历"}
        </h2>
        <a
          href={lang === "en" ? "/files/HanYueze_Resume_EN.pdf" : "/files/HanYueze_Resume_ZH.pdf"}
          download
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "11pt",
            color: "var(--link)",
            textDecoration: "none",
            border: "1px solid var(--link)",
            padding: "4px 10px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--link)";
            (e.currentTarget as HTMLAnchorElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "none";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--link)";
          }}
        >
          <Download size={14} />
          <span>{lang === "en" ? "Download PDF" : "下载 PDF"}</span>
        </a>
      </div>

      {/* ── Education ── */}
      <div className="cv-block">
        <CvSection title={labels.education} />
        {cv.education.map((e) => (
          <EntryBlock
            key={e.degree}
            title={e.degree}
            sub={e.location ? `${e.institution} · ${e.location}` : e.institution}
            date={e.date}
            notes={e.notes}
            link={(e as any).link}
          />
        ))}
      </div>

      {/* ── Work Experience ── */}
      <div className="cv-block">
        <CvSection title={labels.experience} />
        {cv.experience.map((e) => (
          <EntryBlock
            key={e.title}
            title={e.title}
            sub={e.location ? `${e.org} · ${e.location}` : e.org}
            date={e.date}
            bullets={e.bullets}
          />
        ))}
      </div>

      {/* ── Projects ── */}
      <div className="cv-block">
        <CvSection title={labels.projects} />
        {cv.projects.map((p) => (
          <EntryBlock
            key={p.title}
            title={p.title}
            date={p.date}
            bullets={p.bullets}
          />
        ))}
      </div>

      {/* ── Skills ── */}
      <div className="cv-block">
        <CvSection title={labels.skills} />
        {cv.skills.map((s) => (
          <div key={s.category} className="cv-entry">
            <span className="cv-entry-title">{s.category}:</span>{" "}
            <span style={{ fontWeight: 200 }}>{s.items}</span>
          </div>
        ))}
      </div>

      {/* ── Certifications ── */}
      <div className="cv-block">
        <CvSection title={labels.certifications} />
        <ul
          className="sq"
          style={{
            marginTop: "8px",
            fontSize: "12pt",
            fontWeight: 200,
            lineHeight: 1.65,
            color: "var(--body)",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {cv.certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* ── Languages ── */}
      <div className="cv-block">
        <CvSection title={labels.languages} />
        {cv.languages.map((l) => (
          <div key={l.lang} className="cv-entry">
            <span className="cv-entry-title">{l.lang}</span>
            {" — "}
            <span style={{ fontWeight: 200 }}>{l.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
