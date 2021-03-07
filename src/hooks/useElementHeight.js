import { useState, useLayoutEffect } from "react"

export default function useElementHeight(id, didMount) {
  const [height, setHeight] = useState(false)
  const checkMobile = () => {
    if(window.innerWidth <= 750 && didMount) {
      const element = 0 || document.getElementById(id)
      element && setHeight(element.offsetHeight)
    }
  }  
  useLayoutEffect(() => {
    window.addEventListener("resize", checkMobile)
    checkMobile()
    return () => {
      window.removeEventListener("resize", checkMobile)
    };
  }, [id, didMount])
  return height
}
