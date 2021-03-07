import React  from "react"
import { Container, CV } from "../../../styled/Experience/ExperienceTab"
import CVImage from "../../../../static/images/cv.png"

export default function Tab({ ...props }) {
  return (
      <Container id="resume_tab" {...props}>
        <a href="pdf/MichalWisniewskiCV.pdf" target="_blank" style={{margin: "3rem"}}>
          <CV src={CVImage} />
        </a>
      </Container>
  )
}
