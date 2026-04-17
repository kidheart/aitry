"use client";
import { useLanguage } from "@/contexts/language-context";

const itemsEN = [
  {
    date: "April 2026",
    body: (
      <>
        I am currently seeking{" "}
        <span style={{ fontWeight: 400 }}>Summer 2026 internship opportunities</span>{" "}
        in AI Product Management, FinTech Product Development, or Software
        Engineering — see the <a href="#opportunities">opportunities</a> section.
      </>
    ),
  },
  {
    date: "March 2026",
    body: (
      <>
        Completed the <span style={{ fontWeight: 400 }}>FIT5047</span> course
        project on real-time adversarial search for multi-ghost Pac-Man: 34 wins
        and 1 draw across 35 test instances.
      </>
    ),
  },
  {
    date: "February 2026",
    body: (
      <>
        Started the Master of Artificial Intelligence program at{" "}
        <a href="https://www.monash.edu/" target="_blank" rel="noopener noreferrer">
          Monash University
        </a>.
      </>
    ),
  },
  {
    date: "January 2026",
    body: (
      <>
        The <span style={{ fontWeight: 400 }}>Shanbei Word-to-Image Assistant V1.0</span>{" "}
        received a{" "}
        <span style={{ fontWeight: 400 }}>National Software Copyright Registration</span>{" "}
        (No. 2026SR0163177).
      </>
    ),
  },
  {
    date: "June 2025",
    body: (
      <>
        Graduated with a B.Eng. in Computer Science from Inner Mongolia
        University of Technology. Bachelor&rsquo;s thesis:{" "}
        <span style={{ fontWeight: 400 }}>LightNet-Monitor</span> — a
        lightweight network-traffic monitoring platform engineered for
        high-concurrency packet capture and real-time anomaly alerting.
      </>
    ),
  },
  {
    date: "September 2024",
    body: (
      <>
        Led a 4-person team to develop the{" "}
        <span style={{ fontWeight: 400 }}>AI Medical Consultation System</span>{" "}
        in collaboration with Gao Hui Qiang Xue Software — integrating Baichuan
        LLM with a Neo4j knowledge graph, reducing API calls by ~70%.
      </>
    ),
  },
];

const itemsZH = [
  {
    date: "2026年4月",
    body: (
      <>
        正在寻找{" "}
        <span style={{ fontWeight: 400 }}>2026年夏季实习机会</span>，方向：
        AI 产品管理、金融科技产品开发、软件研发——详见
        <a href="#opportunities">机会</a>板块。
      </>
    ),
  },
  {
    date: "2026年3月",
    body: (
      <>
        完成 <span style={{ fontWeight: 400 }}>FIT5047</span> 课程项目——多鬼魂吃豆人实时对抗搜索：35局测试34胜1平。
      </>
    ),
  },
  {
    date: "2026年2月",
    body: (
      <>
        入读{" "}
        <a href="https://www.monash.edu/" target="_blank" rel="noopener noreferrer">
          莫纳什大学
        </a>
        人工智能理学硕士项目。
      </>
    ),
  },
  {
    date: "2026年1月",
    body: (
      <>
        <span style={{ fontWeight: 400 }}>扇贝单词图片助手 V1.0</span>{" "}
        获国家软件著作权登记（登记号：2026SR0163177）。
      </>
    ),
  },
  {
    date: "2025年6月",
    body: (
      <>
        以优异成绩毕业于内蒙古工业大学计算机科学专业。本科毕业设计：
        <span style={{ fontWeight: 400 }}>LightNet-Monitor</span>——
        面向高并发抓包与实时异常告警的轻量级网络流量监测平台。
      </>
    ),
  },
  {
    date: "2024年9月",
    body: (
      <>
        带领4人团队与高慧强学软件科技合作开发{" "}
        <span style={{ fontWeight: 400 }}>AI 医疗问诊系统</span>——
        整合百川大模型与 Neo4j 知识图谱，API 调用量降低约70%。
      </>
    ),
  },
];

const ulStyle = {
  fontSize: "12pt",
  lineHeight: 1.7,
  color: "var(--body)",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
} as const;

export function News() {
  const { lang } = useLanguage();
  const items = lang === "en" ? itemsEN : itemsZH;

  return (
    <div className="prose-b">
      <h2 className="section-title" style={{ marginTop: 0, marginBottom: "18px" }}>
        {lang === "en" ? "News" : "最新动态"}
      </h2>
      <ul className="sq" style={ulStyle}>
        {items.map((item, i) => (
          <li key={i} style={{ fontWeight: 200 }}>
            <span style={{ fontWeight: 300 }}>[{item.date}]</span>{" "}
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
