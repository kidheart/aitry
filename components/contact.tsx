"use client";
import { useLanguage } from "@/contexts/language-context";

const copy = {
  en: {
    title: "Contact",
    affiliation: "Affiliation:",
    affiliationVal: "Faculty of Information Technology, Monash University",
    github: "GitHub:",
    linkedin: "LinkedIn:",
    email: "Email:",
  },
  zh: {
    title: "联系我",
    affiliation: "所属机构：",
    affiliationVal: "莫纳什大学信息技术学院",
    github: "GitHub：",
    linkedin: "LinkedIn：",
    email: "邮箱：",
  },
};

export function Contact() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="prose-b">
      <h2 className="section-title" style={{ marginTop: 0, marginBottom: "18px" }}>
        {t.title}
      </h2>

      <p style={{ fontSize: "12pt", fontWeight: 200, lineHeight: 1.8, color: "var(--body)" }}>
        <span style={{ fontWeight: 400 }}>{t.email}</span>{" "}
        <a href="mailto:masonHan@qq.com">masonHan(at)qq(dot)com</a>
        <br />
        <span style={{ fontWeight: 400 }}>{t.affiliation}</span>{" "}
        {t.affiliationVal}
        <br />
        <span style={{ fontWeight: 400 }}>{t.github}</span>{" "}
        <a href="https://github.com/kidheart" target="_blank" rel="noopener noreferrer">
          github.com/kidheart
        </a>
        <br />
        <span style={{ fontWeight: 400 }}>{t.linkedin}</span>{" "}
        <a href="https://www.linkedin.com/in/masonhan2026" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/masonhan2026
        </a>
      </p>
    </div>
  );
}
