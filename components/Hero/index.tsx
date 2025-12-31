import ScrollBackground from "../ScrollBackground";

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
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="bg-black/40 text-white px-6 py-12 text-center w-[700px] flex flex-col items-center gap-4">
          <img className="w-20 h-20" src={icon} />
          <div className="text-5xl font-medium">
            <div>Welcome to {patronSaint}</div>
            <div>{nationality} Orthodox Church</div>
          </div>
        </div>
      </div>
    </ScrollBackground>
  );
};

export default Hero;
