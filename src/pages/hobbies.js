import React, { useState, useEffect } from "react"
import HobbiesNav from "../components/Hobbies/HobbiesNav"
import HobbiesImg from "../components/Hobbies/HobbiesImg"
import Layout from "../layout"
import { hobbies_tabs } from "../redux/const"
import PageContainer from "../styled/PageContainer"
import useLazyLoadingImage from "../hooks/useLazyLoadingImage"
import { useStore } from "../redux/redux"

export default function Hobbies() {
  const loaded = useLazyLoadingImage(
    hobbies_tabs.map(item => (item = item.img))
  )
  const [store, actions] = useStore()
  return (
    <Layout title="Hobbies">
      <PageContainer>
        <HobbiesNav loaded={loaded} which_tab={store.hobbies} actions={actions}/>
        <HobbiesImg loaded={loaded} which_tab={store.hobbies} />
      </PageContainer>
    </Layout>
  )
}
