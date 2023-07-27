import { Hero } from "@/components";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <section className="snap-start relative z-0 w-full h-screen mx-auto items-center">
        <div
          className="absolute top-0 left-1 w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cool-background.svg')",
            opacity: "0.6",
          }}
        />
        <Hero />
      </section>
      <section className="snap-start">
        <About />
      </section>
    </main>
  );
}
