export interface ScrollBackgroundProps {
  img: string;
  children: React.ReactNode;
}

const ScrollBackground = (props: ScrollBackgroundProps) => {
  const { img, children } = props;
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      />
      {/* <div className={`absolute inset-0 z-1 bg-amber-50 0/20`} /> */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default ScrollBackground;
