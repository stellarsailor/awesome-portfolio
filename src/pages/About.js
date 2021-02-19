import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Row, Col } from 'react-grid-system'
import { CenteredRow, DividerTitle, Divider, TextUpper, initialProps, animateProps } from '../components/StyledComponent'
import WorkTogether from '../components/WorkTogether'
import { skills } from '../data/skills'
import SkillPane from '../components/SkillPane'

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

const StarCommentHelper = styled.div`
    text-align: right;
    color: var(--mono-5);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 0.9rem;
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

const EducationComment = styled.div`
    color: var(--mono-4);
    font-size: 14px;
    @media (max-width: 1280px) {
        font-size: 12px;
    }
    @media (max-width: 768px) {
        font-size: 10px;
    }
`

export default function About (){

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const renderSkill = useCallback( (typeParams) => {
        return skills.filter(v => v.type === typeParams).map(v => (
            <SkillPane skill={v} key={v.name} />
        ))
    },[])

    return (
        <Row nogutter justify="center">
            <Col sm={12} md={8} style={{padding: '0px 1rem'}}>
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
                    I am Minsu Lee. A web developer with a passion for design & UX.
                    Truly enjoying React.js at the moment and love to make simple and beautiful interface.
                </CenteredTitle>

                <motion.img 
                initial={initialProps}
                animate={animateProps}
                transition={{ delay: 0.8 }}
                src="/images/about.jpg" 
                style={{width: '100%'}} 
                />

                <motion.div
                initial={initialProps}
                animate={animateProps}
                transition={{ delay: 1 }}
                >
                    <DividerTitle>Skills</DividerTitle>
                    <Divider />
                    {/* <StarCommentHelper>
                        "<span style={{color: 'gold'}}>✭</span>" means I have used this for 300+ hours.
                    </StarCommentHelper> */}

                    <SkillTitle>Front-End</SkillTitle>
                    <Row nogutter justify="start">
                        {renderSkill('FE')}
                    </Row>
                    <br/>

                    <SkillTitle>Back-End/DB</SkillTitle>
                    <Row nogutter justify="start">
                        {renderSkill('BE')}
                        {renderSkill('DB')}
                    </Row>
                    <br/>

                    <SkillTitle>DevOps</SkillTitle>
                    <Row nogutter justify="start">
                        {renderSkill('DO')}
                    </Row>
                    <br/>

                    <SkillTitle>Programming Languages</SkillTitle>
                    <Row nogutter justify="start">
                        {renderSkill('PL')}
                    </Row>
                    <br/>

                    <SkillTitle>etc.</SkillTitle>
                    <Row nogutter justify="start">
                        {renderSkill('etc')}
                    </Row>
                    <br/>

                    <SkillTitle>OS</SkillTitle>
                    <Row nogutter justify="start">
                        {renderSkill('OS')}
                    </Row>
                    <br/>

                    <br/><br/>

                    <motion.img 
                    initial={initialProps}
                    animate={animateProps}
                    transition={{ delay: 0.8 }}
                    src="/images/navy.jpg" 
                    style={{width: '100%'}} 
                    />

                    <DividerTitle>Work Experience</DividerTitle>
                    <Divider />

                    <InfoLine>
                        <InfoLeft>2016 - 2018</InfoLeft>
                        <InfoRight>
                            <b>Republic of Korea Navy</b>
                            <div>Sub-lieutenant (IT branch)</div>
                            <div>An officer in charge of E-learning Content Creation Dept. in Naval Education & Training Command</div>
                        </InfoRight>
                    </InfoLine>
                    <ul style={{marginTop: '1rem'}}>
                        <InsideList>Created interactive E-learning content with HTML and Adobe Captivate and developed intranet websites to serve them.</InsideList>
                        <InsideList>Improved intranet websites by modernizing design and simplifying layout using HTML, CSS, and Vanilla JavaScript.</InsideList>
                    </ul>
                    <br/>

                    <DividerTitle>Education</DividerTitle>
                    <Divider />

                    <InfoLine>
                        <InfoLeft>2019 - 2020</InfoLeft>
                        <InfoRight>
                            <b>Seneca College</b>
                            <div>Diploma of Computer Programming</div>
                            {/* <EducationComment>
                                It was good to review what I learned before. I had a lot of time to spare, so I was able to work on personal projects.
                            </EducationComment> */}
                        </InfoRight>
                    </InfoLine>
                    <InfoLine>
                        <InfoLeft>2018 - 2019</InfoLeft>
                        <InfoRight>
                            <b>Embassy English London UK</b>
                            <div>Language Institute</div>
                            {/* <EducationComment>
                                I could not make a sentence properly until I decided to learn English in 2018. At this time, I learned English a lot.
                            </EducationComment> */}
                        </InfoRight>
                    </InfoLine>
                    <InfoLine>
                        <InfoLeft>2012 - 2016</InfoLeft>
                        <InfoRight>
                            <b>Pukyong National University</b>
                            <div>Bachelor's degree of Computer Engineering / ROTC</div>
                            {/* <EducationComment>
                                Lorem
                            </EducationComment> */}
                        </InfoRight>
                    </InfoLine>
                    <br/>
                    
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
                    <br/><br/>
                </motion.div>

                <WorkTogether
                linkTo="/contact"
                smallText="NEED A WEB DEVELOPER WITH A PASSION FOR DESIGN & UX?"
                bigText="Let's Work Together"
                />
            </Col>
        </Row>
    )
}