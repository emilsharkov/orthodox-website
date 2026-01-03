import BlurBackground from "../BlurBackground";

export interface QuoteProps {
  quote: string;
  author: string;
  img: string;
}

const Quote = (props: QuoteProps) => {
  const { quote, author } = props;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BlurBackground>
        <div className="max-w-[700px] text-white text-center flex flex-col gap-4 justify-center items-center bg-black/60 px-8 py-16 rounded-lg">
          <div className="text-2xl font-medium">"{quote}"</div>
          <div className="text-xl font-medium self-end">{author}</div>
        </div>
      </BlurBackground>
    </div>
  );
};

export default Quote;
