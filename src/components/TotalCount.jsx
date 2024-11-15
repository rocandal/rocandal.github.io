import React from 'react';
import CountItem from './CountItem';
import countItem from '../constants/countItem';

const TotalCount = () => {
  const modifiedCountItems = [...countItem.slice(1).reverse(), countItem[0]];

  return (
    <section className="count">
      <h2 className="blind">전체 카운트다운</h2>
      <ul className="count_list">
        {modifiedCountItems.map((item, index) => (
          <CountItem key={index} countData={item} />
        ))}
      </ul>
    </section>
  );
};

export default TotalCount;
