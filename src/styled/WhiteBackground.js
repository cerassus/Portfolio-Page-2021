import styled from "styled-components"
import React, { useState, useEffect } from "react"

const WhiteDiv = styled.div`
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    ${props =>  `width: calc(100vw - 8rem - max(25vw, 25rem) - ${props.link_element_size}px)`};
    ${props => props.animationAllowed && `transition: width ease .4s`};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-size: 12rem;
    font-weight: 700;

    ${props => props.next_page
        ? props.next_page === "Contact" 
            ? `
                animation: white_bg_to_black 2s ease;
                background-color: transparent;
             `
            : `
                background-color: #FFF;
              `
        : props.contact 
            ? `background-color: transparent;`
            : `background-color: #FFF;`
    };
    @media (max-width: 750px) {
        ${props => props.current === "Projects"
            ? ``
            : props.current === "Experience"
                ? ``
                : `width: 0;`
        };
    }
    @media (max-width: 500px) {
        width: 0;
    }

`

export default function WhiteBackground ({ ...props }) {
    const [didMount, setDidMount] = useState(false)
    const [text, setText] = useState(false)
    useEffect(() => {
       if(didMount) {
           const element = document.getElementById("white_bg")
           function textSetting() {
            element.offsetWidth > 120
            ? setText("{ }")
            : setText("")
           }
           textSetting()
           window.addEventListener("resize", textSetting)
           return () => window.removeEventListener("resize", textSetting)
       }
    }, [didMount])
    useEffect(() => {
        setDidMount(true)
    }, [])

    return <WhiteDiv id="white_bg" {...props}>{props.contact && text}</WhiteDiv>
}
