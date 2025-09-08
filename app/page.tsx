import HeroSection from "@/components/reusable/HeroSection/HeroSection";
import Navbar from "@/components/reusable/NavSection/Navbar"

export default function Home() {
  return (
    <>
      <header className="">
      <Navbar />
      </header>
      <main className="">
        <HeroSection/>
      </main>
    </>
  );
}
