import React from 'react';
import Visual from './Visual';
import Count from './Count';
import countItems from '../constants/countItems';

const Main = () => {
  return (
    <main>
      <div className="inner">
        <h2 className="blind">메인페이지 슬라이드</h2>
        <Visual />
        <Count countItems={countItems} />
      </div>
    </main>
  );
};

export default Main;
