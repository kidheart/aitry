import Image from "next/image";
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

export default function Home() {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-content">

        {/*
          ┌─────────────────────────────────────────────────────┐
          │  CSS Grid: 2-column layout for Hero + About Me      │
          │  Col 1 (214px): Photo spanning BOTH rows            │
          │  Col 2 (1fr):   Row 1 = Hero info, Row 2 = About   │
          │                                                     │
          │  From News onwards → full width, no left column    │
          └─────────────────────────────────────────────────────┘
        */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "174px 1fr",
          gridTemplateRows: "auto auto",
          marginBottom: "0",
          minHeight: "calc(100vh - 48px)",  /* 确保News始终在首屏以下 */
        }}>
          {/* ── Column 1: Photo — spans hero + about rows ── */}
          <div
            id="home"
            style={{
              gridColumn: "1",
              gridRow: "1 / 3",              /* spans both rows */
              paddingRight: "24px",          /* gap between photo and text */
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
            {/* Area BELOW the photo in col-1 is intentionally blank */}
          </div>

          {/* ── Column 2, Row 1: Hero info text ── */}
          <div
            id="hero"
            style={{ gridColumn: "2", gridRow: "1" }}
          >
            <Hero />
          </div>

          {/* ── Column 2, Row 2: About Me ── */}
          <section
            id="about"
            style={{
              gridColumn: "2",
              gridRow: "2",
              paddingTop: "64px",    /* About Me与上方email之间充足留白 */
              paddingBottom: "56px",
            }}
          >
            <About />
          </section>
        </div>

        {/* ── Full-width sections from News onwards ── */}
        <section id="news" className="content-section">
          <News />
        </section>

        <section id="interests" className="content-section">
          <Interests />
        </section>

        <section id="projects" className="content-section">
          <Projects />
        </section>

        <section id="cv" className="content-section">
          <CV />
        </section>

        <section id="opportunities" className="content-section">
          <Opportunities />
        </section>

        <section id="contact" className="content-section">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}
