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
      <div className="flex flex-col gap-5 w-full">
        <section id="hero" className="hero">
          <nav id="navbar" className="absolute w-full flex justify-center z-20">
            <Navbar />
          </nav>
          <Hero />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="video" className="video">
          <Video url="https://www.youtube.com/embed/6b5i16j6P3o?si=zYSpauVcVzaO0Paj" />
        </section>
        <section id="map" className="map">
          <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.856908615561!2d-117.20486548719292!3d32.7941562735466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0023e51701c9%3A0xfc2fedb5fac801fd!2sSt.%20George%20Serbian%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1765933047838!5m2!1sen!2sus" />
        </section>
        <section id="calendar" className="calendar">
          <Calendar url="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles" />
        </section>
        <section id="quote" className="quote">
          <Quote />
        </section>
        <section id="events" className="events">
          <Events />
        </section>
        <section id="countdown" className="countdown">
          <Countdown />
        </section>
        <section id="bulletin" className="bulletin">
          <Bulletin />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </div>
      <footer id="footer" className="w-full flex justify-center">
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
