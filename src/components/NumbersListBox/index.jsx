import React, { useEffect, useState } from "react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const currentCount = Math.floor(progressRatio * end);
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const NumbersListBox = () => {
  // Helper to decide if animate or show suffix directly
  const renderNumber = (num, suffix) => {
    if (num >= 100000) {
      // For 1 lac or more, show suffix text directly
      return <>{suffix}</>;
    }
    // Else animate counting
    return <CountUp end={num} />;
  };

  return (
    <div className="numbers__list--box">
      <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-2">
        <div className="col numbers__list--unit">
          <span className="icon icon-years"></span>
          <h3>
            {renderNumber(2500, "2500")}+
          </h3>
          <h4>Personalized Influencer Campaigns Executed</h4>
        </div>
        <div className="col numbers__list--unit bar">
          <span className="icon icon-team"></span>
          <h3>
            {renderNumber(100000, "1 lac")}+
          </h3>
          <h4>Social Media Influencers Network</h4>
        </div>
        <div className="col numbers__list--unit">
          <span className="icon icon-partner"></span>
          <h3>
            {renderNumber(600, "600")}+
          </h3>
          <h4>Helped Brands</h4>
        </div>
        <div className="col numbers__list--unit barone">
          <span className="icon icon-campaign"></span>
          <h3>
            {renderNumber(10000000000, "10 billion")}+
          </h3>
          <h4>People Reached</h4>
        </div>
      </div>
    </div>
  );
};

export default NumbersListBox;
