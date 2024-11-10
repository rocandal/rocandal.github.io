import React, { useEffect, useState } from 'react';

const Visual = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`visual ${isActive ? 'on' : ''}`}>
      <img
        src='img/background.png'
        alt='배경'
      />
      <div className='visual_logo'>
        <img
          src='img/visual.png'
          alt='로제라, 황금빛의 서막'
        />
      </div>
    </section>
  );
};

export default Visual;
