import React from 'react';

const CountItem = ({ countData }) => {
  const getDecoImages = (index) => {
    if (index % 2 === 1) {
      // 홀수일 때
      return {
        deco1: 'img/D1/d1R-3.png',
        deco2: 'img/D1/d1R-2.png',
        deco3: 'img/D1/d1R-4.png',
      };
    } else {
      // 짝수일 때
      return {
        deco1: 'img/D2/d2L-6.png',
        deco2: 'img/D2/d2L-4.png',
        deco3: 'img/D2/d2L-3.png',
      };
    }
  };

  const getTextImage = (index) => {
    if (index % 2 === 1) {
      // 홀수일 때
      return 'img/D1/d1R-1.png';
    } else {
      // 짝수일 때
      return 'img/D2/d2L-5.png';
    }
  };

  const decoImages = getDecoImages(countData.index);
  const textImage = getTextImage(countData.index);

  return (
    <li>
      <div className='deco1 deco'>
        <img
          src={decoImages.deco1}
          alt='deco1'
        />
      </div>
      <div className='deco2 deco'>
        <img
          src={decoImages.deco2}
          alt='deco2'
        />
      </div>
      <div className='img_sec'>
        <h3>{countData.title}</h3>
        <div className='deco3 deco'>
          <img
            src={decoImages.deco3}
            alt='deco3'
          />
        </div>
        <div className='count_img'>
          <img
            src={countData.countImage}
            alt='카운트다운 이미지'
          />
        </div>
        <div className='count_photo'>
          <img
            src={countData.countPhoto}
            alt='카운트다운 사진'
          />
        </div>
      </div>
      <div className='text_sec'>
        <img src={textImage} />
        <div className='count_text'>
          <h4>{countData.name}</h4>
          <p>{countData.description}</p>
        </div>
      </div>
    </li>
  );
};

export default CountItem;
