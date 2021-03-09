import React, { useState, useEffect } from "react"
import { Everyday, Icon, Title, Content } from "../../styled/About/AboutMe"
import { about } from "../../redux/const"
import { Container } from "../../styled/PageContainer"
import Loader from "../../styled/Loader"
import { useStore } from "../../redux/redux"

export default function AboutMe({ ...props }) {
    // const [store, actions] = useStore()
    // const [didMount, setDidMount] = useState(false)
    // useEffect(() => {
    //     setDidMount(true)
    // }, [])
    // useEffect(() => {
    //     if(didMount) {
    //         const about_me_container = document.getElementById("about_me_container")
    //         about_me_container && (
    //             about_me_container.offsetHeight < window.innerHeight 
    //             && actions.setAuthorImageBig()
    //         )
    //     }
    // }, [didMount])
    return (
        <Container  {...props}>
            {about.map((everyday, i) => (
                <Everyday key={everyday.title} reverse={Boolean(i === 0)}>
                    <Icon src={everyday.icon} reverse={Boolean(i === 0)}/>
                    <Title>{everyday.title}</Title>
                    <Content>{everyday.content}</Content>
                </Everyday>
                )
            )}
            <Loader {...props} black />
        </Container>
    )
}