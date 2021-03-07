import React, { useState, useEffect } from "react"
import {
  Container,
  TechnologyTable,
  TechnologyTableRow,
  TechnologyTableIcon,
  TechnologyTableText,
} from "../../../styled/Experience/ExperienceTab"
import { technologies } from "../../../redux/const"

export default function Tab({ ...rest }) {
  return (
    <Container id="tech_tab" {...rest}>
      <TechnologyTable>
        {technologies.map((tech, i) => (
          <TechnologyTableRow key={i+87889}>
            <TechnologyTableIcon src={tech.icon} />
            <TechnologyTableText>{tech.technology}</TechnologyTableText>
          </TechnologyTableRow>
        ))}
      </TechnologyTable>
    </Container>
  )
}
