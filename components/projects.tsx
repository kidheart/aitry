"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

function Lightbox({
  src, alt, onClose,
}: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-3 -right-3 z-10 bg-white p-1" aria-label="Close">
          <X size={18} />
        </button>
        <Image src={src} alt={alt} width={900} height={640} className="w-full h-auto object-contain" unoptimized />
      </div>
    </div>
  );
}

/* ─────────── English projects ─────────── */
const projectsEN = [
  {
    title: "AI Medical Consultation System",
    titleSub: "AI 医疗问诊系统",
    role: "Project Lead / AI Engineer",
    date: "Aug – Sep 2024",
    body: (
      <>
        Led a 4-person team to build a domain-specific medical Q&amp;A system in
        collaboration with Gao Hui Qiang Xue Software.{" "}
        <span style={{ fontWeight: 400 }}>Core output:</span> Architected a
        hybrid retrieval pipeline integrating{" "}
        <span style={{ fontWeight: 400 }}>Baichuan LLM</span> with a{" "}
        <span style={{ fontWeight: 400 }}>Neo4j knowledge graph</span> (22K+
        entities, 196K+ edges). Implemented intelligent routing that reduced LLM
        API calls by{" "}
        <span style={{ fontWeight: 400 }}>~70%</span> while maintaining
        diagnostic accuracy.
      </>
    ),
    tech: ["Python", "Baichuan LLM", "Neo4j", "RAG", "Docker", "Gradio"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/AI-medical-chatbot", external: true }],
  },
  {
    title: "Shanbei Word-to-Image Assistant V1.0",
    titleSub: "扇贝单词图片助手",
    role: "Independent Developer",
    date: "Oct – Dec 2025",
    body: (
      <>
        A Chrome extension designed to enhance vocabulary retention through
        visual association. Holds a{" "}
        <span style={{ fontWeight: 400 }}>
          National Software Copyright Registration
        </span>{" "}
        (No. 2026SR0163177).{" "}
        <span style={{ fontWeight: 400 }}>Core output:</span> Fully developed
        with AI assistance. Pressing the shortcut while studying auto-detects the
        current word and displays 6 related images via Google Custom Search API
        in a floating overlay. Word-detection accuracy ≥95%,
        time-to-first-image &lt;1.5 s, bundle size &lt;50 KB.
      </>
    ),
    tech: ["Chrome Extension (Manifest V3)", "JavaScript", "API Integration"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/ShanBayAssistant-1.0", external: true }],
  },
  {
    title: "Adversarial Search AI Agent (Pac-Man)",
    titleSub: "",
    role: "Core Algorithm Implementation — Monash FIT5047",
    date: "March 2026",
    body: (
      <>
        A real-time multi-ghost adversarial Pac-Man agent operating within a
        10-second time budget.{" "}
        <span style={{ fontWeight: 400 }}>Core output:</span> Implemented
        Alpha-Beta pruning with move ordering, top-2 ghost-action pruning, and
        BFS distance caching. Achieved{" "}
        <span style={{ fontWeight: 400 }}>34 wins and 1 draw</span> across 35
        test instances.
      </>
    ),
    tech: ["Python", "Alpha-Beta Pruning", "BFS", "Game AI"],
    links: [{ label: "Report (PDF)", href: "/files/FIT5047-PacMan-Report.pdf", external: true }],
  },
  {
    title: "LightNet-Monitor",
    titleSub: "轻量级网络流量监测平台",
    role: "Independent Developer (Bachelor's Thesis)",
    date: "Jan – Jun 2025",
    body: (
      <>
        Bachelor&rsquo;s thesis project, including a complete six-chapter
        dissertation and multi-dimensional testing.{" "}
        <span style={{ fontWeight: 400 }}>Core output:</span> High-concurrency
        real-time packet capture and protocol analysis via tshark, with anomaly
        alerting and visual dashboards.
      </>
    ),
    tech: ["Python", "Flask", "SQLite", "tshark", "Chart.js"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/LightNet-Monitor", external: true }],
  },
];

/* ─────────── Chinese projects ─────────── */
const projectsZH = [
  {
    title: "AI 医疗问诊系统",
    titleSub: "AI Medical Consultation System",
    role: "项目负责人 / AI 工程师",
    date: "2024.08 – 2024.09",
    body: (
      <>
        带领 4 人团队与高慧强学软件科技合作开发面向特定领域的医疗问答系统。
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        设计了整合百川大模型与 Neo4j 知识图谱（22K+ 实体，196K+ 关系边）的混合检索（RAG）流水线。通过实现智能路由机制，在保持诊断准确率的同时将 LLM API 调用量降低了约{" "}
        <span style={{ fontWeight: 400 }}>70%</span>。
      </>
    ),
    tech: ["Python", "百川大模型", "Neo4j", "RAG", "Docker", "Gradio"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/AI-medical-chatbot", external: true }],
  },
  {
    title: "扇贝单词图片助手 V1.0",
    titleSub: "Shanbei Word-to-Image Assistant",
    role: "独立开发者",
    date: "2025.10 – 2025.12",
    body: (
      <>
        一款旨在通过视觉联想增强记忆的 Chrome 扩展程序，已获国家{" "}
        <span style={{ fontWeight: 400 }}>软件著作权</span>
        （登记号：2026SR0163177）。
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        借助 AI 辅助独立完成开发闭环。学习时按下快捷键，自动识别当前单词并通过 Google Custom Search API 在浮窗展示 6 张相关图片。单词识别准确率 ≥95%，首图加载时间 &lt;1.5 秒，打包体积 &lt;50 KB。
      </>
    ),
    tech: ["Chrome Extension (Manifest V3)", "JavaScript", "API Integration"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/ShanBayAssistant-1.0", external: true }],
  },
  {
    title: "对抗搜索 AI 智能体（多鬼魂吃豆人）",
    titleSub: "Adversarial Search AI Agent",
    role: "核心算法实现 — 莫纳什大学 FIT5047",
    date: "2026.03",
    body: (
      <>
        在 10 秒时间预算内实时决策的多鬼魂对抗吃豆人智能体。
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        实现了带走法排序的 Alpha-Beta 剪枝、Top-2 鬼魂动作裁剪与 BFS 距离缓存。在 35 组测试中取得{" "}
        <span style={{ fontWeight: 400 }}>34 胜 1 平</span>的成绩。
      </>
    ),
    tech: ["Python", "Alpha-Beta Pruning", "BFS", "Game AI"],
    links: [{ label: "报告 (PDF)", href: "/files/FIT5047-PacMan-Report.pdf", external: true }],
  },
  {
    title: "LightNet-Monitor 轻量级网络流量监测平台",
    titleSub: "Bachelor's Thesis",
    role: "独立开发者（本科毕业设计）",
    date: "2025.01 – 2025.06",
    body: (
      <>
        本科毕业设计，包含完整六章论文与多维度测试。
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        基于 tshark 实现高并发数据包的实时捕获与协议解析，支持异常告警与可视化仪表盘。
      </>
    ),
    tech: ["Python", "Flask", "SQLite", "tshark", "Chart.js"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/LightNet-Monitor", external: true }],
  },
];

/* ─────────── Certifications ─────────── */
const certsEN = {
  title: "Certifications & Workshops",
  items: [
    { label: "National Software Copyright", desc: "— Shanbei Word-to-Image Assistant V1.0, Reg. No. 2026SR0163177, January 2026.", cert: true },
    { label: "Product Management Series", desc: "(IBM / SkillUp via Coursera): Introduction to Product Management; Foundations & Stakeholder Collaboration; Initial Product Strategy & Plan.", cert: false },
    { label: "Generative AI Series", desc: "(IBM / Maven Analytics via Coursera): Foundation Models & Platforms; Prompt Engineering Basics; ChatGPT for Data Analytics.", cert: false },
  ],
  keyword: "Keywords:",
};

const certsZH = {
  title: "资质证书",
  items: [
    { label: "国家软件著作权", desc: "— 扇贝单词图片助手 V1.0，登记号：2026SR0163177，2026年1月。", cert: true },
    { label: "产品管理系列证书", desc: "（IBM / SkillUp，Coursera）：产品管理入门；基础与利益相关者协作；初始产品战略与计划。", cert: false },
    { label: "生成式 AI 系列证书", desc: "（IBM / Maven Analytics，Coursera）：基础模型与平台；提示工程基础；ChatGPT 数据分析。", cert: false },
  ],
  keyword: "关键词：",
};

/* ─────────── Component ─────────── */
export function Projects() {
  const { lang } = useLanguage();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const projects = lang === "en" ? projectsEN : projectsZH;
  const certs = lang === "en" ? certsEN : certsZH;

  return (
    <div className="prose-b">
      <h2 className="section-title" style={{ marginTop: 0, marginBottom: "18px" }}>
        {lang === "en" ? "Selected Projects" : "精选项目"}
      </h2>

      <ul className="sq" style={{ fontSize: "12pt", lineHeight: 1.7, color: "var(--body)", display: "flex", flexDirection: "column", gap: "24px" }}>
        {projects.map((p) => (
          <li key={p.title}>
            <span style={{ fontWeight: 400 }}>{p.title}</span>
            {p.titleSub && (
              <span style={{ fontWeight: 300, color: "var(--meta)" }}> · {p.titleSub}</span>
            )}
            <span style={{ fontWeight: 300, color: "var(--meta)" }}> [{p.date}]</span>
            <br />
            <span className="italic text-[13.5px]" style={{ fontWeight: 300, color: "var(--meta)" }}>
              {p.role}
            </span>
            <br />
            <span style={{ fontWeight: 200 }}>{p.body}</span>
            <br />
            <span className="text-[13.5px]" style={{ fontWeight: 300, color: "var(--meta)" }}>
              <span style={{ fontWeight: 400, color: "var(--name)" }}>{certs.keyword}</span>{" "}
              {p.tech.join(", ")}.
            </span>
            <br />
            <span className="text-[14px]">
              {p.links.map((l, li) => (
                <span key={l.href}>
                  {li > 0 && <span style={{ color: "var(--meta)" }}> · </span>}
                  <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {l.label}
                  </a>
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>

      {/* ── Certifications ── */}
      <h2 id="certifications" className="section-title" style={{ marginBottom: "18px" }}>
        {certs.title}
      </h2>

      <ul className="sq" style={{ fontSize: "12pt", lineHeight: 1.7, color: "var(--body)", display: "flex", flexDirection: "column", gap: "10px" }}>
        {certs.items.map((item) => (
          <li key={item.label}>
            <span style={{ fontWeight: 400 }}>{item.label}</span>
            <span style={{ fontWeight: 200 }}> {item.desc} </span>
            {item.cert && (
              <button
                onClick={() => setLightbox({ src: "/images/software-copyright.jpg", alt: "National Software Copyright Certificate — 2026SR0163177" })}
                className="underline"
                style={{ color: "var(--accent)", fontWeight: 400 }}
                aria-label="View software copyright certificate"
              >
                {lang === "en" ? "View certificate" : "查看证书"}
              </button>
            )}
          </li>
        ))}
      </ul>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
    </div>
  );
}
