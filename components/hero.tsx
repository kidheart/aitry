"use client";
import { useLanguage } from "@/contexts/language-context";

const copy = {
  en: {
    degree: "Master of Artificial Intelligence @ Monash University (Expected 2027)",
    credential: "B.Eng. in Computer Science, Inner Mongolia University of Technology",
    email: "Email:",
  },
  zh: {
    degree: "人工智能理学硕士 @ 莫纳什大学（预计2027年毕业）",
    credential: "计算机科学工程学士，内蒙古工业大学",
    email: "邮箱：",
  },
};

export function Hero() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div>
      {/* Name */}
      <p className="hero-title" style={{ margin: "0 0 4px 0" }}>
        {lang === "en" ? "Yueze Han" : "韩岳责"}
      </p>

      {/* Degree */}
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "13pt",
        fontWeight: 400, color: "var(--body)", lineHeight: 1.45, margin: "0 0 2px 0",
      }}>
        {t.degree}
      </p>

      <div style={{ height: "14px" }} />

      {/* Credential */}
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "13pt",
        fontWeight: 400, color: "var(--body)", lineHeight: 1.45, margin: "0 0 2px 0",
      }}>
        {t.credential}
      </p>

      {/* Email */}
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "13pt",
        fontWeight: 400, color: "var(--body)", lineHeight: 1.45, margin: "0",
      }}>
        {t.email}{" "}
        <span style={{ color: "var(--link)", fontWeight: 300 }}>
          masonHan(at)qq(dot)com
        </span>
      </p>
    </div>
  );
}
