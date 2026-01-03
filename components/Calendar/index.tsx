export interface CalendarProps {
  url: string;
}

const Calendar = (props: CalendarProps) => {
  const { url } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="aspect-4/3 max-h-[80vh] h-[80vh] w-full max-w-[min(100%,calc(80vh*4/3))]">
        <iframe
          className="border-0 w-full h-full"
          src={url}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Calendar;
