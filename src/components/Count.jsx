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

    // 2024년 11월 19일 이전인 경우 강제로 19일로 날짜 포맷
    const todayYear = Number(formattedDate.split('-')[0]);
    const todayMonth = Number(formattedDate.split('-')[1]);
    const todayDay = Number(formattedDate.split('-')[2]);

    const todayDate =
      todayYear === 2024 && todayMonth === 11 && todayDay <= 19
        ? '2024-11-19'
        : formattedDate;

    setToday(todayDate);
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
