import { useEffect, useState } from "react"

export const useScreenDimension = () => {
  const [dimension, setDimension] = useState('laptop');

  useEffect(() => {
    const getDimensions = () => {
      let dimension = 'laptop';
      if (window.innerWidth < 768) {
        dimension = 'mobile';
      }
      if (window.innerWidth > 767 && window.innerWidth < 1024) {
        dimension = 'tablet';
      }
      setDimension(dimension)
    }
    window.addEventListener('resize', getDimensions);
    return () => {
      window.removeEventListener('resize', getDimensions)
    }
  })

  return {
    isMobile: dimension === 'mobile',
    isTablet: dimension === 'tablet',
    isLaptop: dimension === 'laptop'
  };
}
