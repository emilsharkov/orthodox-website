export interface VideoProps {
  url: string;
}

const Video = (props: VideoProps) => {
  const { url } = props;
  return (
    <iframe
      className="w-full h-[315px] border-0"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

export default Video;
