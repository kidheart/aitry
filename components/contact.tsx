"use client";
import { useLanguage } from "@/contexts/language-context";

const copy = {
  en: {
    title: "Contact",
    github: "GitHub:",
    linkedin: "LinkedIn:",
    email: "Email:",
  },
  zh: {
    title: "联系我",
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

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "auto 1fr", 
        gap: "12px 24px", 
        fontSize: "12pt", 
        fontWeight: 200, 
        lineHeight: 1.5, 
        color: "var(--body)" 
      }}>
        <span style={{ fontWeight: 400 }}>{t.email}</span>
        <a href="mailto:masonHan@qq.com" className="prose-b">
          masonHan(at)qq(dot)com
        </a>

        <span style={{ fontWeight: 400 }}>{t.github}</span>
        <a href="https://github.com/kidheart" target="_blank" rel="noopener noreferrer" className="prose-b">
          github.com/kidheart
        </a>

        <span style={{ fontWeight: 400 }}>{t.linkedin}</span>
        <a href="https://www.linkedin.com/in/masonhan2026" target="_blank" rel="noopener noreferrer" className="prose-b">
          linkedin.com/in/masonhan2026
        </a>
      </div>
    </div>
  );
}
