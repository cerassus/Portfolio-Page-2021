import styled from "styled-components"
import React from "react"

export const FormContainer = styled.div`
    width: min(70rem, 100%);
    position: relative;
    color: var(--teal);
    display: inline-block;
    box-shadow: 0 0 3px black;
    & > *:nth-child(3) {
        transform: translate(50%, 50%);
        left: 50%;
    }
    @media (min-width: 751px) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const FormContainerHeader = styled.div`
    background-color: var(--black);
    padding: 2vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const SocialIcon = styled.img`
    height: 3rem;
    width: auto;
`

export const FormContainerContent = styled.form`
    background-color: var(--white);
    padding: 4vw 6vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity .3s ease;
    opacity: ${props => props.loading ? `0` : `1`};
    font-family: "IBM Plex Mono";
    & > * {
        margin: 1rem 0;
    }
    ${props => props.response && `opacity: 0;`};
`

export const FormControl = styled.div`
    font-family: "IBM Plex Mono";
    width: 100%;
    &, & > * {
        margin: 1rem 0;
    }
`

export const Label = styled.label`
    font-size: 1.4rem;
`

export const Input = styled.input`
    font-size: 1.4rem;
    font-family: "IBM Plex Mono";
    border: none;
    background-color: white;
    box-shadow: 2px 2px 0 black;
    display: block;
    width: 100%;
    &:active, &:focus {
        border: 2px solid black;
        outline: none;
    }
    padding: 5px 10px;
    border: 2px solid transparent;

`

export const TextArea = styled.textarea`
    font-size: 1.4rem;
    font-family: "IBM Plex Mono";
    border: none;
    background-color: white;
    box-shadow: 2px 2px 0 black;
    height: 18rem;
    display: block;
    resize: none;
    width: 100%;
    border: 2px solid transparent;
    &:active, &:focus {
        border: 2px solid black;
        outline: none;
    }
    padding: 5px 10px;

`

export const HelperText = styled.div`
    color: red;
    font-weight: 500;
    align-self: flex-start;
    transition: opacity .3s ease;
    opacity: ${props => props.helper ? `1` : `0`};
    & span {
        color: transparent;
    }
`

export const SendButton = styled.input`
    background-color: var(--black);
    padding: 1rem 2rem;
    color: var(--white);
    width: 33%;
    text-align: center;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: var(--white);
        color: var(--black);
        box-shadow: 0 0 2px black;
    }
`

const ResponseContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.isVisible
        ? `opacity: 1; z-index: 10;`
        : `opacity: 0; z-index: -10;`
    };
`

const ResponseIcon = styled.div`
    font-size: 4rem;
    border-radius: 100%;
    border: 3px solid black;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
`

const ResponseMessage = styled.div`
    font-size: 1.6rem;
    margin: 10% 0;
`

const CloseResponseButton = styled.div`
    background-color: var(--black);
    padding: 1rem 2rem;
    color: var(--white);
    width: 33%;
    text-align: center;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: var(--white);
        color: var(--black);
        box-shadow: 0 0 2px black;
    }
`

export const Response = ({ loading, response, close }) => {
    return (
        <ResponseContainer isVisible={response}>
            {response && response.includes("sent") ? <ResponseIcon>&#10003;</ResponseIcon> : <ResponseIcon>&#10005;</ResponseIcon>}
            <ResponseMessage>{response && response}</ResponseMessage>
            <CloseResponseButton onClick={close}>Close</CloseResponseButton>
        </ResponseContainer>
    )
}