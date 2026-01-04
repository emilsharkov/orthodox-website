import { Button } from "../ui/button";

export interface FeatureSectionProps {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

const FeatureSection = (props: FeatureSectionProps) => {
  const { subtitle, title, description, image } = props;
  return (
    <div className="w-full h-full flex flex-row max-lg:flex-col items-center justify-center gap-12">
      <div className="w-full max-w-1/2 flex flex-col gap-8 items-start justify-center rounded-lg text-black">
        <div className="text-base font-bold uppercase text-sky-700">
          {subtitle}
        </div>
        <div className="text-5xl font-medium">{title}</div>
        <div className="text-lg font-extralight leading-9 italic">
          {description}
        </div>
        <Button className="px-12 py-8 text-lg font-medium bg-sky-700">
          Learn More
        </Button>
      </div>
      <img
        src={image}
        alt={title}
        className="max-h-[550px] max-lg:max-w-full rounded-lg"
      />
    </div>
  );
};

export default FeatureSection;
