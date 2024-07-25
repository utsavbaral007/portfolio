"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: "2",
    text: "Years of experience",
  },
  {
    num: "8",
    text: "Projects completed",
  },
  {
    num: "3",
    text: "Technologies mastered",
  },
  {
    num: "200",
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-6">
      {stats.map((item, index) => {
        return (
          <div className="flex items-center gap-4" key={index}>
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
