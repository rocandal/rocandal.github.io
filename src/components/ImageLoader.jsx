import '../style/loading.css';
import imageList from '../constants/images.json';
import { useState, useEffect } from 'react';

const ImageLoader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;

    const checkIfAllImagesLoaded = () => {
      loadedCount++;

      if (loadedCount === imageList.length) {
        setIsLoading(false);
        onLoadingComplete();
      }
    };

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkIfAllImagesLoaded;
      img.onerror = checkIfAllImagesLoaded;
    });
  }, [onLoadingComplete]);

  return isLoading ? <div className="loading_screen">로딩 중...</div> : null;
};

export default ImageLoader;
