export interface CalendarProps {
  url: string;
}

const Calendar = (props: CalendarProps) => {
  const { url } = props;
  return (
    <iframe
      className="w-full h-[600px] border-0"
      src={url}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Calendar;
