import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { TextSubTitle, CenteredRow, TextCenterThin, TextSticky } from '../components/StyledComponent'
import StickyHeader from '../components/StickyHeader'
import WorkTogether from '../components/WorkTogether'
import { skills } from '../datas/skills'

const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--mono-3);
    margin: 16px 0px;
`

const CenteredTitle = styled.div`
    text-align: center;
    margin: 24px 0px;
    font-size: 2rem;
    font-weight: 800;
    color: var(--mono-6);
`

const SkillTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: var(--mono-6);
    margin-left: 16px;
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
`

const InfoRight = styled.div`
    width: 100%;
    margin-left: 16px;
    text-align: left;
    color: var(--mono-6);
`

export default function About (){

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <Row nogutter justify="center">
            <Col sm={12} md={8} >
                <StickyHeader>
                    <TextSticky>
                        About Me
                    </TextSticky>
                </StickyHeader>
                <CenteredTitle>
                    I'm Minsu Lee. Web developer who has passion on design as well. Big fan of React.js and Next.js and javascript. Web development is blah since 2012.
                </CenteredTitle>

                <img src="/images/navy.jpg" style={{width: '100%'}} />

                <StickyHeader>
                    <TextSticky>
                        Skills
                    </TextSticky>
                </StickyHeader>
                <div style={{textAlign: 'right'}}>Summary | Detail</div>
                <div style={{textAlign: 'right'}}>Proficiency : all, 0, 1, 2</div>

                <SkillTitle>Front-End</SkillTitle>
                {skills.filter(v => v.type === 'FE').map(v => (
                    <div>
                        {v.name}
                    </div>
                ))}
                <SkillTitle>Back-End/DB</SkillTitle>
                {skills.filter(v => v.type === 'BE').map(v => (
                    <div>
                        {v.name}
                    </div>
                ))}        
                <SkillTitle>DevOps</SkillTitle>
                {skills.filter(v => v.type === 'DO').map(v => (
                    <div>
                        {v.name}
                    </div>
                ))}
                <SkillTitle>Programming Languages</SkillTitle>
                {skills.filter(v => v.type === 'PL').map(v => (
                    <div>
                        {v.name}
                    </div>
                ))}
                <SkillTitle>etc.</SkillTitle>
                {skills.filter(v => v.type === 'etc').map(v => (
                    <div>
                        {v.name}
                    </div>
                ))}
                <SkillTitle>OS</SkillTitle>
                {skills.filter(v => v.type === 'OS').map(v => (
                    <div>
                        {v.name}
                    </div>
                ))}
                {/* <Divider /> */}

                <StickyHeader>
                    <TextSticky>
                        Career / Education
                    </TextSticky>
                </StickyHeader>
                <InfoLine>
                    <InfoLeft>2019 - 2020</InfoLeft>
                    <InfoRight>
                        <b>Seneca College</b>
                        <div>Diploma of Computer Programming.</div>
                    </InfoRight>
                </InfoLine>
                <InfoLine>
                    <InfoLeft>2018 - 2019</InfoLeft>
                    <InfoRight>
                        <b>Embassy English London UK</b>
                        <div>Language Institution.</div>
                    </InfoRight>
                </InfoLine>
                <InfoLine>
                    <InfoLeft>2016 - 2018</InfoLeft>
                    <InfoRight>
                        <b>Republic of Korea Navy</b>
                        <div>A Chief Officer of E-learning Contents Creating for Navy.</div>
                    </InfoRight>
                </InfoLine>
                <InfoLine>
                    <InfoLeft>2012 - 2016</InfoLeft>
                    <InfoRight>
                        <b>Pukyoung University</b>
                        <div>Bachelor's degree of Computer Engineering.</div>
                    </InfoRight>
                </InfoLine>
                
                <StickyHeader>
                    <TextSticky>
                        Languages
                    </TextSticky>
                </StickyHeader>

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
                    <InfoRight>Upper-intermediate</InfoRight>
                </InfoLine>

                <WorkTogether />
            </Col>
        </Row>
    )
}