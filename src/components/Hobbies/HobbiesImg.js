import React, {useState, useEffect} from "react"
import { ImageContainer } from "../../styled/Hobbies/HobbiesNav"
import { hobbies_tabs } from "../../redux/const"
import { Container } from "../../styled/PageContainer"
import Loader from "../../styled/Loader"

export default function HobbiesImg({ ...props }) {
    return (
        <Container {...props}>
            <ImageContainer 
                {...props} 
                src={hobbies_tabs[props.which_tab].bigImg} 
            />
            <Loader black {...props}/>
        </Container>
    )
}