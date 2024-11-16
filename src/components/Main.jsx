import React, { useState } from 'react';
import Visual from './Visual';
import Count from './Count';
import countItems from '../constants/countItems';
import ImageLoader from './ImageLoader';

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  return (
    <main>
      <ImageLoader onLoadingComplete={handleLoadingComplete} />
      <div className="inner">
        <h2 className="blind">메인페이지 슬라이드</h2>
        <Visual isLoaded={isLoaded} />
        <Count countItems={countItems} />
      </div>
    </main>
  );
};

export default Main;
