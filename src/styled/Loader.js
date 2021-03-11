import styled from "styled-components"
import React from "react"

const Spinner = styled.div`
    position: relative;
    color: #ffffff;
    text-indent: -9999em;
    font-size: 1rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    &, &::before, &::after {
        background-color: ${props => props.black ? `#000` : `#fff`};
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: ${props => props.black ? `load2` : `load1`} 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
        @media (max-width: 500px) {
            background-color: #fff;
            animation: load1 1s infinite ease-in-out;
        }
    }
    &::before, &::after {
        position: absolute;
        top: 0;
        content: '';
    }
    &::before {
        left: -1.5em;
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    &::after {
        left: 1.5em;
        -webkit-animation-delay: 0.16s;
        animation-delay: 0.16s;
    }
`

const Container = styled.div`
    justify-content: center;
    align-items: center;
    display: inline-flex;
    transition: opacity .3s ease;
    &, & > * {
        opacity: ${props => props.loaded ? `0!important;` : `1!important;`};
        z-index: ${props => props.loaded ? `-10000` : `auto`};
    }
    position: absolute;
    top: 45%;
    left: 50%;
        /* transform: translate(50%, 0); */
    /* left: ${props => props.width/2}px; */
`

export default function Loader({ ...props }) {
    return (
        <Container {...props} >
            <Spinner {...props} />
        </Container>
    )
}
