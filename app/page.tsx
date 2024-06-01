import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Ebook from "@/components/Ebook";
import Projets from "@/components/Projets";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { EnjoyedMoment } from "@/components/EnjoyedMoment";
import Formation from "@/components/Formation";
import Hobbies from "@/components/Hobbies";
import Calend from "@/components/Calend";
import Training from "@/components/Training";

export default function Home() {
  return (
    <main
      id="root"
      className="relative font-monteserrat bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"
    >
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Ebook />
        <Projets />
        <EnjoyedMoment />
        <Hobbies />
        <Training />
        <Clients />
        <Formation />
        <Footer />
        <Calend />
      </div>
    </main>
  );
}
