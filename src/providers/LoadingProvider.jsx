import React, { useEffect, useState } from 'react';
import LoadingContext from '../contexts/LoadingContext';

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const completeLoading = () => setIsLoading(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsLoaded(true), 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, isLoaded, completeLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
