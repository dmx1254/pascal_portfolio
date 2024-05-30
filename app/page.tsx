import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Ebook from "@/components/Ebook";
import Projets from "@/components/Projets";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { EnjoyedMoment } from "@/components/EnjoyedMoment";

export default function Home() {
  return (
    <main className="relative font-monteserrat bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Ebook />
        <Projets />
        <EnjoyedMoment />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
