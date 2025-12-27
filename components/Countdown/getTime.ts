export interface Time {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

import {
  PADDING_LENGTH,
  PADDING_CHAR,
  DAYS_IN_WEEK,
  SUNDAY_SERVICE_HOUR,
  SUNDAY_SERVICE_MINUTE,
  SUNDAY_SERVICE_SECOND,
  SUNDAY_SERVICE_MILLISECOND,
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
  MINUTES_PER_HOUR,
  HOURS_PER_DAY,
} from "./constants";

const formatValue = (value: number) =>
  String(value).padStart(PADDING_LENGTH, PADDING_CHAR);

const getTime = (): Time => {
  const now = new Date();
  const nextSunday = new Date(now);
  nextSunday.setDate(
    now.getDate() + ((DAYS_IN_WEEK - now.getDay()) % DAYS_IN_WEEK),
  );
  nextSunday.setHours(
    SUNDAY_SERVICE_HOUR,
    SUNDAY_SERVICE_MINUTE,
    SUNDAY_SERVICE_SECOND,
    SUNDAY_SERVICE_MILLISECOND,
  );

  const timeUntilNextSunday = nextSunday.getTime() - now.getTime();
  const millisecondsPerDay =
    MILLISECONDS_PER_SECOND *
    SECONDS_PER_MINUTE *
    MINUTES_PER_HOUR *
    HOURS_PER_DAY;
  const millisecondsPerHour =
    MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
  const millisecondsPerMinute = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;

  const daysValue = Math.floor(timeUntilNextSunday / millisecondsPerDay);
  const hoursValue = Math.floor(
    (timeUntilNextSunday % millisecondsPerDay) / millisecondsPerHour,
  );
  const minutesValue = Math.floor(
    (timeUntilNextSunday % millisecondsPerHour) / millisecondsPerMinute,
  );
  const secondsValue = Math.floor(
    (timeUntilNextSunday % millisecondsPerMinute) / MILLISECONDS_PER_SECOND,
  );

  const days = formatValue(daysValue);
  const hours = formatValue(hoursValue);
  const minutes = formatValue(minutesValue);
  const seconds = formatValue(secondsValue);
  return { days, hours, minutes, seconds };
};

export default getTime;
