"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { News } from "@/components/news";
import { Interests } from "@/components/interests";
import { Projects } from "@/components/projects";
import { CV } from "@/components/cv";
import { Opportunities } from "@/components/opportunities";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
};

export default function Home() {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-content">

        {/* ── Hero + About Grid ── */}
        <motion.div 
          className="hero-grid" 
          {...fadeInUp}
          style={{
            display: "grid",
            gridTemplateColumns: "174px 1fr",
            gridTemplateRows: "auto auto",
            marginBottom: "0",
            minHeight: "calc(100vh - 48px)",
          }}
        >
          {/* Column 1: Photo */}
          <div
            id="home"
            className="hero-photo-col"
            style={{
              gridColumn: "1",
              gridRow: "1 / 3",
              paddingRight: "24px",
              alignSelf: "start",
            }}
          >
            <div style={{
              width: "150px",
              height: "180px",
              position: "relative",
              overflow: "hidden",
              background: "#ececec",
              flexShrink: 0,
            }}>
              <Image
                src="/images/avatar.jpg"
                alt="Yueze Han"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
            </div>
          </div>

          {/* Column 2, Row 1: Hero info */}
          <div id="hero" className="hero-text-col" style={{ gridColumn: "2", gridRow: "1" }}>
            <Hero />
          </div>

          {/* Column 2, Row 2: About Me */}
          <section
            id="about"
            className="hero-about-col"
            style={{
              gridColumn: "2",
              gridRow: "2",
              paddingTop: "64px",
              paddingBottom: "56px",
            }}
          >
            <About />
          </section>
        </motion.div>

        {/* ── Separate Sections ── */}
        <motion.section id="news" className="content-section" {...fadeInUp}>
          <News />
        </motion.section>

        <motion.section id="interests" className="content-section" {...fadeInUp}>
          <Interests />
        </motion.section>

        <motion.section id="projects" className="content-section" {...fadeInUp}>
          <Projects />
        </motion.section>

        <motion.section id="cv" className="content-section" {...fadeInUp}>
          <CV />
        </motion.section>

        <motion.section id="opportunities" className="content-section" {...fadeInUp}>
          <Opportunities />
        </motion.section>

        <motion.section id="contact" className="content-section" {...fadeInUp}>
          <Contact />
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}
