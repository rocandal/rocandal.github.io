import React from 'react';
import CountItem from './CountItem';
import countItems from '../constants/countItems';

const TotalCount = () => {
  const modifiedCountItems = [...countItems.slice(1).reverse(), countItems[0]];

  return (
    <main>
      <div className="inner">
        <section className="count">
          <h2 className="blind">전체 카운트다운</h2>
          <ul className="count_list">
            {modifiedCountItems.map((item, index) => (
              <CountItem key={index} countData={item} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default TotalCount;
