import React from "react"
import Layout from "../layout"
import AuthorImage from "../components/About/AuthorImage"
import AboutMe from "../components/About/AboutMe"
import PageContainer from "../styled/PageContainer"
import useLazyLoadingImage from "../hooks/useLazyLoadingImage"
import IMG from "../../static/images/author.jpg"

export default function About() {
  const loaded = useLazyLoadingImage(IMG)
  return (
   <Layout title={"About"} root={false}>
     <PageContainer >
      <AuthorImage loaded={loaded} />
      <AboutMe loaded={loaded} />
     </PageContainer>
   </Layout>
  )
}

