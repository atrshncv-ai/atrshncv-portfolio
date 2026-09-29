import {
  Navigation,
  Hero,
  About,
  Process,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
  AIChat,
} from "@/components/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <Process />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <AIChat />
    </main>
  );
}
