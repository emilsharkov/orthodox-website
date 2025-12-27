import About from "@/components/About";
import Bulletin from "@/components/Bulletin";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import ScrollBackground from "@/components/ScrollBackground";
import Video from "@/components/Video";
import template from "@/lib/template";

const Home = () => {
  const { navbar, hero, video, map, calendar, quote, footer } = template;

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
        <section id="video" className="video">
          <Video {...video} />
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
        <section id="events" className="events">
          <Events />
        </section>
        <section id="countdown" className="min-h-[90vh]">
          <ScrollBackground img="/apostles.jpg">
            <Countdown />
          </ScrollBackground>
        </section>
        <section id="bulletin" className="bulletin">
          <Bulletin />
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
