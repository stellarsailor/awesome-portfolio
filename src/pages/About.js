import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { TextSubTitle, CenteredRow, TextCenterThin, TextSticky, DividerTitle, Divider } from '../components/StyledComponent'
import StickyHeader from '../components/StickyHeader'
import WorkTogether from '../components/WorkTogether'
import { skills } from '../datas/skills'
import SkillPane from '../components/SkillPane'
import CircleIndicator from '../components/CircleIndicator'

const CenteredTitle = styled.div`
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
    font-size: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
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
        return skills.filter(v => v.type === typeParams).map(v => (
            <SkillPane skill={v} />
        ))
    },[selectedProficiency, isSummaryMode])

    return (
        <Row nogutter justify="center">
            <Col sm={12} md={8} style={{padding: '1rem'}}>
                <TextSticky>
                    About Me
                </TextSticky>
                <CenteredTitle>
                    I'm Minsu Lee. Web developer who has passion on design as well. A big fan of React.js. Web development is blah since 2012.
                </CenteredTitle>

                <img src="/images/navy.jpg" style={{width: '100%'}} />

                <DividerTitle>Skills</DividerTitle>
                <Divider />
                <StarCommentHelper>
                    "<span style={{color: 'gold'}}>✭</span>" means I have used this for 300+ hours.
                    {/* <span onClick={() => setIsSummaryMode(true)}>Summary</span> | <span onClick={() => setIsSummaryMode(false)}>Detail</span> */}
                </StarCommentHelper>

                <SkillTitle>Front-End</SkillTitle>
                {renderSkill('FE')}
                <br/>

                <SkillTitle>Back-End/DB</SkillTitle>
                {renderSkill('BE')}
                <br/>

                <SkillTitle>DevOps</SkillTitle>
                {renderSkill('DO')}
                <br/>

                <SkillTitle>Programming Languages</SkillTitle>
                {renderSkill('PL')}
                <br/>

                <SkillTitle>etc.</SkillTitle>
                {renderSkill('etc')}
                <br/>

                <SkillTitle>OS</SkillTitle>
                {renderSkill('OS')}
                <br/>

                <DividerTitle>Career</DividerTitle>
                <Divider />

                <InfoLine>
                    <InfoLeft>2016 - 2018</InfoLeft>
                    <InfoRight>
                        <b>Republic of Korea Navy</b>
                        <div>Second Lieutenent</div>
                        <div>A Chief Officer of E-learning Contents Creating for Navy.</div>
                        <div>I used to make something</div> 
                    </InfoRight>
                </InfoLine>
                <br/>

                <DividerTitle>Education</DividerTitle>
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
                    <InfoLeft>2012 - 2016</InfoLeft>
                    <InfoRight>
                        <b>Pukyoung University</b>
                        <div>Bachelor's degree of Computer Engineering.</div>
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
                    <InfoRight>Upper-intermediate</InfoRight>
                </InfoLine>
                <br/><br/>

                <WorkTogether
                linkTo="/contact"
                smallText="NEED A WEB DEVELOPER WHO HAS A PASSION ON DESIGN AS WELL?"
                bigText="Let's Work Together"
                />
            </Col>
        </Row>
    )
}