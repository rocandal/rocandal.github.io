import './style.css';

function App() {
  return (
    <div classNameName='App'>
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
      <main>
        <div className='inner'>
          <h2 className='blind'>메인페이지 슬라이드</h2>
          <section className='main_slider'>
            <img
              src='img/slide1.jpg'
              alt='슬라이드1'
            />
            <div className='slide_logo'>
              <img
                src='img/logo_visual.png'
                alt='황금의 유산 로고'
              />
            </div>
          </section>
          <section className='count'>
            <h2 className='blind'>오늘의 카운트다운</h2>
            <ul className='count_list'>
              <li>
                <div className='deco2 deco'>
                  <img src='img/D1/d1R-3.png' />
                </div>
                <div className='deco3 deco'>
                  <img src='img/D1/d1R-2.png' />
                </div>
                <div className='img_sec'>
                  <h3>은가비@초코보 | ⓒ 59S259</h3>
                  <div className='deco1 deco'>
                    <img src='img/D1/d1R-4.png' />
                  </div>
                  <div className='count_img'>
                    <img
                      src='img/count/sample3.png'
                      alt='카운트다운 이미지 1일차'
                    />
                  </div>
                  <div className='count_photo'>
                    <img
                      src='img/count/sample2.png'
                      alt='카운트다운 사진 1일차'
                    />
                  </div>
                </div>
                <div className='text_sec'>
                  <img src='img/D1/d1R-1.png' />

                  <div className='count_text'>
                    <h4>[은가비]</h4>
                    <p>
                      빛의 계승자체 23pt 닉네임은 45pt 내용 내용 내용 내용 내용
                      내용 내용 내용 내용 내용 내용 내용 배고파
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className='deco2 deco'>
                  <img src='img/D2/d2L-6.png' />
                </div>
                <div className='deco3 deco'>
                  <img src='img/D2/d2L-4.png' />
                </div>
                <div className='img_sec'>
                  <h3>은가비@초코보 | ⓒ 59S259</h3>
                  <div className='deco1 deco'>
                    <img src='img/D2/d2R-3.png' />
                  </div>
                  <div className='count_img'>
                    <img
                      src='img/count/sample.jpg'
                      alt='카운트다운 이미지 1일차'
                    />
                  </div>
                  <div className='count_photo'>
                    <img
                      src='img/count/sample2.png'
                      alt='카운트다운 사진 1일차'
                    />
                  </div>
                </div>
                <div className='text_sec'>
                  <img src='img/D2/d2L-5.png' />

                  <div className='count_text'>
                    <h4>[은가비]</h4>
                    <p>
                      빛의 계승자체 23pt 닉네임은 45pt 내용 내용 내용 내용 내용
                      내용 내용 내용 내용 내용 내용 내용 배고파
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer>
        <div className='inner'>
          <p>해당 페이지는 비상업적 이용 으로 만들어 졌습니다.</p>
          <p>기획 : 은가비 | 제작 : 은가비 슈슈 하루 | 디자인 : 하루</p>
          <p>응원 | 오구 나마즈오&하마 헤르메스</p>
          <p>
            © SQUARE ENIX Published in Korea by Actoz Soft CO., LTD.
            <br />
            LOGO ILLUSTRATION: © YOSHITAKA AMANO
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
