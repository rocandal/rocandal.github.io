import React, { useEffect, useState } from 'react';
import CountItem from './CountItem';
import countItems from '../constants/countItems';
import formatDate from '../utils/formatDate';

const TotalCount = () => {
  const [releasedIllust, setReleasedIllust] = useState([]);

  const modifiedCountItems = [...countItems.slice(1).reverse(), countItems[0]];

  // 리스트 전체 보는 임시 코드
  // useEffect(() => {
  //   setReleasedIllust(modifiedCountItems);
  // }, []);

  useEffect(() => {
    const formattedDate = formatDate();

    const pastIllust = modifiedCountItems.filter(
      (item) => item.date <= formattedDate
    );

    setReleasedIllust(pastIllust);
  }, []);

  return (
    <main>
      <div className='inner'>
        <section className='count'>
          <h2 className='blind'>전체 카운트다운</h2>
          <ul className='count_list'>
            {releasedIllust.map((item, index) => (
              <CountItem
                key={index}
                countData={item}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default TotalCount;
