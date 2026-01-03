"use client";

import BlurBackground from "../BlurBackground";
import useCountdown from "./useCountdown";

export interface CountdownProps {
  img: string;
}

export interface CountdownProps {
  img: string;
}

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <BlurBackground>
        <div className="w-full max-w-[600px] flex flex-col gap-4 justify-center items-center text-white text-center bg-black/60 px-8 py-10 rounded-lg">
          <img
            className="w-20 h-20"
            src="/serbian-cross.png"
            alt="Serbian Cross"
          />
          <div className="text-3xl font-bold">
            Countdown to Sunday's Service
          </div>
          <div className="text-lg font-semibold">
            Our Sunday Divine Liturgy is at 10:00 AM. Everyone is welcome! Come
            and worship with us!
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold">{days}</div>
              <div className="text-lg font-semibold">Days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold">{hours}</div>
              <div className="text-lg font-semibold">Hours</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold">{minutes}</div>
              <div className="text-lg font-semibold">Minutes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold">{seconds}</div>
              <div className="text-lg font-semibold">Seconds</div>
            </div>
          </div>
        </div>
      </BlurBackground>
    </div>
  );
};

export default Countdown;
