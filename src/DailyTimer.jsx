import React, { useState, useEffect } from "react";

export default function DailyTimer() {
  const [time, setTime] = useState(timeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(timeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  function timeLeft() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(24, 0, 0, 0);

    const timeDiff = end - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, min, sec };
  }
  return (
    <div className="text-center">
      <h2 className="font-thin tracking-widest">You have</h2>
      <h1 className="font-black text-9xl text-lime-400 tracking-widest">
        {time.hours}:{time.min < 10 ? `0${time.min}` : `${time.min}`}:
        {time.sec < 10 ? `0${time.sec}` : `${time.sec}`}
      </h1>
      <p className="w-[500px]">
        Presented in reverse chronological sequence, beginning at 24:00 and
        counting down to 00:00, the 24-Hour Reverse Clock app is a unique
        timekeeping tool. This programme provides a unique viewpoint by
        displaying time in reverse order, in contrast to conventional clocks,
        which show the time forward.
      </p>
    </div>
  );
}
