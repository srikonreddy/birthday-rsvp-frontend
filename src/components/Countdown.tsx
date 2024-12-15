import  { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const eventDate = new Date('2025-01-10T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % 1000) / 1000);

      setTimeLeft(`${days}d ${hours}h`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p id="countdown">{timeLeft} Days until the weekend away</p>;
};

export default Countdown;
