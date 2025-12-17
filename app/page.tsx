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
import Video from "@/components/Video";

const Home = () => {
  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen bg-white">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/1Tpgc0HYDIgoWfzwyOpw2B?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.856908615561!2d-117.20486548719292!3d32.7941562735466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0023e51701c9%3A0xfc2fedb5fac801fd!2sSt.%20George%20Serbian%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1765933047838!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <nav id="navbar" className="">
        <Navbar />
      </nav>
      <div className="flex flex-col gap-5">
        <section id="hero" className="hero-section">
          <Hero />
        </section>
        <section id="about" className="about-section">
          <About />
        </section>
        <section id="video" className="video-section">
          <Video />
        </section>
        <section id="map" className="map-section">
          <Map />
        </section>
        <section id="calendar" className="calendar-section">
          <Calendar />
        </section>
        <section id="quote" className="quote-section">
          <Quote />
        </section>
        <section id="events" className="events-section">
          <Events />
        </section>
        <section id="countdown" className="countdown-section">
          <Countdown />
        </section>
        <section id="bulletin" className="bulletin-section">
          <Bulletin />
        </section>
        <section id="contact" className="contact-section">
          <Contact />
        </section>
        <section id="footer" className="footer-section">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
