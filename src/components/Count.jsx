import React from 'react';
import CountItem from './CountItem';

const Count = ({ countItems }) => {
  return (
    <section className='count'>
      <h2 className='blind'>오늘의 카운트다운</h2>
      <ul className='count_list'>
        {countItems.map((item, index) => (
          <CountItem
            key={index}
            countData={item}
          />
        ))}
      </ul>
    </section>
  );
};

export default Count;
