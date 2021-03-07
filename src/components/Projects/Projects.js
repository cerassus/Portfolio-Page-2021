import React, { useState, Fragment } from "react"
import { Container } from "../../styled/PageContainer"
import {
  FrontTitle,
  FrontProject,
  FrontProjectTech,
  FrontProjectTitle,
  FrontProjectDesc,
  FrontProjectTechIcons,
  Icon,
  Button,
  CloseDetails,
  FrontProjectDetails,
} from "../../styled/Projects/Projects"
import Loader from "../../styled/Loader"

const Projects = props => {
  const [index, setIndex] = useState("none")
  const handleClick = (event, index) => {
    event.stopPropagation()
    event.currentTarget.id ? setIndex(index) : setIndex("none")
  }
  return (
    <Container {...props} onClick={handleClick}>
      <FrontTitle back={props.back}>{props.back ? "Back-End" : "Front-End"}</FrontTitle>
      {props.projects.map((project, i) => (
        <FrontProject
          {...props}
          id={project.title}
          key={project.title}
          onClick={e => handleClick(e, i)}
          isHidden={Boolean(i === index)}
        >
          <FrontProjectTitle git>{project.title}</FrontProjectTitle>
          <FrontProjectDesc>{project.desc}</FrontProjectDesc>
          <FrontProjectTech>
            <FrontProjectTitle back={props.back}>tech</FrontProjectTitle>
            <FrontProjectTechIcons back={props.back} >
              {project.techs.map(tech => (
                <Icon key={tech} src={tech} back={props.back}>{props.back && tech}</Icon>
              ))}
            </FrontProjectTechIcons>
          </FrontProjectTech>
          <FrontProjectDetails isVisible={Boolean(i === index)} back={props.back}>
            <Button target="_blank" href={project.source}>Navigate to Github Repository</Button>
            <Button target="_blank" href={project.website}>Visit Website</Button>
            <CloseDetails onClick={handleClick}>+</CloseDetails>
          </FrontProjectDetails>
        </FrontProject>
      ))}
      <Loader black={props.back} {...props} />
    </Container>
  )
}

export default Projects
