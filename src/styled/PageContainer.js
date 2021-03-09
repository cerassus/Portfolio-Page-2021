import styled from "styled-components"
import React, { useEffect } from "react"
import { useStore } from "../redux/redux"

const StyledContainer = styled.div`
  display: flex;
  ${props => !props.contactPage && `justify-content: flex-end`};
  @media (max-width: 750px) {
      flex-direction: column;
      & > * {
        width: 100%;
      }
  }
  ${props => props.projects && `
    @media (max-width: 1100px) {
        flex-direction: column;
        & > * {
          width: auto!important;
          height: auto!important;
        }
    }
  `}

`

// MainContainer === Whole Page Container

const MainContainer = ({ children, ...rest }) => {
  const [store, actions] = useStore()
  useEffect(() => {
    setTimeout(() => {
      actions.setTransitions(true)
    }, 1000)
  }, [])
  return (
    <StyledContainer id="page_container" {...rest} >
      {React.cloneElement(children[0], { 
        width: store.dimensions[0],
        unmount: store.user_is_changing_page,
        transitions: store.allow_transitions,
        fullHeight: store.fullHeight,
      })}
      {React.cloneElement(children[1], { 
        width: store.dimensions[1],
        left: store.dimensions[0],
        unmount: store.user_is_changing_page,
        transitions: store.allow_transitions,
      })}
    </StyledContainer>
  )
}

// Container === Left or Right Sub-Page Container

export const Container = styled.div`
    /* height: ${props => (props.about || props.contact) ? `calc(100vh - 116px)` : `auto`}; */

    position: relative;
    ${props => props.next_page
        ? props.next_page === "Contact" 
            ? `
                animation: black_to_white 2s ease;
                background-color: #FFF;
             `
            : `
                background-color: #transparent;
              `
        : props.contact 
            ? `background-color: #FFF;`
            : `background-color: transparent;`
    };
    & > * {
      ${props => props.loaded ? `animation: fadein 1s ease;` : `opacity: 0`}; 
      ${props => props.transitions && `transition: all .3s ease`};
    }
    ${props => props.experience && `
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 80rem;
      `};
    @media (min-width: 751px) {
      display: ${props => props.experience ? `inline-flex` : `inline-block`};
      width: ${props => props.width ? `${props.width}px` : `100%`};
      ${props => props.contact && `padding: 8vh`}; 
      & > * {
        ${props => props.unmount && `animation: fadeout .5s ease;`};
      }
    }
    @media (max-width: 750px) {
    transition: opacity ease .4s;
      ${props => props.about && `order: 2`};
      ${props => (props.contact && props.unmount) && `opacity: 0;`};
      & > * {
        ${props => props.unmount && `opacity: 0;`};
      }
      ${props => props.contact && `padding: 3vh`}; 
      ${props => props.experience && `
          width: 100%;
          justify-content: flex-end;
      `};
    }
`

export default MainContainer