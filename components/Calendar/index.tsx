export interface CalendarProps {
  url: string;
}

const Calendar = (props: CalendarProps) => {
  const { url } = props;
  return (
    <div className="flex justify-center items-center w-full">
      <div className="aspect-4/3 w-full">
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
