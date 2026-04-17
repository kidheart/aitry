"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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

        {/* ── Language toggle — pinned to sidebar bottom ── */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "48px",
          right: "32px",
        }}>
          <button
            onClick={toggle}
            aria-label="Switch language"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11pt",
              fontWeight: 300,
              color: "rgba(249,249,249,0.65)",
              background: "none",
              border: "1px solid rgba(249,249,249,0.2)",
              cursor: "pointer",
              padding: "5px 12px",
              letterSpacing: "0.04em",
              transition: "color 0.15s, border-color 0.15s",
              width: "100%",
              textAlign: "left",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(249,249,249,1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(249,249,249,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(249,249,249,0.65)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(249,249,249,0.2)";
            }}
          >
            {lang === "en" ? "English" : "中文"}
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
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10pt",
              fontWeight: 300,
              color: "rgba(249,249,249,0.75)",
              background: "none",
              border: "1px solid rgba(249,249,249,0.25)",
              cursor: "pointer",
              padding: "2px 8px",
            }}
          >
            {lang === "en" ? "EN" : "中"}
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
