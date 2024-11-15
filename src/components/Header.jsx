import React from 'react';
import { Link } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

const Header = () => {
  return (
    <header>
      <div className='inner inner_header'>
        <h1>
          <img
            src='./img/logo.png'
            alt='황금의 유산과 세기말 마인크래프트'
          />
        </h1>
        <div className='header_right'>
          <nav>
            <Link to='/total'>카운트 다운 전체보기</Link>
          </nav>
          <MusicPlayer />
        </div>
      </div>
    </header>
  );
};

export default Header;
