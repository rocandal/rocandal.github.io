import '../style/loading.css';
import { useState, useEffect } from 'react';

const ImageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/images.json')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        let loadedCount = 0;

        const checkIfAllImagesLoaded = () => {
          loadedCount++;

          if (loadedCount === data.length) setIsLoading(false);
        };

        data.forEach((src) => {
          const img = new Image();
          img.src = src;

          if (img.complete) {
            checkIfAllImagesLoaded();
          } else {
            img.onload = checkIfAllImagesLoaded;
            img.onerror = checkIfAllImagesLoaded;
          }
        });
      });
  }, []);

  return (
    <div>
      {isLoading ? <div className="loading_screen">로딩 중...</div> : null}
    </div>
  );
};

export default ImageLoader;
