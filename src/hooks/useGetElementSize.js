import { useLayoutEffect, useState } from "react"

export default function useElementSize(didMount, next_page, title, allowAnimation) {
  const [size, setSize] = useState(4000)
  useLayoutEffect(() => {
    const element = 0 || document.getElementById(title)
    function updateSize() {
      setSize(element.offsetWidth + element.offsetLeft)
    }
    if(element) {
      window.addEventListener("resize", updateSize)
      element.addEventListener("resize", updateSize) 
      updateSize()
      return () => {
        element.removeEventListener("resize", updateSize)
        window.removeEventListener("resize", updateSize)
      }
    } else {
      setSize(4000)
    }
  }, [didMount])
  useLayoutEffect(() => {
    if(next_page && title && (next_page !== title)) {
      allowAnimation(true)
      if(next_page === "/") {
        setSize(4000)
      } else {
        const futureElement = document.getElementById(next_page)
        setSize(futureElement.offsetWidth + futureElement.offsetLeft)
      }
    }
  }, [next_page])
  return size
}
