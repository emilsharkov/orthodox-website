import TextBlock, { TextBlockProps } from "../TextBlock";

export interface AboutProps extends TextBlockProps {
  // img: string;
}

const About = (props: AboutProps) => {
  const { subtitle, title, description } = props;
  return (
    <div className="w-full flex flex-col gap-12 py-16 px-12">
      {/* Welcome Section */}
      <TextBlock subtitle={subtitle} title={title} description={description} />

      {/* What is Orthodoxy Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            Understanding Our Faith
          </div>
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
            What is Orthodoxy?
          </h2>
        </div>
        <div className="w-16 h-1 bg-sky-700/30"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Orthodoxy, meaning "right belief" or "right worship," is the ancient
          Christian faith that traces its origins directly to the Apostles and
          the early Church. Rooted in the teachings of Christ and the Holy
          Scriptures, Orthodox Christianity maintains the unbroken continuity of
          apostolic tradition, preserving the faith once delivered to the
          saints. The Orthodox Church emphasizes the mystery of the Holy
          Trinity, the Incarnation of Christ, and the transformative power of
          the Holy Spirit working through the sacraments, prayer, and the
          liturgical life of the Church. With a rich theological heritage
          spanning two millennia, Orthodoxy offers a path to union with God
          through participation in the divine life, emphasizing both personal
          spiritual growth and the communal experience of worship within the
          Body of Christ.
        </p>
      </div>
    </div>
  );
};

export default About;
