import { useEffect, useState } from "react";

const statsData = [
  { label: "Projects Completed", value: 120 },
  { label: "Satisfied Clients", value: 85 },
  { label: "Countries Served", value: 5 },
];

const Stats = () => {
  const [count, setCount] = useState(Array(statsData.length).fill(0));

  useEffect(() => {
    statsData.forEach((stat, idx) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount((prev) => {
          const newCount = [...prev];
          newCount[idx] = Math.floor(start);
          return newCount;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 flex flex-col mt-10 md:flex-row justify-around items-center bg-gray-50 rounded-2xl mb-12 shadow-md">
      {statsData.map((stat, idx) => (
        <div key={stat.label} className="text-center mb-8 md:mb-0">
          <div className="text-4xl md:text-5xl font-extrabold text-lime-500">
            {count[idx]}
          </div>
          <div className="text-gray-700 text-lg md:text-xl mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
