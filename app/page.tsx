import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overscroll-contain overflow-x-hidden">
      <section
        className="snap-start relative z-0 w-full h-screen mx-auto items-center scroll-py-96"
        id="hero"
      >
        <div
          className="absolute top-0 left-1 w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cool-background.svg')",
            opacity: "0.6",
          }}
        />
        <Hero />
      </section>
      <section
        className="snap-start relative z-0 w-full h-screen mx-auto items-center"
        id="about"
      >
        <div
          className="absolute bottom-0 right-1 w-full h-full bg-fixed bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/cool-background.svg')",
            opacity: "0.6",
            transform: "rotate(180deg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <About />
      </section>
      <section
        className="snap-start relative z-0 w-full h-screen mx-auto items-center"
        id="experience"
      >
        <div
          className="absolute bottom-0 right-1 w-full h-full bg-fixed bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/cool-background.svg')",
            opacity: "0.6",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Experience />
      </section>
      <section
        className="snap-start relative z-0 w-full h-screen mx-auto items-center"
        id="projects"
      >
        <div
          className="absolute bottom-0 right-1 w-full h-full bg-fixed bg-cover bg-no-repeat -z-1"
          style={{
            backgroundImage: "url('/cool-background.svg')",
            opacity: "0.6",
            transform: "rotate(180deg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Projects />
      </section>
    </main>
  );
}
