import styled from "styled-components"


export const Image = styled.img`
    width: ${props => props.width ? `${props.width / 2.7}px` : `60%` };
    height: auto;
    margin: 2rem 0;
    @media (max-width: 750px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
    }
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
        order: 1;
        display: grid;
        grid-template-columns: 30% 40% 30%;
        width: 100%;
        background-color: var(--white);
    }
`

export const Tab = styled.div`
    background-color: var(--white);
    color: var(--teal);
    padding: 4vh;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: "Raleway";
    font-size: clamp(1rem, 3vw, 1.8rem);
    font-weight: 700;
    margin: 0.5rem; 
    letter-spacing: 0.1em;
    ${props => props.which_tab === props.index && `
        background-color: transparent;
        color: var(--white);
        @media (max-width: 750px) {
            background-color: var(--teal);
        }
    `}
    &:hover {
        ${props => props.which_tab !== props.index && `
            background-color: var(--teal);
            color: var(--white);
            cursor: pointer;
        `}
    }
    @media (max-width: 750px) {
       width: auto;
       padding: 5vw 3vw;
       margin: 0; 
    }
`