import { useEffect, useState } from 'react';

export default function useLoadingImage(src, didMount) {
  const [imageLoaded, setImageLoaded] = useState(0)
  useEffect(() => {
      const array = Array.isArray(src) ? src : [src]
      for(let i=0; i<array.length; i++) {
        const img = new Image()
        img.src = array[i]
        img.onload = () => {
          if(i === array.length - 1) {
            setImageLoaded(array[i])
          }
        }
      }
  }, [src, didMount])
  return imageLoaded
}
