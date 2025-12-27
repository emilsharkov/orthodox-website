import { useEffect, useState } from "react";
import getTime, { Time } from "./getTime";

const useCountdown = () => {
  const [time, setTime] = useState<Time>(getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
};

export default useCountdown;
