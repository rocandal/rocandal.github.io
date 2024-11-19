import '../style/loading.css';
import imageList from '../constants/images.json';
import { useState, useEffect } from 'react';
import useLoading from '../hooks/useLoading';

const ImageLoader = () => {
  const { isLoading, completeLoading } = useLoading();
  const [isFadingOut, setIsFadingOut] = useState(false); // 페이드아웃 여부

  useEffect(() => {
    let loadedCount = 0;

    const checkIfAllImagesLoaded = () => {
      loadedCount++;

      if (loadedCount === imageList.length) {
        setTimeout(() => {
          setIsFadingOut(true); // 페이드아웃 시작

          setTimeout(() => {
            completeLoading();
          }, 500); // 페이드아웃 시간
        }, 300); // 로딩 완료 후 유지 시간
      }
    };

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkIfAllImagesLoaded;
      img.onerror = checkIfAllImagesLoaded;
    });
  }, [isLoading, completeLoading]);

  return (
    <>
      {isLoading && (
        <div className={`loading_screen ${isFadingOut ? 'fade_out' : ''}`}>
          <img src="img/loading.gif" alt="로딩 이미지" />
          <div className="loading_text">출항 준비 중...</div>
          <div className="recommend_text">
            PC 환경에서의 사용(가로 1920px 이상)을 권장합니다.
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLoader;
