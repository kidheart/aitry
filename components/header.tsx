"use client";

import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const navLinks = {
  en: [
    { label: "Home",       href: "#hero" },
    { label: "About",      href: "#about" },
    { label: "News",       href: "#news" },
    { label: "Interests",  href: "#interests" },
    { label: "Projects",   href: "#projects" },
    { label: "CV",         href: "#cv" },
    { label: "Contact",    href: "#contact" },
  ],
  zh: [
    { label: "主页",   href: "#hero" },
    { label: "关于",   href: "#about" },
    { label: "动态",   href: "#news" },
    { label: "方向",   href: "#interests" },
    { label: "项目",   href: "#projects" },
    { label: "简历",   href: "#cv" },
    { label: "联系",   href: "#contact" },
  ],
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { lang, toggle } = useLanguage();
  const links = navLinks[lang];

  return (
    <>
      {/* ── Desktop: Fixed Left Sidebar ── */}
      <aside className="site-sidebar">
        {/* Site name */}
        <a href="#hero" className="sidebar-name">
          {lang === "en" ? "Yueze Han" : "韩岳责"}
        </a>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="sidebar-nav">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "48px",
          right: "32px",
        }}>
          <button
            onClick={toggle}
            className="lang-btn-premium"
            aria-label="Switch language"
          >
            <Languages className="icon-lang" />
            <span>{lang === "en" ? "English" : "中文"}</span>
          </button>
        </div>
      </aside>

      {/* ── Mobile: Sticky Top Navigation Bar ── */}
      <div className="top-nav-bar">
        <a href="#hero" className="site-name-mobile">
          {lang === "en" ? "Yueze Han" : "韩岳责"}
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={toggle}
            className="lang-btn-premium"
            style={{ padding: "4px 10px", gap: "6px" }} /* slightly smaller for mobile */
          >
            <Languages className="icon-lang" style={{ width: 12, height: 12 }} />
            <span style={{ fontSize: "9pt" }}>{lang === "en" ? "EN" : "中"}</span>
          </button>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile: Dropdown menu ── */}
      <nav
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
