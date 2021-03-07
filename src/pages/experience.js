import React from "react"
import ExperienceNav from "../components/Experience/ExperienceNav"
import ExperienceTab from "../components/Experience/ExperienceTab"
import Layout from "../layout"
import PageContainer from "../styled/PageContainer"
import useLazyLoadingImage from "../hooks/useLazyLoadingImage"
import { useStore } from "../redux/redux"
import IMG from "../../static/images/user-experience.png"
import CVIMG from "../../static/images/cv.png"

export default function Experience() {
  const loaded = useLazyLoadingImage([CVIMG, IMG])
  const [store, actions] = useStore()
  return (
   <Layout title="Experience">
     <PageContainer>
       <ExperienceNav loaded={loaded} which_tab={store.experience} actions={actions} />
       <ExperienceTab loaded={loaded} which_tab={store.experience} />
     </PageContainer>
   </Layout>
  )
}
