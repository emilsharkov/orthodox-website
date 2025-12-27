import ScrollBackground from "../ScrollBackground";

export interface HeroProps {
  img: string;
  icon: string;
  title: string;
}

const Hero = (props: HeroProps) => {
  const { img, icon, title } = props;
  return (
    <ScrollBackground img={img}>
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="bg-black/40 text-white px-6 py-4 text-center w-[700px] flex flex-col items-center gap-4">
          <img className="w-20 h-20" src={icon} />
          <div className="text-5xl font-medium max-w-[400px]">{title}</div>
        </div>
      </div>
    </ScrollBackground>
  );
};

export default Hero;
