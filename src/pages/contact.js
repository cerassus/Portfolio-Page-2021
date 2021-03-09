import React, { useEffect, useState } from "react"
import Layout from "../layout"
import PageContainer from "../styled/PageContainer"
import ContactForm from "../components/Contact/Contact"
import { useStore } from "../redux/redux"

export default function Contact() {
  const [store, actions] = useStore()
  return (
   <Layout title="Contact">
    <PageContainer contactPage>
      <ContactForm loaded="true" contact="true" next_page={store.next_page} />
      <div />
    </PageContainer>
   </Layout>
  )
}
