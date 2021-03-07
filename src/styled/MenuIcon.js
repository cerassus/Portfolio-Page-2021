import styled from "styled-components"
import React from "react"

const Icon = styled.label`
    ${props => props.isRoot && `display: none;`}
    width: 0;
    height: 0;
    overflow: hidden;
    @media (max-width: 750px) {
        top: 4rem;
        right: 3vh;
        width: 6rem;
        height: 6rem;
        z-index: 1000;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
        transition: all .2s;
        position: absolute;
        &::before, &::after, & span {        
            content: "";
            position: absolute;
            width: 50%;
            height: 2px;
            background-color: white;
            display: inline-block;
            border-radius: 25rem;
            left: 25%;
        }
        &::before {
            top: 35%;
            transition: all 0.2s;
            ${props => props.menu && `
                top: 50%;
                transform: rotate(135deg);
            `}
        }
        & span {
            top: 50%;
            ${props => props.menu && `
                background-color: transparent;
            `}
        }
        &::after {
            top: 66%;
            transition: all 0.2s;
            ${props => props.menu && `
                top: 50%;
                transform: rotate(-135deg);
            `}
        }
    };
`

export default function MenuIcon({ ...props }) {
    return (
        <Icon htmlFor="menu_checkbox" {...props} >
            <span></span>
        </Icon>
    )
}
