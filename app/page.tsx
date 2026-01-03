import About from "@/components/About";
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
import TintedBackground from "@/components/TintedBackground";
import Video from "@/components/Video";
import template from "@/lib/template";

const Home = () => {
  const {
    navbar,
    hero,
    video,
    map,
    calendar,
    quote,
    footer,
    featureSection,
    countdown,
  } = template;

  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen bg-stone-100">
      <nav id="navbar" className="w-full">
        <TintedBackground className="bg-sky-700/80" img="/parchment.jpg">
          <Navbar {...navbar} />
        </TintedBackground>
      </nav>
      <div className="flex flex-col w-full mx-auto">
        {/* Hero — visual impact */}
        <section id="hero" className="min-h-[90vh]">
          <Hero {...hero} />
        </section>

        <TintedBackground className="bg-stone-100/50 flex-col" img="paper.jpg">
          {/* About — reading */}
          <section id="about">
            <About />
          </section>

          {/* Features — structure */}
          <section id="feature-section" className="text-white min-h-[90vh]">
            <FeatureSection {...featureSection} />
          </section>
        </TintedBackground>

        {/* Quote — emotional break */}
        <section id="quote" className="min-h-[90vh]">
          <ScrollBackground img={quote.img}>
            <Quote {...quote} />
          </ScrollBackground>
        </section>

        {/* Countdown — urgency */}
        <section id="countdown" className="min-h-[90vh]">
          <ScrollBackground img="apostles.jpg">
            <Countdown />
          </ScrollBackground>
        </section>

        {/* Calendar — informational */}
        <section id="calendar" className="min-h-[90vh]">
          <TintedBackground
            className="bg-stone-100/50 flex flex-col h-full w-full"
            img="paper.jpg"
          >
            <Calendar {...calendar} />
          </TintedBackground>
        </section>

        {/* Map — utility (last content section) */}
        <section id="map" className="bg-stone-100">
          <Map {...map} />
        </section>
      </div>
      <footer id="footer" className="w-full flex justify-center">
        <TintedBackground className="bg-sky-700/80" img="/parchment.jpg">
          <Footer {...footer} />
        </TintedBackground>
      </footer>
    </main>
  );
};

export default Home;
