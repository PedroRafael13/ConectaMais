// src/hooks/useLoading.js
import { useState } from 'react';

export const useLoading = (defaultDuration = 3000) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = (duration = defaultDuration) => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    startLoading,
    stopLoading
  };
};