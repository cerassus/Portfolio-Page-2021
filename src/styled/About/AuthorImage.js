import styled from "styled-components"


const Img = styled.div`
  position: relative;
  position: absolute;
  width: 100%;
  height: 100%;  
  background-image: url(${props => props.loaded});
  background-size: cover;
  background-position: top;
  @media (max-width: 750px) {
    height: calc(100vw * 3/2);  
  }
`

export default Img;

// export default function ImgWithProps(props) {
//   const [store, actions] = useStore()
//   return <Img {...props} big_image={store.big_author_image} />
// }