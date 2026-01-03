import ScrollBackground from "../ScrollBackground";
import BlurBackground from "@/components/BlurBackground";

export interface HeroProps {
  img: string;
  icon: string;
  patronSaint: string;
  nationality?: string;
}

const Hero = (props: HeroProps) => {
  const { img, icon, patronSaint, nationality } = props;
  return (
    <ScrollBackground img={img}>
      <div className="flex w-full h-full justify-center items-center z-0">
        <BlurBackground>
          <div className="bg-black/60 text-white px-6 py-12 text-center w-[700px] flex flex-col items-center gap-4 rounded-lg">
            <img className="w-20 h-20" src={icon} />
            <div className="text-5xl font-medium leading-16 text-shadow-2xl">
              <div>Welcome to {patronSaint}</div>
              <div>{nationality} Orthodox Church</div>
            </div>
          </div>
        </BlurBackground>
      </div>
    </ScrollBackground>
  );
};

export default Hero;
