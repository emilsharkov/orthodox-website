export interface MapProps {
  url: string;
}

const Map = (props: MapProps) => {
  const { url } = props;
  return (
    <iframe
      className="w-full h-[450px] border-0"
      src={url}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
