import React, { useState, useEffect } from "react";

function getDate() {
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  return today.toLocaleDateString("en-US", options);
}

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  useEffect(() => {
    const calculateTimeToMidnight = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      return midnight - now;
    };

    const updateDate = () => {
      setCurrentDate(getDate());
      const timeToMidnight = calculateTimeToMidnight();
      setTimeout(updateDate, timeToMidnight);
    };

    const timeToMidnight = calculateTimeToMidnight();
    const timerId = setTimeout(updateDate, timeToMidnight);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      <p>Updated: {currentDate}</p>
    </div>
  );
};

export default DateComponent;
