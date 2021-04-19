import React, { useCallback, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Row, Col } from "react-grid-system"
import {
  CenteredRow,
  DividerTitle,
  Divider,
  TextUpper,
  initialProps,
  animateProps,
} from "../components/StyledComponent"
import WorkTogether from "../components/WorkTogether"
import { skills } from "../data/skills"
import SkillPane from "../components/SkillPane"

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const renderSkill = useCallback((typeParams) => {
    return skills
      .filter((v) => v.type === typeParams)
      .map((v) => <SkillPane skill={v} key={v.name} />)
  }, [])

  return (
    <Row nogutter justify="center">
      <Col sm={12} md={8} style={{ padding: "0px 1rem" }}>
        <CenteredRow>
          <TextUpper
            initial={initialProps}
            animate={animateProps}
            transition={{ delay: 0.4 }}
          >
            ABOUT ME
          </TextUpper>
        </CenteredRow>
        <CenteredTitle
          initial={initialProps}
          animate={animateProps}
          transition={{ delay: 0.6 }}
        >
          I am Minsu Lee. Truly enjoying React.js with TypeScript and love to
          make simple and beautiful interface. Willingness to learn more about Test-Driven Development.
        </CenteredTitle>

        <motion.img
          initial={initialProps}
          animate={animateProps}
          transition={{ delay: 0.8 }}
          src="/images/about.jpg"
          style={{ width: "100%" }}
        />

        <motion.div
          initial={initialProps}
          animate={animateProps}
          transition={{ delay: 1 }}
        >
          <DividerTitle>Skills</DividerTitle>
          <Divider />

          <SkillTitle>Front-End</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill("FE")}
          </Row>
          <br />

          <SkillTitle>Back-End</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill("BE")}
          </Row>
          <br />

          <SkillTitle>DB/SQL</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill("DB")}
          </Row>
          <br />

          <SkillTitle>DevOps/Cloud</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill("DO")}
          </Row>
          <br />

          {/* <SkillTitle>Programming Languages</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill('PL')}
          </Row>
          <br/> */}

          <SkillTitle>etc.</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill("etc")}
          </Row>
          <br />

          <SkillTitle>OS</SkillTitle>
          <Row nogutter justify="start">
            {renderSkill("OS")}
          </Row>
          <br />

          <br />
          <br />

          <motion.img
            initial={initialProps}
            animate={animateProps}
            transition={{ delay: 0.8 }}
            src="/images/navy.jpg"
            style={{ width: "100%" }}
          />

          <DividerTitle>Work Experience</DividerTitle>
          <Divider />

          <InfoLine>
            <InfoLeft>2016 - 2018</InfoLeft>
            <InfoRight>
              <b>Content Developer</b>
              <div>Republic of Korea Navy, South Korea</div>
              <div>
                An officer in charge of E-learning Content Creation in Naval
                Education & Training Command.
              </div>
            </InfoRight>
          </InfoLine>
          <ul style={{ marginTop: "1rem" }}>
            <InsideList>
              Developed and maintained view part of an internal Learning
              Management System with HTML5, CSS3, JavaScript, JSP based on MVC
              pattern.
            </InsideList>
            <InsideList>
              Improved user experience and reduced webpage load times by
              replacing Adobe Flash and providing HTML5 content.
            </InsideList>
            <InsideList>
              Led a content creation team and managed multiple priorities to
              meet deadlines.
            </InsideList>
            <InsideList>
              Created wireframes and developed interactive E-Learning content
              with HTML5, Adobe Captivate and Photoshop.
            </InsideList>
          </ul>
          <br />

          <DividerTitle>Education</DividerTitle>
          <Divider />

          <InfoLine>
            <InfoLeft>2019 - 2020</InfoLeft>
            <InfoRight>
              <b>Diploma of Computer Programming</b>
              <div>Seneca College</div>
              <small>Cumulative GPA 3.8/4.0</small>
            </InfoRight>
          </InfoLine>
          <InfoLine>
            <InfoLeft>2018 - 2019</InfoLeft>
            <InfoRight>
              <div>Language Institute</div>
              <div>Embassy English London UK</div>
            </InfoRight>
          </InfoLine>
          <InfoLine>
            <InfoLeft>2012 - 2016</InfoLeft>
            <InfoRight>
              <b>Bachelor's degree of Computer Engineering</b>
              <div>Pukyong National University</div>
              <small>Activities: ROTC(Reserve Officers' Training Corps)</small>
            </InfoRight>
          </InfoLine>
          <br />

          <DividerTitle>Languages</DividerTitle>
          <Divider />

          <InfoLine>
            <InfoLeft>Korean</InfoLeft>
            <InfoRight>Native</InfoRight>
          </InfoLine>
          <InfoLine>
            <InfoLeft>English</InfoLeft>
            <InfoRight>Advanced</InfoRight>
          </InfoLine>
          <InfoLine>
            <InfoLeft>Japanese</InfoLeft>
            <InfoRight>Intermediate</InfoRight>
          </InfoLine>
          <br />
          <br />
        </motion.div>

        <WorkTogether
          linkTo="/contact"
          smallText="NEED A SELF-DIRECTED AND PASSIONATE WEB DEVELOPER?"
          bigText="Let's Work Together"
        />
      </Col>
    </Row>
  )
}

const CenteredTitle = styled(motion.div)`
  text-align: center;
  margin: 24px 0px;
  font-size: 2rem;
  font-weight: 800;
  color: var(--mono-6);
  @media (max-width: 768px) {
    font-size: 1.4rem;
    font-weight: 800;
  }
`

const SkillTitle = styled.div`
  /* border-left: 2px solid var(--mono-3);
    padding-left: 12px; */
  font-size: 24px;
  font-weight: 600;
  color: var(--mono-6);
  margin-left: 16px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 8px;
  }
`

const InfoLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`

const InfoLeft = styled.div`
  width: 150px;
  text-align: right;
  color: var(--mono-6);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const InfoRight = styled.div`
  width: 100%;
  margin-left: 16px;
  text-align: left;
  color: var(--mono-6);
  font-size: 18px;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const InsideList = styled.li`
  list-style: square;
  margin-left: 0.5rem;
  margin-bottom: 4px;
  color: var(--mono-6);
  font-size: 18px;
  @media (max-width: 1280px) {
    margin-left: 0rem;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    margin-left: 0rem;
    font-size: 14px;
  }
`
