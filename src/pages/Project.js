import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import StickyHeader from '../components/StickyHeader'
import { FlexDCol, FlexDRow } from '../components/StyledComponent'
import { projects } from '../datas/projects'

const BackToProjectList = styled.div`
    font-size: 1.8rem;
    font-weight: 800;
    cursor: pointer;
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

export default function Project (props){

    let { title } = useParams()

    const [ selectedPrj, setSelectedPrj ] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        setSelectedPrj(projects.filter(v => v.title === title)[0])
    },[])

    return (
        <Row nogutter justify="center">
            {
                selectedPrj && (
                    <Col sm={12} md={8} >
                        <StickyHeader>
                            <BackToProjectList onClick={() => props.history.goBack()}>
                                {`<-`} Back
                            </BackToProjectList>
                        </StickyHeader>
                        <FlexDRow style={{marginTop: 16}}>
                            <div style={{backgroundColor: 'aliceblue', width: 150, height: 150, borderRadius: 30, marginRight: 16}} />
                            <FlexDCol>
                                <div style={{fontWeight: 800, fontSize: 24}}>{title}</div>
                                <div>Minsu Lee</div>
                                <div>CODE | LIVE LINK</div>
                            </FlexDCol>
                        </FlexDRow>

                        <Divider />
                        <TabTitle>Information</TabTitle>

                        <InfoLine>
                            <InfoLeft>Type</InfoLeft>
                            <InfoRight>{selectedPrj.type}</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Time Spent</InfoLeft>
                            <InfoRight>{selectedPrj.timespent}+ hrs</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Duration</InfoLeft>
                            <InfoRight>{selectedPrj.duration}</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Stack</InfoLeft>
                            <InfoRight>React.js + Node.js + MySQL + AWS</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Library List</InfoLeft>
                            <InfoRight>See Detail</InfoRight>
                        </InfoLine>
                        <InfoLine>
                            <InfoLeft>Result</InfoLeft>
                            <InfoRight>{selectedPrj.profit} See Detail</InfoRight>
                        </InfoLine>

                        <Divider />
                        <TabTitle>Initial Idea</TabTitle>

                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>

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

                        <div>
                            See Next Project ->
                        </div>
                    </Col>
                )
            }
        </Row>
    )
}