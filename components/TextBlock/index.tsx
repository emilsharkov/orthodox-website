export interface TextBlockProps {
  subtitle: string;
  title: string;
  description: string;
}

const TextBlock = (props: TextBlockProps) => {
  const { subtitle, title, description } = props;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
          {subtitle}
        </div>
        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="w-16 h-1 bg-sky-700/30"></div>
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default TextBlock;
