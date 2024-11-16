import React, { useEffect, useState } from 'react';
import CountItem from './CountItem';
import formatDate from '../utils/formatDate';

const Count = ({ countItems }) => {
  const [today, setToday] = useState(null);

  const modifiedCountItems = [...countItems.slice(1).reverse(), countItems[0]];
  const todayCountItems = modifiedCountItems.filter(
    (item) => item.date === today
  );

  useEffect(() => {
    setToday(formatDate());
  }, []);

  return (
    <section className="count">
      <h2 className="blind">오늘의 카운트다운</h2>
      <ul className="count_list">
        {todayCountItems.map((item, index) => (
          <CountItem key={index} countData={item} />
        ))}
      </ul>
    </section>
  );
};

export default Count;
