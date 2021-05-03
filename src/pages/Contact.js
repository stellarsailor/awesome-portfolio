import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Row, Col } from "react-grid-system"
import { LanguageContext } from "../store/LanguageProvider"
import { tr } from "../data/translation"

export default function Contact() {
  const [state] = useContext(LanguageContext)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const contactType = ["Email", "GitHub", "LinkedIn", "Instagram"]
  const contactLink = [
    "mailto:minsulee.dev@gmail.com",
    "https://github.com/stellarsailor",
    "https://www.linkedin.com/in/minsu-lee-b6818b198/",
    "https://www.instagram.com/stellarsalior",
  ]

  return (
    <Row nogutter justify="center">
      <ContactImage>
        <HighlightText>
          <Fade bottom distance="50px">
            <div style={{ color: "white", filter: "none" }}>
              <div>TORONTO, CA</div>
              {tr[state.language].CONTACT_COMMENT}
            </div>
          </Fade>
        </HighlightText>
      </ContactImage>
      <Col sm={12} md={8}>
        <Fade bottom distance="50px">
          <ContactText>Contact</ContactText>
        </Fade>
        <Fade bottom distance="50px">
          <Row nogutter justify="center" style={{ minHeight: 160 }}>
            {contactType.map((type, index) => (
              <Col xs={6} sm={6} md={3} style={{ padding: 8 }} key={index}>
                <a href={contactLink[index]} target="_blank" rel="noreferrer">
                  <ContactTypeBox>
                    <img
                      src={`/images/icons/${type.toLowerCase()}.png`}
                      width={60}
                      height={60}
                      alt="Contact Method"
                    />
                    {type}
                  </ContactTypeBox>
                </a>
              </Col>
            ))}
          </Row>
        </Fade>
      </Col>
    </Row>
  )
}

const HighlightText = styled.div`
  color: var(--mono-1);
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 24px 0px;
  padding: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ContactImage = styled.div`
  width: 100%;
  height: 55vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  /* filter: brightness(30%); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/contact.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    height: 30vh;
  }
`

const ContactText = styled.div`
  width: 100%;
  color: var(--mono-8);
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  margin: 24px 0px;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const ContactTypeBox = styled.div`
  width: 100%;
  color: var(--mono-6);
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
