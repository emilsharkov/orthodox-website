import { cn } from "@/lib/utils";

export interface BlurBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const BlurBackground = (props: BlurBackgroundProps) => {
  const { children, className } = props;
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 backdrop-blur-xs" />
      <div className={cn(className, "relative")}>{children}</div>
    </div>
  );
};

export default BlurBackground;
