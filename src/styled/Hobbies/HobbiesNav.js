import styled from "styled-components"
import React, { useState, useEffect } from "react"

export const BackgroundImage = styled.div`
    display: inline-block;
    position: relative;
    ${props => props.loaded ? `animation: fadein 1s ease;` : `opacity: 0`};
    background: url(${props => props.loaded && props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: ${props => props.width}px;
    height:  calc(100vh - 116px);  
    overflow:hidden;
    ${props => props.transitions && `transition: all .3s ease`};
    ${props => props.unmount && `
        animation: fadeout .5s ease;
    `}
    @media (max-width: 750px) {
        width: 100%;
    }
`

export const TabsContent = styled.div`
    display: flex;
    padding: 4vw 3vw;
    font-family: "Raleway";
    font-weight: 300;
    grid-area: content;
    font-size: 1.4rem;
    color: var(--teal);
    letter-spacing: 0.06em;
    min-height: 20rem;
`

export const Tab = styled.div`
    text-align: center;
    padding: 3vw 0;
    background-color: ${props => props.active ? `transparent` : `black`};
    color: ${props => props.active ? `black` : `rgba(255,255,255,0.9)`};
    text-transform: uppercase;
    font-family: "Roboto";
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    cursor: pointer;
`

export const TabsContainer = styled.div`
    background-color: rgba(255,255,255,0.9);
    width: 75%;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: grid;
    grid-template-columns: 33% 34% 33%; 
    grid-template-areas: 
        "tab tab tab"
        "content content content";
    @media (max-width: 500px) {
        width: 97%;
        & > * {
            padding: 10vw 6vw;
        }
        & > *:not(last-child) {
            font-size: clamp(1.4rem, 2vw, 2rem);
        }
    }
`

export const ImageContainer = styled.div`
    display: inline-block;
    animation: fadein .7s ease;
    ${props => props.transitions && `transition: all .5s ease`};
    ${props => props.unmount && `
        animation: fadeout .5s ease;
    `}
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: ${props => props.width / 2}px;
    height: ${props => props.width / 2}px;
    position: relative;
    top: calc((100vh - 116px) / 2);
    transform: translate(50%, -50%);
    @media (max-width: 850px) {
        display: none;
    }
`

export const Background = ({children, index, tabs, ...props}) => {
    return (
        <BackgroundImage {...props} src={tabs[index].img} >
            {children}
        </BackgroundImage>
    )
}