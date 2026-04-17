"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface LightboxProps {
  images: string[];
  alt: string;
  onClose: () => void;
}

function Lightbox({ images, alt, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose, images.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 transition-opacity cursor-zoom-out" onClick={onClose}>
      {/* Top Controls */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-6">
        {images.length > 1 && (
          <div className="text-white/40 font-light text-sm tracking-widest pointer-events-none">
            {index + 1} / {images.length}
          </div>
        )}
        <button 
          onClick={onClose} 
          className="text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={28} />
        </button>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-4 text-white/30 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={44} />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-4 text-white/30 hover:text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={44} />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-6xl w-full h-[85vh] flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-full">
          <Image 
            src={images[index]} 
            alt={`${alt} - View ${index + 1}`} 
            fill 
            className="object-contain" 
            unoptimized 
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* ─────────── Project Data (Sorted newest first) ─────────── */
const projectsEN = [
  {
    title: "Adversarial Search AI Agent (Pac-Man)",
    titleSub: "",
    role: "Core Algorithm Implementation — Monash FIT5047",
    date: "March 2026",
    body: (
      <>
        A real-time multi-ghost adversarial Pac-Man agent operating within a
        10-second time budget.
        <br />
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
        (No. 2026SR0163177).
        <br />
        <span style={{ fontWeight: 400 }}>Core output:</span> Fully developed
        with AI assistance. Pressing the shortcut while studying auto-detects the
        current word and displays 6 related images via Google Custom Search API
        in a floating overlay. Word-detection accuracy ≥95%,
        time-to-first-image &lt;1.5 s, bundle size &lt;50 KB.
      </>
    ),
    tech: ["Chrome Extension (Manifest V3)", "JavaScript", "API Integration"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/ShanBayAssistant-1.0", external: true }],
    images: ["/images/shanbei-main.png", "/images/shanbei-popup.png", "/images/shanbei-loading.png", "/images/shanbei-screenshot.png"],
  },
  {
    title: "LightNet-Monitor",
    titleSub: "轻量级网络流量监测平台",
    role: "Independent Developer (Bachelor's Thesis)",
    date: "Jan – Jun 2025",
    body: (
      <>
        Bachelor&rsquo;s thesis project, including a complete six-chapter
        dissertation and multi-dimensional testing.
        <br />
        <span style={{ fontWeight: 400 }}>Core output:</span> High-concurrency
        real-time packet capture and protocol analysis via tshark, with anomaly
        alerting and visual dashboards.
      </>
    ),
    tech: ["Python", "Flask", "SQLite", "tshark", "Chart.js"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/LightNet-Monitor", external: true }],
    images: [
      "/images/lightnet-dashboard.png",
      "/images/lightnet-traffic.png",
      "/images/lightnet-alerts.png",
      "/images/lightnet-login.png",
      "/images/lightnet-users.png"
    ],
  },
  {
    title: "AI Medical Consultation System",
    titleSub: "AI 医疗问诊系统",
    role: "Project Lead / AI Engineer",
    date: "Aug – Sep 2024",
    body: (
      <>
        Led a 4-person team to build a domain-specific medical Q&amp;A system in
        collaboration with Gao Hui Qiang Xue Software.
        <br />
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
    images: ["/images/medical-chatbot-screenshot.png"],
  },
];

const projectsZH = [
  {
    title: "对抗搜索 AI 智能体（多鬼魂吃豆人）",
    titleSub: "Adversarial Search AI Agent",
    role: "核心算法实现 — 莫纳什大学 FIT5047",
    date: "2026.03",
    body: (
      <>
        在 10 秒时间预算内实时决策的多鬼魂对抗吃豆人智能体。
        <br />
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        实现了带走法排序的 Alpha-Beta 剪枝、Top-2 鬼魂动作裁剪与 BFS 距离缓存。在 35 组测试中取得{" "}
        <span style={{ fontWeight: 400 }}>34 胜 1 平</span>的成绩。
      </>
    ),
    tech: ["Python", "Alpha-Beta Pruning", "BFS", "Game AI"],
    links: [{ label: "报告 (PDF)", href: "/files/FIT5047-PacMan-Report.pdf", external: true }],
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
        <br />
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        借助 AI 辅助独立完成开发闭环。学习时按下快捷键，自动识别当前单词并通过 Google Custom Search API 在浮窗展示 6 张相关图片。单词识别准确率 ≥95%，首图加载时间 &lt;1.5 秒，打包体积 &lt;50 KB。
      </>
    ),
    tech: ["Chrome Extension (Manifest V3)", "JavaScript", "API Integration"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/ShanBayAssistant-1.0", external: true }],
    images: ["/images/shanbei-main.png", "/images/shanbei-popup.png", "/images/shanbei-loading.png", "/images/shanbei-screenshot.png"],
  },
  {
    title: "LightNet-Monitor 轻量级网络流量监测平台",
    titleSub: "Bachelor's Thesis",
    role: "独立开发者（本科毕业设计）",
    date: "2025.01 – 2025.06",
    body: (
      <>
        本科毕业设计，包含完整六章论文与多维度测试。
        <br />
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        基于 tshark 实现高并发数据包的实时捕获与协议解析，支持异常告警与可视化仪表盘。
      </>
    ),
    tech: ["Python", "Flask", "SQLite", "tshark", "Chart.js"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/LightNet-Monitor", external: true }],
    images: [
      "/images/lightnet-dashboard.png",
      "/images/lightnet-traffic.png",
      "/images/lightnet-alerts.png",
      "/images/lightnet-login.png",
      "/images/lightnet-users.png"
    ],
  },
  {
    title: "AI 医疗问诊系统",
    titleSub: "AI Medical Consultation System",
    role: "项目负责人 / AI 工程师",
    date: "2024.08 – 2024.09",
    body: (
      <>
        带领 4 人团队与高慧强学软件科技合作开发面向特定领域的医疗问答系统。
        <br />
        <span style={{ fontWeight: 400 }}>核心产出：</span>
        设计了整合百川大模型与 Neo4j 知识图谱（22K+ 实体，196K+ 关系边）的混合检索（RAG）流水线。通过实现智能路由机制，在保持诊断准确率的同时将 LLM API 调用量降低了约{" "}
        <span style={{ fontWeight: 400 }}>70%</span>。
      </>
    ),
    tech: ["Python", "百川大模型", "Neo4j", "RAG", "Docker", "Gradio"],
    links: [{ label: "GitHub", href: "https://github.com/kidheart/AI-medical-chatbot", external: true }],
    images: ["/images/medical-chatbot-screenshot.png"],
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
  const [lightbox, setLightbox] = useState<{ images: string[]; alt: string } | null>(null);
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
            {p.titleSub && p.titleSub.length > 0 && (
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
              {(p as any).images && (p as any).images.length > 0 && (
                <>
                  <span style={{ color: "var(--meta)" }}> · </span>
                  <button
                    onClick={() => setLightbox({ images: (p as any).images, alt: p.title })}
                    className="underline decoration-dotted underline-offset-4 cursor-pointer"
                    style={{ color: "var(--accent)", fontWeight: 400 }}
                  >
                    {lang === "en" ? "Gallery" : "演示截图"}
                  </button>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* ── Certifications ── */}
      <h2 id="certifications" className="section-title" style={{ marginTop: "56px", marginBottom: "18px" }}>
        {certs.title}
      </h2>

      <ul className="sq" style={{ fontSize: "12pt", lineHeight: 1.7, color: "var(--body)", display: "flex", flexDirection: "column", gap: "10px" }}>
        {certs.items.map((item) => (
          <li key={item.label}>
            <span style={{ fontWeight: 400 }}>{item.label}</span>
            <span style={{ fontWeight: 200 }}> {item.desc} </span>
            {item.cert && (
              <button
                onClick={() => setLightbox({ images: ["/images/software-copyright.jpg"], alt: "National Software Copyright Certificate" })}
                className="underline decoration-dotted underline-offset-4 cursor-pointer"
                style={{ color: "var(--accent)", fontWeight: 400 }}
                aria-label="View software copyright certificate"
              >
                {lang === "en" ? "View certificate" : "查看证书"}
              </button>
            )}
          </li>
        ))}
      </ul>

      {lightbox && <Lightbox images={lightbox.images} alt={lightbox.alt} onClose={closeLightbox} />}
    </div>
  );
}
