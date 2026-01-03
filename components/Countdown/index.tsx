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
  const items = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <BlurBackground>
        <div className="w-full max-w-[600px] flex flex-col gap-4 justify-center items-center text-white text-center bg-black/60 px-8 py-10 rounded-lg">
          <img
            className="w-20 h-20"
            src="/serbian-cross.png"
            alt="Serbian Cross"
          />
          <div className="text-3xl font-medium">
            Countdown to Sunday's Service
          </div>
          <div className="text-lg font-normal">
            Our Sunday Divine Liturgy is at 10:00 AM. Everyone is welcome! Come
            and worship with us!
          </div>
          <div className="flex flex-row gap-4">
            {items.map((item) => {
              const { value, label } = item;
              return (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="text-6xl font-medium">{value}</div>
                  <div className="text-lg font-normal">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </BlurBackground>
    </div>
  );
};

export default Countdown;
