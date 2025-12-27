import { CalendarProps } from "@/components/Calendar";
import { FooterProps } from "@/components/Footer";
import { HeroProps } from "@/components/Hero";
import { MapProps } from "@/components/Map";
import { NavbarProps } from "@/components/Navbar";
import { QuoteProps } from "@/components/Quote";
import { VideoProps } from "@/components/Video";

interface TemplateProps {
  navbar: NavbarProps;
  hero: HeroProps;
  video: VideoProps;
  map: MapProps;
  calendar: CalendarProps;
  quote: QuoteProps;
  footer: FooterProps;
}

const template: TemplateProps = {
  navbar: {
    img: "/st-george.png",
    links: [
      { href: "/", name: "Home" },
      { href: "/about", name: "About" },
      { href: "/calendar", name: "Calendar" },
      { href: "/contact", name: "Contact" },
    ],
  },
  hero: {
    img: "/parish.jpg",
    icon: "/serbian-cross.png",
    title: "St. George Serbian Orthodox Church",
  },
  video: {
    url: "https://www.youtube.com/embed/6b5i16j6P3o?si=zYSpauVcVzaO0Paj",
  },
  map: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6707.856908615561!2d-117.20486548719292!3d32.7941562735466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0023e51701c9%3A0xfc2fedb5fac801fd!2sSt.%20George%20Serbian%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1765933047838!5m2!1sen!2sus",
  },
  calendar: {
    url: "https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles",
  },
  quote: {
    quote:
      "The person advancing in the spiritual life studies three things: the commandments, doctrine, and faith in the Holy Trinity.",
    author: "St. Thalassios the Libyan",
    img: "/christ-pantocrator.jpg",
  },
  footer: {
    parishName: "St. George Serbian Orthodox Church",
  },
};

export default template;
