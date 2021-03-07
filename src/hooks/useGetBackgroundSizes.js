import { useLayoutEffect, useState } from "react"


export default function useGetBackgroundSizes(didMount) {
  const [black, setBlack] = useState(0)
  const [white, setWhite] = useState(0)
  useLayoutEffect(() => {
    const element = 0 || document.getElementById('white_bg')
    function updateBackgroundSizes() {
      setWhite(element.offsetWidth)
      setBlack(element.offsetLeft)
    }
    if(element) {
      window.addEventListener("resize", updateBackgroundSizes)
      element.addEventListener("resize", updateBackgroundSizes) 
      updateBackgroundSizes()
      return () => {
        element.removeEventListener("resize", updateBackgroundSizes)
        window.removeEventListener("resize", updateBackgroundSizes)
      }
    }
  }, [didMount])
  return [black, white]
}
