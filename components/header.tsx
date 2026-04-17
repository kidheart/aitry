"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
    // Update URL hash without jumping
    window.history.pushState(null, "", e.currentTarget.getAttribute("href") || "/");
  };

  return (
    <>
      {/* ── Desktop: Fixed Left Sidebar ── */}
      <aside className="site-sidebar">
        {/* Site name */}
        <a href="#hero" className="sidebar-name" onClick={scrollToTop}>
          {lang === "en" ? "Yueze Han" : "韩岳责"}
        </a>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="sidebar-nav">
            {links.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={link.href === "#hero" ? scrollToTop : undefined}
                >
                  {link.label}
                </a>
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
        <a href="#hero" className="site-name-mobile" onClick={scrollToTop}>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                height: "auto",
                opacity: 1,
                paddingBottom: 24,
                paddingTop: 16,
                transition: { 
                  height: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                  staggerChildren: 0.025 
                }
              },
              closed: {
                height: 0,
                opacity: 0,
                paddingBottom: 0,
                paddingTop: 0,
                transition: { 
                  height: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } 
                }
              }
            }}
            className="mobile-menu"
            aria-label="Mobile navigation"
            style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
          >
            {links.map((link) => (
              <motion.a 
                key={link.href} 
                href={link.href} 
                onClick={link.href === "#hero" ? scrollToTop : closeMenu}
                variants={{
                  closed: { opacity: 0, y: 5 },
                  open: { opacity: 1, y: 0 }
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
