import styled from "styled-components"
import React from "react"
import { Link as GatsbyLink } from "gatsby"

const NewLink = styled(GatsbyLink)`
  text-decoration: none;
  position: relative;
  display: inline-block;
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.color && `color: ${props.color}!important`};
  @media (min-width: 750px) {
    &:hover {
      &::before {
        content: "";
        position: absolute;
        bottom: ${props => props.small ? `0` : `-1rem`};
        height: 2px;
        background-color: ${ props => props.color || `black`};
        animation: link_underline 0.3s ease;
        width: 100%;
      }
    }
  }
`

const ExLink = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.color && `color: ${props.color}!important`};
  @media (min-width: 750px) {
    &:hover {
      &::before {
        content: "";
        position: absolute;
        bottom: ${props => props.small ? `0` : `-1rem`};
        height: 2px;
        background-color: ${ props => props.color || `black`};
        animation: link_underline 0.3s ease;
        width: 100%;
      }
    }
  }
`

export const ExternalLink = ({ children, ...props }) => (
  <ExLink target="_blank" {...props}>{children}</ExLink>
)

export default NewLink
