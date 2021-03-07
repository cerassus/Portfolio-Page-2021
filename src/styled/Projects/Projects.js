import styled from "styled-components"

export const FrontTitle = styled.div`
    font-family: "IBM Plex mono";
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 3rem;
    color: ${props => props.back ? `var(--black)` : `var(--white)`};
    text-align: ${props => props.back ? `left` : `right`};
    @media (max-width: 1100px) {
        color: var(--white);
    }
`

export const FrontProject = styled.div`
    width: ${props => props.back ? `min(45rem, 90%)` : `min(70rem, 92%)`}; 
    float: ${props => props.back ? `left` : `right`}; 
    height: 22vh;
    position: relative;
    background: var(--white);
    @media (min-width: 750px) {
        filter: grayscale(1);
        &:hover {
            filter: grayscale(0);
            padding: 3% 2% 2% 5%;
            ${props => props.back 
                ? `box-shadow: 5px 5px 15px var(--teal)`
                : `box-shadow: 5px 5px 15px rgba(57, 146, 157, 1)`
            };
        }
    };
    color: var(--teal);
    display: grid;
    padding: 3% 0 2% 7%;
    font-family: "Raleway";
    grid-template-areas: 
        "title tech"
        "desc tech";
    margin: 1rem 3rem;
    box-shadow: 0 0 3px var(--teal);
    ${props => !props.isHidden && `cursor: pointer`};
    & > * {
        opacity: ${props => props.isHidden ? `0` : `1`};
        transition: all .2s ease;
    }
    @media (max-width: 1100px) {
        width: 92%;
        float: left;
    }
    @media (max-width: 500px) {
        grid-template-areas: 
        "title"
        "desc"
        "tech";
        height: auto;
        padding: 3% 6%;
        margin: 1rem;
        & > *:nth-child(1) {
            justify-content: center;
        }
        & > *:nth-child(2) {
            padding: 4vw 0;
        }
        & > *:nth-child(3) {
            padding: 4vw 0;
            border-left: none;
            border-top: 2px solid var(--teal);
        }
    }
`
export const FrontProjectDetails = styled.div`
    position: absolute;
    top: 0;
    ${props => !props.back
        ? props.isVisible ? `right: 0` : `right: 150%`
        : props.isVisible ? `left: 0` : `left: 150%`
    };
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.isVisible ? `1` : `0`};
    z-index: ${props => props.isVisible ? `1` : `-1`};
    & > * {
        border-bottom: 2px solid transparent;
        border-top: 2px solid transparent;
    }
`

export const Button = styled.a`
    &, &:link, &:visited, &:active {
        background-color: var(--teal);
        color: var(--white);
        font-family: "IBM Plex Mono";
        font-weight: 600;
        text-transform: uppercase;
        padding: 1rem;
        transition: all .3s ease;
        margin: 1rem;
    }
    &:hover {
        color: var(--teal);
        background-color: var(--white);
        border-bottom: 2px solid var(--teal);
        border-top: 2px solid var(--teal);
    }
`
export const CloseDetails = styled.div`
    position: absolute;
    top: 0;
    right: 2vw;
    color: var(--teal);
    font-size: 7rem;
    width: 7rem;
    height: 7rem;
    text-align: center;
    line-height: 7rem;
    font-weight: 600;
    transition: all .2s ease;
    cursor: pointer;
    transform: rotateZ(45deg);
    transform-origin: center;
    &:hover {
        transform: rotateZ(-45deg);
    }
`

export const FrontProjectTitle = styled.div`
    display: inline-flex;
    align-items: center;
    grid-area: title;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.7rem;
    letter-spacing: 0.02em;
    ${props => props.git && `
        border-bottom: 2px solid var(--teal);
        &::before {
            content: "";
            background-image: url("https://cerassus.eu/icons/social/git.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 40px;
            min-width: 4rem;
            height: 40px;
            filter: invert(1);
            position: relative;
            top: 0;
            left: 0;
            margin: 0.5rem 1rem 1rem 0;
        }
    `};
    
`

export const FrontProjectTech = styled.div`
    grid-area: tech;
    border-left: 2px solid var(--teal);
    padding: 0 2vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const FrontProjectTechIcons = styled.div`
    display: flex;
    max-width: 15rem;
    justify-content: center;
    align-items: center;
    ${props => props.back 
        ? `flex-direction: column; width: 15rem;`
        : `flex-wrap: wrap`
    };
    @media (max-width: 500px) {
        max-width: 95%;
        margin-top: 1rem;
    }
`

export const Icon = styled.div`
    ${props => !props.back 
        ? `
            width: 4rem;
            height: 4rem;
            background-image: url(${props.src});
            background-size: contain;
            background-repeat: no-repeat;
            margin: 0.5rem 1rem;
          `
        : `
            font-size: 1.6rem;
          `
    };
`

export const FrontProjectDesc = styled.div`
    grid-area: desc;
    text-align: justify;
    padding: 2vh 3vh 2vh 0;
    overflow: hidden;
`