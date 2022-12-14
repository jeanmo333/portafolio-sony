import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>mi-portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* skills */}
      <section id="skills" className="snap-center">
        <Skills/>
      </section>

      {/* prjects */}
      <section id="projects" className="snap-center">
        <Projects/>
      </section>

      {/* contact me */}
    </div>
  );
}
