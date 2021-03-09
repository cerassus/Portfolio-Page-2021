import styled from "styled-components"


const Img = styled.div`
  position: relative;
  position: absolute;
  width: 100%;
  height: 85rem;
  background-image: url(${props => props.loaded});
  background-size: cover;
  background-position: center -8rem;
  box-shadow: -20px -25px 25px black;
  @media (max-width: 750px) {
    height: calc(100vw * 3/2);  
  }
`

export default Img;

