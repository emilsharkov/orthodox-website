export interface ScrollBackgroundProps {
  img: string;
  children: React.ReactNode;
}

const ScrollBackground = (props: ScrollBackgroundProps) => {
  const { img, children } = props;
  return (
    <div
      className="w-full h-full bg-fixed bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
};

export default ScrollBackground;
