import HeroSection from "@/components/reusable/HeroSection/HeroSection";
import Navbar from "@/components/reusable/NavSection/Navbar"
import CallToActionSection1 from "@/components/reusable/CTA1Section/CallToActionSection1";
import FeaturedProperties from "@/components/reusable/FeaturedProperties/FeaturedProperties";

export default function Home() {
  return (
    <>
      <header className="">
      <Navbar />
      </header>
      <main className="">
        <HeroSection/>
        <CallToActionSection1/>
        <FeaturedProperties/>
      </main>
    </>
  );
}
