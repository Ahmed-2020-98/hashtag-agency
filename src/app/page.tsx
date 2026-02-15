import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import SectionCTA from "@/components/SectionCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionCTA
        title="هل تبحث عن موقع إلكتروني يميّز شركتك؟"
        buttonText="تواصل معنا الآن"
        variant="light"
      />

      <About />

      <SectionCTA
        title="جاهز تبدأ مشروعك الرقمي؟"
        buttonText="احصل على عرض سعر"
        variant="gradient"
      />

      <Services />

      <Portfolio />

      <SectionCTA
        title="نحوّل فكرتك إلى موقع احترافي"
        buttonText="ابدأ الآن"
        variant="light"
      />

      <Partners />
    </>
  );
}
