import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { TextSubTitle, CenteredRow, TextCenterThin, TextSticky, DividerTitle, Divider } from '../components/StyledComponent'
import StickyHeader from '../components/StickyHeader'
import WorkTogether from '../components/WorkTogether'
import { skills } from '../datas/skills'

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

    const [ isSummaryMode, setIsSummaryMode ] = useState(true)
    const [ selectedProficiency, setSelectedProficiency ] = useState(0)

    const renderSkill = useCallback( (typeParams) => {
        return skills.filter(v => v.type === typeParams).filter(v => selectedProficiency === 0 | v.proficiency === selectedProficiency).map(v => (
            <div>
                {v.name} { !isSummaryMode && <span>{v.comment}</span>}
            </div>
        ))
    },[selectedProficiency, isSummaryMode])

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

                <DividerTitle>Skills</DividerTitle>
                <Divider />
                <div style={{textAlign: 'right'}}>
                    <span onClick={() => setIsSummaryMode(true)}>Summary</span> | <span onClick={() => setIsSummaryMode(false)}>Detail</span>
                </div>
                <div style={{textAlign: 'right'}}>
                    Proficiency : <span onClick={() => setSelectedProficiency(0)}>all</span> | <span onClick={() => setSelectedProficiency(1)}>1</span> | <span onClick={() => setSelectedProficiency(2)}>2</span>
                </div>

                <SkillTitle>Front-End</SkillTitle>
                {renderSkill('FE')}

                <SkillTitle>Back-End/DB</SkillTitle>
                {renderSkill('BE')}     

                <SkillTitle>DevOps</SkillTitle>
                {renderSkill('DO')}

                <SkillTitle>Programming Languages</SkillTitle>
                {renderSkill('PL')}

                <SkillTitle>etc.</SkillTitle>
                {renderSkill('etc')}

                <SkillTitle>OS</SkillTitle>
                {renderSkill('OS')}

                <DividerTitle>Career / Education</DividerTitle>
                <Divider />

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
                    <InfoRight>Upper-intermediate</InfoRight>
                </InfoLine>

                <WorkTogether />
            </Col>
        </Row>
    )
}