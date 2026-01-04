import About from "@/components/About";
import Calendar from "@/components/Calendar";
import Countdown from "@/components/Countdown";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import ScrollBackground from "@/components/ScrollBackground";
import TintedBackground from "@/components/TintedBackground";
import template from "@/lib/template";

const Home = () => {
  const {
    navbar,
    hero,
    about,
    video,
    map,
    calendar,
    quote,
    footer,
    featureSection,
  } = template;

  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen bg-stone-100">
      <nav id="navbar" className="w-full sticky top-0 z-50">
        <TintedBackground className="bg-sky-900/80" img="/parchment.jpg">
          <Navbar {...navbar} />
        </TintedBackground>
      </nav>
      <div className="flex flex-col w-full">
        {/* Hero — visual impact */}
        <section id="hero" className="min-h-[90vh]">
          <Hero {...hero} />
        </section>

        <TintedBackground className="bg-stone-100/50 flex-col" img="paper.jpg">
          {/* About — reading */}
          <section className="max-w-[1080px] w-full flex justify-center items-center">
            <About {...about} />
          </section>

          {/* Features — structure */}
          <section
            id="feature-section"
            className="text-white max-w-[1080px] w-full py-12"
          >
            <FeatureSection {...featureSection} />
          </section>
        </TintedBackground>

        {/* Quote — emotional break */}
        <section id="quote" className="min-h-[90vh]">
          <ScrollBackground img={quote.img}>
            <Quote {...quote} />
          </ScrollBackground>
        </section>

        <TintedBackground className="bg-stone-100/50" img="paper.jpg">
          {/* Calendar — informational */}
          <section
            id="calendar"
            className="max-w-[900px] flex flex-col items-center justify-center w-full py-12 gap-8"
          >
            <div className="text-base font-bold uppercase text-sky-700">
              Our Service Schedule
            </div>
            <div className="text-center text-5xl font-medium">
              Come and Experience Orthodoxy!
            </div>
            <Calendar {...calendar} />
          </section>
        </TintedBackground>

        {/* Countdown — urgency */}
        <section id="countdown" className="min-h-[90vh]">
          <ScrollBackground img="apostles.jpg">
            <Countdown />
          </ScrollBackground>
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
