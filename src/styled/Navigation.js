import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { links } from "../redux/const"
import Link from "./Link"

export const Navi = styled.div`
    ${props => (!props.isRoot && !props.menu) && `
    position: relative;
    height: 116px;
    `}
`

export const NavLinkContainer = styled.ul`
    display: inline-block;
    font-size: clamp(1.6rem, 2vw, 2.2rem);
    font-weight: 600;
    line-height: 90%;
    letter-spacing: 0.01em;
    list-style: none;
    position: relative;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    ${props => !props.isRoot && `
        left: calc(8rem + max(25vw, 25rem));
        font-size: 1.8rem;
        transform: translate(0,0);
    `}
    @media (max-width: 750px) {
        position: absolute;
        left: 50%;
        bottom: ${props => props.isRoot ? `66%` : `50%`};
        transition: all ease .2s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, 35%);
        ${props => (props.menu || props.isRoot) 
            ? `        
                width: 100%;
                & > * {
                    display: block;
                    width: 100%;
                }`
            : `
                width: 1px;
                & li {
                    color: transparent;
                    background-color: transparent;
                }
            `
        };
    }
`

const NavLinkStyled = styled.li`
    ${props => props.isRoot 
        ? `padding: 7rem 2.5vw 3rem;`
        : `margin: 7rem 2.5vw 3rem;`
    };
    display: inline-block;
    color: #FFF; 
    position: relative;
    ${props => props.invertColors && `color: #000`};
    @media (min-width: 750px) {
        &:hover {
            ${props => props.isRoot 
                ? `
                    background-color: var(--white);
                    color: var(--black);
                    `
                : `
                    &::before {
                        content: "";
                        position: absolute;
                        bottom: -1rem;
                        height: 2px;
                        background-color: ${props.invertColors ? `#000` : `#FFF`};
                        animation: link_underline 0.3s ease;
                        width: 100%;
                    }
                `
            }
        };
    }
    @media (max-width: 1000px) {
        ${props => props.isRoot 
          ? `padding: 7rem 1vw 3rem;`
          : `margin: 7rem 1vw 3rem;`
        };
    }
    @media (max-width: 750px) {
        padding: 3vh;
        margin: 0;
        font-size: 3rem;
        width: 100%;
        text-align: center;
        ${props => props.invertColors && `color: #FFF;`
        };
        ${props => props.current &&
            `color: #000; background-color: #FFF;`
        };
    }
`

export const NavLink = ({ index, next_page, isRoot, current, menu, children }) => {
    const [pageIndex, setPageIndex] = useState(-1)
    useEffect(() => {
        setPageIndex(links.indexOf(next_page))
    }, [next_page])
    return (
        <NavLinkStyled 
            menu={menu} 
            isRoot={isRoot}
            current={current} 
            invertColors={Boolean(pageIndex >= 0 && index > pageIndex)}
        >
            {children}
        </NavLinkStyled>
    )
}
