import React from "react"
import Loader from "../../styled/Loader"
import { Container } from "../../styled/PageContainer"
import TabCourses from "./Tabs/TabCourses"
import TabTech from "./Tabs/TabTech"
import TabResume from "./Tabs/TabResume"

export default function ExperienceTab(props) {
  return (
  <Container experience { ...props }>
      {props.which_tab === 0 && <TabCourses { ...props }/>}
      {props.which_tab === 1 && <TabTech { ...props }/>}
      {props.which_tab === 2 && <TabResume { ...props }/>}
    <Loader black {...props} />
  </Container>
  )
}
