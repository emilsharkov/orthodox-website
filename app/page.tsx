import About from "@/components/About";
import BlurBackground from "@/components/BlurBackground";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import ScrollBackground from "@/components/ScrollBackground";
import Video from "@/components/Video";
import template from "@/lib/template";

const Home = () => {
  const { navbar, hero, video, map, calendar, quote, footer, featureSection } =
    template;

  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen bg-white">
      <div className="flex flex-col gap-5  w-full mx-auto">
        <section id="hero" className="min-h-[90vh]">
          <nav id="navbar" className="absolute w-full flex justify-center z-20">
            <Navbar {...navbar} />
          </nav>
          <Hero {...hero} />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="video" className="flex justify-center items-center">
          <BlurBackground img={hero.img}>
            <Video {...video} />
          </BlurBackground>
        </section>
        <section id="map" className="map">
          <Map {...map} />
        </section>
        <section id="calendar" className="calendar">
          <Calendar {...calendar} />
        </section>
        <section id="quote" className="min-h-[90vh]">
          <ScrollBackground img={quote.img}>
            <Quote {...quote} />
          </ScrollBackground>
        </section>
        <section id="feature-section" className="feature-section">
          <FeatureSection {...featureSection} />
        </section>
        <section id="countdown" className="min-h-[90vh]">
          <ScrollBackground img="/apostles.jpg">
            <Countdown />
          </ScrollBackground>
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </div>
      <footer id="footer" className="w-full flex justify-center">
        <Footer {...footer} />
      </footer>
    </main>
  );
};

export default Home;
