"use client";
import { useLanguage } from "@/contexts/language-context";

const copy = {
  en: {
    title: "For Prospective Employers & Collaborators",
    intro: (
      <>
        I am actively seeking{" "}
        <span style={{ fontWeight: 400 }}>Summer 2026 internship opportunities</span>.
        The roles that best fit my background are:
      </>
    ),
    roles: [
      { label: "AI Product Management", desc: "AI-native or LLM-powered products" },
      { label: "Product Development in FinTech", desc: "" },
      { label: "Software Engineering", desc: "full-stack or applied AI" },
    ],
    contact: (
      <>
        If you are hiring for such a position and would like to discuss a
        potential fit, please <a href="#contact">get in touch</a>. A short
        email with a link to the role is the fastest way to start the
        conversation; source code and project artefacts are available on request.
      </>
    ),
    cv: (
      <>
        My full CV is available in the <a href="#cv">CV section</a> above (English / Chinese).
      </>
    ),
  },
  zh: {
    title: "致招聘方与合作者",
    intro: (
      <>
        我目前正在积极寻找{" "}
        <span style={{ fontWeight: 400 }}>2026年夏季实习机会</span>。
        最适合我背景的岗位方向包括：
      </>
    ),
    roles: [
      { label: "AI 产品管理", desc: "AI 原生产品或大模型驱动产品" },
      { label: "金融科技产品开发", desc: "" },
      { label: "软件研发", desc: "全栈开发或 AI 应用" },
    ],
    contact: (
      <>
        如您正在招聘上述岗位并希望进一步了解，欢迎<a href="#contact">联系我</a>。
        发送一封简短的邮件附上职位链接是最快捷的沟通方式；代码与项目资料可按需提供。
      </>
    ),
    cv: (
      <>
        完整简历请查看上方的 <a href="#cv">简历</a> 板块（中英双语）。
      </>
    ),
  },
};

const pStyle = {
  fontSize: "12pt",
  fontWeight: 200,
  lineHeight: 1.7,
  marginBottom: "16px",
  color: "var(--body)",
} as const;

export function Opportunities() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="prose-b">
      <h2 className="section-title" style={{ marginTop: 0, marginBottom: "18px" }}>
        {t.title}
      </h2>

      <p style={pStyle}>{t.intro}</p>

      <ul className="sq" style={{ fontSize: "12pt", fontWeight: 200, lineHeight: 1.7, marginBottom: "20px", color: "var(--body)" }}>
        {t.roles.map((r) => (
          <li key={r.label}>
            <span style={{ fontWeight: 400 }}>{r.label}</span>
            {r.desc && <> — {r.desc}</>}
          </li>
        ))}
      </ul>

      <p style={pStyle}>{t.contact}</p>
      <p style={{ ...pStyle, marginBottom: 0 }}>{t.cv}</p>
    </div>
  );
}
