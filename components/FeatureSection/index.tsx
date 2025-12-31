import { Button } from "../ui/button";

export interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
}

const FeatureSection = (props: FeatureSectionProps) => {
  const { title, description, image } = props;
  return (
    <div className="w-full h-full flex flex-row max-lg:flex-col items-center justify-center gap-4 px-4">
      <div className="w-full max-w-[500px]  h-full flex flex-col gap-4 items-center justify-center">
        <div className="text-5xl font-semibold self-start">{title}</div>
        <div className="text-lg font-medium">{description}</div>
        <Button className="self-start px-10 py-8 text-lg font-medium">
          Learn More
        </Button>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full max-w-[400px] max-lg:max-w-full h-full object-cover"
      />
    </div>
  );
};

export default FeatureSection;
