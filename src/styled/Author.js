import styled from "styled-components"

export const AuthorContent = styled.div`
    position: absolute;
    bottom: 50%;
    transition: width ease .4s;
    left: 50%;
    transform: translate(-50%, 0%);
    display: inline-block;    
    ${props => (!props.isRoot && !props.menu)
        ? `
            top: 0;
            left: 0;
            bottom: auto;
            margin: 5rem 4rem 3rem;
            transform: translate(0,0);
            width: max(25vw, 25rem);
          `
        : `width: auto;
           @media (max-width: 500px) {
              bottom: 15%;
           };        
        `
    };
`

export const Name = styled.h1`
    font-family: "Roboto";
    font-size: clamp(5rem, 8vw, 7.2rem);
    transition: all ease .4s;
    font-weight: 900;
    color: var(--white);
    ${props => (!props.isRoot && !props.menu) && `
        font-size: 2rem;
    `}
`

export const Title = styled.h2`
    transition: all ease .4s;
    position: absolute;
    right: 0;
    bottom: -40%;
    font-family: "IBM Plex Mono";
    font-size: clamp(2rem, 2vw, 2.4rem);
    font-weight: 600;
    text-align: right;
    ${props => (!props.isRoot && !props.menu) && `
        font-size: 1.8rem;
        bottom: 0;
        right: 0;
        @media (max-width: 500px) {
              display: none;
           }; 
    `}
`
