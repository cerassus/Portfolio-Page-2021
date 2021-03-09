import React, { useState, useEffect } from "react"
import { Everyday, Icon, Title, Content } from "../../styled/About/AboutMe"
import { about } from "../../redux/const"
import { Container } from "../../styled/PageContainer"
import Loader from "../../styled/Loader"

export default function AboutMe({ ...props }) {
    return (
        <Container id="about_me_container" {...props}>
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