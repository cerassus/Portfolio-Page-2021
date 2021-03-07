import styled from "styled-components"

const Img = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.loaded});
  background-size: cover;
  background-position: center;
  @media (max-width: 750px) {
    height: calc(100vw * 36/24);  
  }
`

export default Img