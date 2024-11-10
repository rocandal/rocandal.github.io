import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='inner'>
        <h1>
          <img
            src='./img/logo.png'
            alt='황금의 유산과 세기말 마인크래프트'
          />
        </h1>
        <div className='header_right'>
          <nav>카운트 다운 전체보기</nav>
          <div>음악 플레이어 자리</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
