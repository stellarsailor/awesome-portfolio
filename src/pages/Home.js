import React, { useContext, useEffect } from "react"
import { Row, Col, Visible } from "react-grid-system"
import styled from "styled-components"
import {
  initialProps,
  animateProps,
  TextMain,
  TextDesc,
  TextUpper,
} from "../components/StyledComponent"
import { Link, useRouteMatch } from "react-router-dom"
import Scroll from "react-scroll"
import Projects from "../components/Projects"
import { motion } from "framer-motion"
import { LanguageContext } from "../store/LanguageProvider"
import { tr } from "../data/translation"
var Element = Scroll.Element
var scroller = Scroll.scroller

export default function Home() {
  const [state] = useContext(LanguageContext)
  let match = useRouteMatch()

  useEffect(() => {
    if (match.path === "/project") {
      scroller.scrollTo("project", {
        duration: 1200,
        delay: 50,
        smooth: true,
        offset: 0,
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [match])

  const renderTextPart = () => (
    <MainLeftPane>
      <TextUpper
        initial={initialProps}
        animate={animateProps}
        transition={{ delay: 0.6 }}
      >
        TORONTO
      </TextUpper>
      <TextMain
        initial={initialProps}
        animate={animateProps}
        transition={{ delay: 0.4 }}
      >
        Full-Stack
      </TextMain>
      <div style={{ textAlign: "right", maxWidth: 565, marginBottom: "1rem" }}>
        <TextMain
          initial={initialProps}
          animate={animateProps}
          transition={{ delay: 0.8 }}
        >
          Web Developer
        </TextMain>
      </div>
      <TextDesc
        initial={initialProps}
        animate={animateProps}
        transition={{ delay: 1 }}
      >
        {tr[state.language].MAIN_INTRODUCE}
      </TextDesc>
      <br />
      <HyperLink
        initial={initialProps}
        animate={animateProps}
        transition={{ delay: 1.5 }}
      >
        <Link to="/about">
          <HyperLinkSpan>
            About Me <img src="/images/more.png" width={12} alt="About Me" />
          </HyperLinkSpan>
        </Link>
      </HyperLink>
      <br />
      <br />
    </MainLeftPane>
  )

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animateProps}
        transition={{ duration: 1 }}
      >
        <Row
          nogutter
          bottom="xs"
          style={{
            height: "calc(100vh - 45px)",
            backgroundImage: `url('/images/main-background-text.png')`,
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Col sm={12} md={6} style={{ padding: "5%" }}>
            <Visible xs sm>
              <PortraitMobileContainer
                src="/images/main-portrait.png"
                initial={{ opacity: 0 }}
                animate={animateProps}
                transition={{ delay: 0.4, duration: 1 }}
              >
                {renderTextPart()}
              </PortraitMobileContainer>
            </Visible>
            <Visible md lg xl xxl>
              {renderTextPart()}
            </Visible>
          </Col>
          <Visible md lg xl xxl>
            <Col sm={12} md={6}>
              <PortraitContainer
                src="/images/main-portrait.png"
                initial={{ opacity: 0 }}
                animate={animateProps}
                transition={{ delay: 0.4, duration: 1 }}
              />
            </Col>
          </Visible>
        </Row>
      </motion.div>
      <Element name="project" />
      <div style={{ marginBottom: "3rem" }} />
      <Projects />
    </>
  )
}

const MainLeftPane = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 10;
`

const HyperLink = styled(motion.span)`
  font-size: 22px;
  color: var(--blue);
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const HyperLinkSpan = styled.span`
  cursor: pointer;
  text-decoration: underline solid transparent;
  -webkit-text-decoration: underline solid transparent;
  &:hover {
    text-decoration: underline solid var(--blue);
    -webkit-text-decoration: underline solid var(--blue);
  }
  transition: text-decoration 0.5s ease;
`

const PortraitContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const PortraitMobileContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  z-index: 0;
  background-image: ${(props) => `url(${props.src})`};
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
