import { cn } from "@/lib/utils";

export interface TintedBackgroundProps {
  className?: string;
  children: React.ReactNode;
  img: string;
}

const TintedBackground = (props: TintedBackgroundProps) => {
  const { className, children, img } = props;
  return (
    <div className="relative h-full w-full">
      <div
        className={cn("absolute inset-0 bg-fixed bg-center bg-cover grayscale")}
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div
        className={cn(
          className,
          "relative z-10 w-full h-full flex justify-center items-center",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default TintedBackground;
