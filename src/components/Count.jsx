import React, { useEffect, useState } from 'react';
import CountItem from './CountItem';

const Count = ({ countItems }) => {
  const [today, setToday] = useState(null);

  const modifiedCountItems = [...countItems.slice(1).reverse(), countItems[0]];
  const todayCountItems = modifiedCountItems.filter(
    (item) => item.date === today
  );

  useEffect(() => {
    const now = new Date();
    const kstOffset = 9 * 60; // UTC+9

    now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + kstOffset);

    const formattedDate = now.toISOString().split('T')[0]; // 'YYYY-MM-DD'

    // 오늘 날짜가 2024년 11월 19일 이전인 경우
    const todayDate =
      formattedDate <= '2024-11-19' ? '2024-11-19' : formattedDate;

    setToday(todayDate);
  }, []);

  return (
    <main>
      <section className="count inner">
        <h2 className="blind">오늘의 카운트다운</h2>
        <ul className="count_list">
          {todayCountItems.map((item, index) => (
            <CountItem key={index} countData={item} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Count;
