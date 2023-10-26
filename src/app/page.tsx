import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex flex-col bg-primary-foreground pb-5 pe-10 ps-10 pt-5 duration-300 sm:pe-24 sm:ps-24">
      <Header />
      <section className="flex flex-col items-center justify-center">
        <About />
        <Project />
        <Contact />
      </section>
    </main>
  );
}
