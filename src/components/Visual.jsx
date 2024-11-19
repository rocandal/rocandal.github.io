import React, { useEffect, useState } from 'react';
import useLoading from '../hooks/useLoading';

const Visual = () => {
  const { isLoaded } = useLoading();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => {
        setIsActive(true);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  return (
    <section className={`visual ${isActive ? 'on' : ''}`}>
      <img src="img/background.png" alt="배경" />
      <div className="visual_logo">
        <img src="img/visual.png" alt="로제라, 황금빛의 서막" />
      </div>
    </section>
  );
};

export default Visual;
