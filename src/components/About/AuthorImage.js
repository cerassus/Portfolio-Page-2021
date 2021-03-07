import React from "react"
import Img from "../../styled/About/AuthorImage"
import Loader from "../../styled/Loader"
import { Container } from "../../styled/PageContainer"

export default function AuthorImage( { ...props }) {
  return (
    <Container about="true" {...props}>
        <Img {...props} />
        <Loader {...props} />
    </Container>
  )
}