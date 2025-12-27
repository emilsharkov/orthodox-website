export interface QuoteProps {
  quote: string;
  author: string;
  img: string;
}

const Quote = (props: QuoteProps) => {
  const { quote, author, img } = props;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[700px] text-white text-center flex flex-col gap-4 justify-center items-center">
        <div className="text-2xl font-bold">"{quote}"</div>
        <div className="text-lg font-semibold self-end">{author}</div>
      </div>
    </div>
  );
};

export default Quote;
