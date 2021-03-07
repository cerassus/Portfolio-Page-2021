import React, { useState, useEffect } from "react"
import {
  FormContainer,
  FormContainerHeader,
  FormContainerContent,
  FormControl,
  Label,
  Input,
  TextArea,
  HelperText,
  SendButton,
  SocialIcon,
  Response,
} from "../../styled/Contact/Contact"
import { ExternalLink } from "../../styled/Link"
import Loader from "../../styled/Loader"
import { Container } from "../../styled/PageContainer"
import emailjs from 'emailjs-com';

export default function Contact({ ...props }) {
  const [helper, setHelper] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState(false)
  const [loading, setLoading] = useState(false)
  const sendEmail = e => {
    e.preventDefault()
    if(!email || !message || helper) {
        setResponse(helper);
    } else {
        setLoading(true)
        emailjs
        .send(
            "cerassus.shared",
            "cerassus_template_0",
            {
            from_name: email,
            message: message,
            reply_to: email,
            },
            "user_W8b53hqHp85rSGjVwF3x3"
        )
        .then(() => {
            setResponse("E-mail sent. Thank You!")
            setLoading(false)
        }, () => {
            setResponse("Something went wrong. Please try to contact me directly via michal@cerassus.eu")
            setLoading(false)
        })
    }
  }
  useEffect(() => {
    if(email || message) {
        (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) 
            ? (/\p{L}{5,}/iu.test(message))
                ? setHelper("")
                : setHelper("Wrong message! Type at least 5 characters!")
            : (/\p{L}{5,}/iu.test(message))
                ? setHelper("Wrong email address!")   
                : setHelper("Wrong email address and message!")
    } else {
        (!email && !message) && setHelper("")
    }
  }, [email, message])
  useEffect(() => {
    if(!response) {
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
    }
  }, [response])
  return (
    <Container {...props}>
      <FormContainer {...props}>
        <FormContainerHeader>
            <ExternalLink color="white" href="https://www.linkedin.com/in/cerassus/"><SocialIcon src="https://cerassus.eu/icons/social/linkedin.png" /></ExternalLink>
            <ExternalLink color="white" href="https://github.com/cerassus"><SocialIcon src="https://cerassus.eu/icons/social/github.png" /></ExternalLink>
        </FormContainerHeader>
        <FormContainerContent response={response} loading={loading} onSubmit={sendEmail}>
          <FormControl>
            <Label htmlFor="email">E-mail</Label>
            <Input name="email" type="email" id="email" required onKeyUp={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label htmlFor="message">Message</Label>
            <TextArea name="message" id="message" required onKeyUp={(e) => setMessage(e.target.value)}/>
          </FormControl>
          <HelperText helper={helper}><span>.</span>{helper}</HelperText>
          <SendButton type="submit" value="Send" />
        </FormContainerContent>
        <Loader black loaded={!loading} />
        <Response response={!loading && response} close={() => setResponse(false)} >
          <div>{response && response}</div>
        </Response>
      </FormContainer>
    </Container>
  )
}
