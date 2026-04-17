"use client";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { lang } = useLanguage();
  return (
    <footer
      className="pt-10 mt-6 border-t text-[12px]"
      style={{ borderColor: "var(--border)", color: "var(--meta)", fontWeight: 300 }}
    >
      <p>
        {lang === "en"
          ? "Last updated: April 2026 \u00a0·\u00a0 © Yueze Han."
          : "最后更新：2026年4月 \u00a0·\u00a0 © 韩岳责"}
      </p>
    </footer>
  );
}
