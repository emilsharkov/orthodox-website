export interface BlurImageBackgroundProps {
  img: string;
  children: React.ReactNode;
}

const BlurImageBackground = (props: BlurImageBackgroundProps) => {
  const { img, children } = props;
  return (
    <div className="relative h-full w-full">
      <img
        src={img}
        className="cursor-none absolute inset-0 h-full w-full object-cover blur-2xl"
      />
      <div className="relative z-10 text-white w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default BlurImageBackground;
