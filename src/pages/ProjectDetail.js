import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import StickyHeader from '../components/StickyHeader'
import { FlexDCol, FlexDRow } from '../components/StyledComponent'
import WorkTogether from '../components/WorkTogether'
import CircleIndicator from '../components/CircleIndicator'
import { projects } from '../datas/projects'

const BackToProjectList = styled.div`
    /* color: var(--blue); */
    font-size: 1.8rem;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`

const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--mono-3);
    margin: 16px 0px;
`

const TabTitle = styled.div`
    font-size: 24px;
    margin-top: 16px;
    font-weight: 800;
`

const InfoLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
`

const InfoLeft = styled.div`
    width: 150px;
    text-align: right;
    color: var(--mono-6);
`

const InfoRight = styled.div`
    width: 100%;
    margin-left: 16px;
    text-align: left;
    color: var(--mono-6);
`

const HyperLink = styled.a`
    color: var(--blue);
    &:visited {
        color: var(--blue);
    }
`

export default function ProjectDetail (props){

    let { title } = useParams()

    const [ selectedPrj, setSelectedPrj ] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        setSelectedPrj(projects.filter(v => v.title === title)[0])
    },[title])

    return (
        <Row nogutter justify="center">
            <CircleIndicator />
            {
                selectedPrj && (
                    <Col sm={12} md={10} style={{padding: '1rem'}}>
                        <Link to={`/projects?s=${selectedPrj.title}`}>
                            <BackToProjectList>
                                <img src="/images/more.png" width={20} style={{transform: 'rotate(180deg)', marginRight: 8}} /> Back 
                            </BackToProjectList>
                        </Link>
                        <Divider />
                        <FlexDRow style={{marginTop: 16}}>
                            <img src={`/images/projects/${selectedPrj.title}/icon.png`} width={140} height={140} style={{borderRadius: 15, marginRight: 16}} />
                            <FlexDCol>
                                <div style={{fontWeight: 800, fontSize: 24}}>{title}</div>
                                <div>Minsu Lee</div>
                                <div>
                                    {selectedPrj.codeLink && <span>CODE</span>}
                                    |
                                    {selectedPrj.liveLink && 
                                    <HyperLink href={selectedPrj.liveLink} target="_blank"> LIVE LINK </HyperLink>}
                                </div>
                            </FlexDCol>
                        </FlexDRow>

                        <Divider />
                        <TabTitle>Information</TabTitle>

                        <InfoLine>
                            <InfoLeft>Type</InfoLeft>
                            <InfoRight>{selectedPrj.type}</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Language</InfoLeft>
                            <InfoRight>{selectedPrj.languages}</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Duration</InfoLeft>
                            <InfoRight>{selectedPrj.duration} &nbsp; ({selectedPrj.year})</InfoRight>
                        </InfoLine>
                        { selectedPrj.timespent &&
                            <InfoLine>
                                <InfoLeft>Time Spent</InfoLeft>
                                <InfoRight>{selectedPrj.timespent} hrs</InfoRight>
                            </InfoLine>
                        }
                        <InfoLine>
                            <InfoLeft>Stack</InfoLeft>
                            <InfoRight>{selectedPrj.stack.toString().replaceAll(',', ' + ')}</InfoRight>
                        </InfoLine>
                        {
                            selectedPrj.library && 
                            <InfoLine>
                                <InfoLeft>Library List</InfoLeft>
                                <InfoRight>
                                    <a href={selectedPrj.library} target="_blank">
                                        See Detail <img src="/images/blank.png" width={15} height={15} />
                                    </a>
                                </InfoRight>
                            </InfoLine>
                        }
                        {
                            selectedPrj.profit &&
                            <InfoLine>
                                <InfoLeft>Profit</InfoLeft>
                                <InfoRight>{selectedPrj.profit}</InfoRight>
                            </InfoLine>
                        }
                        {
                            selectedPrj.result &&
                            <InfoLine>
                                <InfoLeft>Result</InfoLeft>
                                <InfoRight>{selectedPrj.result}</InfoRight>
                            </InfoLine>
                        }

                        <Divider />
                        <TabTitle>Initial Idea</TabTitle>

                        <div>{selectedPrj.idea}</div>

                        <Divider />
                        <TabTitle>Preview</TabTitle>
                        <Row nogutter justify="center">
                            <Col sm={12} md={12} style={{padding: 8}}>
                                <div style={{width: '100%', height: 500, backgroundColor: 'aliceblue'}} />
                            </Col>
                            <Col sm={12} md={6} style={{padding: 8}}>
                                <div style={{width: '100%', height: 500, backgroundColor: 'aliceblue'}} />
                            </Col>
                            <Col sm={12} md={6} style={{padding: 8}}>
                                <div style={{width: '100%', height: 500, backgroundColor: 'aliceblue'}} />
                            </Col>
                            <Col sm={12} md={12} style={{padding: 8}}>
                                <div style={{width: '100%', height: 500, backgroundColor: 'aliceblue'}} />
                            </Col>
                        </Row>

                        <Divider />
                        <TabTitle>Lessons Learned</TabTitle>
                        {selectedPrj.lesson}

                        {
                            selectedPrj.id + 1 < projects.length ?
                            <WorkTogether
                            linkTo={`/project/${projects[selectedPrj.id + 1].title}`}
                            smallText={projects[selectedPrj.id + 1].title}
                            bigText="See Next Project"
                            />
                            :
                            <WorkTogether
                            linkTo={`/about`}
                            smallText=""
                            bigText="Read About Me"
                            />
                        }
                    </Col>
                )
            }
        </Row>
    )
}