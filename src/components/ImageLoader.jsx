import '../style/loading.css';
import imageList from '../constants/images.json';
import { useState, useEffect } from 'react';

const ImageLoader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 여부
  const [isFadingOut, setIsFadingOut] = useState(false); // 페이드아웃 여부

  useEffect(() => {
    let loadedCount = 0;

    const checkIfAllImagesLoaded = () => {
      loadedCount++;

      if (loadedCount === imageList.length) {
        setTimeout(() => {
          setIsFadingOut(true); // 페이드아웃 시작

          setTimeout(() => {
            setIsLoading(false); // 로딩 화면 제거
            onLoadingComplete(); // 부모 컴포넌트에 알림
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
  }, [onLoadingComplete]);

  return isLoading ? (
    <div className={`loading_screen ${isFadingOut ? 'fade_out' : ''}`}>
      로딩 중...
    </div>
  ) : null;
};

export default ImageLoader;
