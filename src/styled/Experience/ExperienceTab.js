import styled from "styled-components"
import { ExternalLink } from "../Link"
import React from "react"

export const Container = styled.div`
  ${props => props.width && `width: ${props.width}px`};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vw;
  ${props => props.unmount && `
    animation: fadeout .5s ease';
  `}
  @media (max-width: 750px) {
    background-color: var(--white);
    width: 100%;
    height: auto;
  }
`

export const CourseTrainerContainer = styled.div`
  font-family: Raleway;
  color: var(--teal);
  padding: 2vh;
`

export const Trainer = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const LinkStyled = styled(ExternalLink)`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8em;
`

export const Course = ({ children, ...rest }) => (
  <LinkStyled small {...rest} >
    {children}
  </LinkStyled>
)

export const TechnologyTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-row-gap: clamp(1vh, 1.7vh, 2.5vh);
  grid-column-gap: 2rem;
  color: var(--teal);
  font-size: clamp(1rem, 3vw, 1.4rem);
  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(95px,1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(135px,1fr));
  }
`

export const TechnologyTableRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c5e1e4;
  @media (min-width: 750px) and (max-width: 1100px) {
   flex-direction: column; 
   border-bottom: none;
   & > *:first-child {
     margin: 0 1rem 2rem 1rem;
   }
   & > *:last-child {
     text-align: center;
   }
  }
`

export const TechnologyTableIcon = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  height: 40px;
  width: 40px;
  margin: 0 2rem 2rem 0;
  &::after {
    content: "";
    background-image: inherit;
    background-position: bottom;
    background-size: cover;
    width: inherit;
    height: 40%;
    position: absolute;
    bottom: -40%;
    transform: scaleY(-1);
    opacity: 0.2;
  }
  &::before {
    content: "";
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.22), white);
    width: inherit;
    height: 40%;
    position: absolute;
    bottom: -40%;
    z-index: 1;
  }
`

export const TechnologyTableText = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;

`

export const TechnologyHeader = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--teal);
  margin-bottom: 5vw;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const CV = styled.img`
  width: 50%;
  height: auto;
  left: 50%;
  transform: translate(-50%, 0);
  position: relative;
  transition: all .3s ease;
  &:hover {
    transform: translate(-52%, -1rem);
    box-shadow: 5px 5px 15px var(--teal);
  }
`

