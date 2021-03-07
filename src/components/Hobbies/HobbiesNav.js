import React from "react"
import { Background, TabsContent, Tab, TabsContainer } from "../../styled/Hobbies/HobbiesNav"
import { hobbies_tabs } from "../../redux/const"
import { Container } from "../../styled/PageContainer"
import Loader from "../../styled/Loader"

export default function HobbiesNav(props) {
    return (
        <Container {...props} >
        <Background {...props} tabs={hobbies_tabs} index={props.which_tab}>
            <TabsContainer>
                {hobbies_tabs.map((hobby, i) => (
                    <Tab
                        key={i}
                        onClick={() => props.actions.setHobbiesTab(i)} 
                        active={Boolean(props.which_tab === i)}   
                    >
                        {hobby.title}
                    </Tab>
                    )
                )}
            <TabsContent>
                {hobbies_tabs[props.which_tab].text}
            </TabsContent>
            </TabsContainer>
        </Background>
        <Loader {...props} />
        </Container>
    )
}