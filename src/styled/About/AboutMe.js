import styled from "styled-components"

export const Everyday = styled.div`
    background-color: #FFF;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    margin: 2vw;
    padding: 4vw 5vw;
    width: 80%;
    color: #194146;
    font-family: "Raleway";
    display: grid;
    ${props => props.reverse 
        ? `grid-template-areas:
        "icon title"
        "icon content";
        `
        : `grid-template-areas:
        "title icon"
        "content icon";
        `
    };
    justify-items: center;
    align-items: center;
    grid-gap: 3vw;
    @media (max-width: 1200px) {
        grid-gap: 3vw 0;
    } 
    @media (max-width: 750px) {
        width: 95%;
        grid-gap: 2vh 0;
        padding: 4vh 3vh;
        ${props => props.reverse 
        ? `grid-template-areas:
            "icon title title "
            "content content content";
        `
        : `grid-template-areas:
            "title title icon"
            "content content content";
        `};
    } 
`

export const Icon = styled.img`
    grid-area: icon;
    height: 15rem;
    width: 15rem;
    @media (min-width: 751px) and (max-width: 1200px) {
        display: none;
    } 
    @media (max-width: 750px) {
        justify-self: ${props => props.reverse ? `flex-start` : `flex-end`};
        height: 10rem;
        width: 10rem;
    }
`

export const Title = styled.div`
    grid-area: title;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.1em;
`

export const Content = styled.div`
    grid-area: content;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: justify;
    letter-spacing: 0.03em;
`