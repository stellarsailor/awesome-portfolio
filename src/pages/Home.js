import React, { useEffect } from 'react'
import { Row, Col } from 'react-grid-system'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { TextMain, TextDesc, TextMainTitle, TextSubTitle, FlexDRow, FlexDCol } from '../components/StyledComponent'
import { Link } from "react-router-dom"
import WorkTogether from '../components/WorkTogether'
import Scroll from 'react-scroll';
import Projects from '../components/Projects'
var Element  = Scroll.Element;

const MainLeftPane = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export default function Home (){

    return (
        <>
            <Row nogutter style={{height: 'calc(100vh - 45px)', backgroundImage: `url('/images/main-background-text.png')`}} bottom="xs">
                <Col sm={12} md={6} style={{padding: 24}}>
                    <MainLeftPane>
                        <div style={{fontSize: 24}}>
                            ^ Toronto
                        </div>
                        <TextMain>
                            Web Developer 
                        </TextMain>
                        <span style={{textAlign: 'right', fontSize: 24}}>and Designer.</span>
                        <TextDesc>
                            Over the five years, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </TextDesc>
                        <Link to="/about">
                            <div style={{color: 'var(--blue)'}}>
                                About Me >
                            </div>
                        </Link>
                    </MainLeftPane>
                </Col>
                <Col sm={12} md={6}>
                    <img src="/images/main-portrait.png" style={{width: '100%', height: '100%'}} />
                </Col>
            </Row>
            <div style={{padding: '5%'}}>
                <Element name="project" />
                <Projects />
                <WorkTogether />
            </div>
        </>
    )
}