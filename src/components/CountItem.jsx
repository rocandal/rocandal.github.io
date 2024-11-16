import React, { useEffect, useRef, useState } from 'react';

const CountItem = ({ countData }) => {
  const [isShort, setIsShort] = useState(false);
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    if (imgRef.current) {
      const imgHeight = imgRef.current.clientHeight;
      // 이미지 높이가 1150px보다 작으면 'Short' 클래스 추가
      if (imgHeight < 1150) {
        setIsShort(true);
      }
    }
  };

  const getDecoImages = (index) => {
    if (index % 2 === 0) {
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
        deco3: 'img/D2/d2R-3.png',
      };
    }
  };

  const getTextImage = (index) => {
    if (index % 2 === 0) {
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
    <li className={isShort ? 'short' : ''}>
      <div className='deco1 deco'>
        <img src={decoImages.deco1} />
      </div>
      <div className='deco2 deco'>
        <img src={decoImages.deco2} />
      </div>
      <div className='img_sec'>
        <h3>{countData.title}</h3>
        <div className='deco3 deco'>
          <img src={decoImages.deco3} />
        </div>
        <div className='count_img'>
          <img
            ref={imgRef}
            src={countData.countImage}
            alt='카운트다운 이미지'
            onLoad={handleImageLoad}
          />
        </div>
        <div className='count_photo'>
          <img src={countData.countPhoto} />
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
