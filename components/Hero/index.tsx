import ScrollBackground from "../ScrollBackground";
import BlurBackground from "@/components/BlurBackground";
import { Button } from "../ui/button";

export interface HeroProps {
  img: string;
  icon: string;
  patronSaint: string;
  nationality?: string;
}

const Hero = (props: HeroProps) => {
  const { img, icon, patronSaint, nationality } = props;
  return (
    <ScrollBackground img={img} position="top">
      <div className="flex w-full h-full justify-start items-start">
        <div className="bg-linear-to-b from-black/20 via-black/60 to-black/80 w-full h-full text-white flex items-end justify-center pb-24 pl-12 gap-4">
          <div className="text-shadow-2xl flex flex-col justify-end w-full max-w-[1080px]">
            <div className="text-6xl font-medium leading-16">
              Welcome to {patronSaint}
            </div>
            <div className="text-6xl font-medium leading-16">
              {nationality} Orthodox Church
            </div>
            <p className="text-lg font-light leading-8 w-[500px]">
              Discover the beauty of Orthodox Christianity and experience the
              joy of worshiping God in the heart of your community.
            </p>
            <div className="flex flex-row gap-4 pt-4">
              <Button className="text-base px-6 py-6 bg-sky-800">
                Learn More
              </Button>
              <Button className="text-base px-6 py-6 bg-sky-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ScrollBackground>
  );
};

export default Hero;
