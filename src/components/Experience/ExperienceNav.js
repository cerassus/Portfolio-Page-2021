import React from "react"
import { Image, Nav, Tab } from "../../styled/Experience/ExperienceNav"
import { experience_tabs } from "../../redux/const"
import Loader from "../../styled/Loader"
import { Container } from "../../styled/PageContainer"

export default function ExperienceNav(props) {
  return (
    <Container experience="true" {...props}>
      <Nav>
        {experience_tabs.map((tab, i) => (
          <Tab
            key={i + 999999}
            {...props}
            index={i}
            onClick={() => props.actions.setExperienceTab(i)}
          >
            {tab}
          </Tab>
        ))}
      </Nav>
      <Image {...props} src={props.loaded} />
      <Loader {...props} />
    </Container>
  )
}
