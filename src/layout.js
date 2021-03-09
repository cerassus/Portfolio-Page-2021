import React, { Fragment, useEffect, useState } from "react"
import Navigation from "./components/Navigation"
import Head from "./head"
import WhiteBackground from "./styled/WhiteBackground"
import useGetElementSize from "./hooks/useGetElementSize"
import useGetBackgroundSizes from "./hooks/useGetBackgroundSizes"
import { useStore } from "./redux/redux"
import "./styles.css"

function Layout({ children, title, root }) {
  const [didMount, setDidMount] = useState(false)
  const [animation, allowAnimation] = useState(false)
  const [store, actions] = useStore()
  const size = useGetElementSize(didMount, store.next_page, title, allowAnimation)
  const [black_background_width, white_background_width] = useGetBackgroundSizes(didMount)
  useEffect(() => {
    setDidMount(true)
    actions.setTransitions(false)
  }, [])  
  useEffect(() => {
    black_background_width && 
    white_background_width &&
    actions.setDimensions([black_background_width, white_background_width])
  }, [black_background_width])
  useEffect(() => {
    actions.setAuthorImageBig(false)
    if(didMount) {
        const about_me_container = document.querySelector("#page_container > *:nth-child(2)")
        about_me_container && (
            about_me_container.offsetHeight < window.innerHeight 
            ? actions.setAuthorImageBig(true)
            : actions.setAuthorImageBig(false)
        )
    } 
    console.log(didMount)
}, [didMount])
  return (
    <Fragment>
      <Head title={title}/>
      <Navigation 
        root={root} 
        page={title !== "Home" ? title : false} 
      />
      <WhiteBackground
        link_element_size={size}
        animationAllowed={animation}
        contact={Boolean(title === "Contact")}
        changeColor={Boolean(store.next_page === "Contact")}
        next_page={store.next_page}
      />
        {children}
    </Fragment>
)}

export default Layout
