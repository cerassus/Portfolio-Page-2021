import React from "react"
import Layout from "../layout"
import PageContainer from "../styled/PageContainer"
import useLazyLoadingImage from "../hooks/useLazyLoadingImage"
import { technologies } from "../redux/const"
import ProjectsComponent from "../components/Projects/Projects"
import { front_projects, back_projects } from "../redux/const"

export default function Projects() {
  const loaded = useLazyLoadingImage(
    technologies.map(tech => tech.icon)
  )
  return (
   <Layout title="Projects">
    <PageContainer projects>
      <ProjectsComponent loaded={loaded} projects={front_projects}/>
      <ProjectsComponent loaded={loaded} back projects={back_projects}/>
    </PageContainer>
   </Layout>
  )
}
