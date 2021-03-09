import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { useStore } from "../redux/redux"

const WhiteDiv = styled.div`
    height: 100%;
    position: fixed; 
    right: 0;
    top: 0;
    display: inline-block;
    ${props =>  `width: calc(100vw - 8rem - max(25vw, 25rem) - ${props.link_element_size}px)`};
    ${props => props.animationAllowed && `transition: width ease .4s`};
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-size: 12rem;
    font-weight: 700;
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

const View = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
`
const BlackDiv = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    background: linear-gradient(133.15deg, #1f1f1f 8.25%, rgba(19, 17, 17, 0.82) 59.63%);
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
    return (
        <View>
            <BlackDiv />
            <WhiteDiv id="white_bg" {...props}>
                {props.contact && text}
            </WhiteDiv>
        </View>
    )
}
