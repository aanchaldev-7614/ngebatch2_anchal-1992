import React, { useEffect, useState } from "react";

export default function Times() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h3>Time now is{time.toLocaleTimeString()}</h3>
    </div>
  );
}
