import React, { useEffect } from 'react'
import { Row, Col, Visible } from 'react-grid-system'
import styled from 'styled-components'
import { TextMain, TextDesc, TextMainTitle, TextSubTitle, FlexDRow, FlexDCol, TextUpper, TextMainSmall } from '../components/StyledComponent'
import { Link, useRouteMatch } from "react-router-dom"
import WorkTogether from '../components/WorkTogether'
import Scroll from 'react-scroll';
import Projects from './Projects'
import { abort } from 'process'
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

const MainLeftPane = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 10;
`

const HyperLink = styled.span`
    font-size: 20px;
    color: var(--blue);
    &:hover{
        text-decoration-line: underline;
    }
`

const PortraitContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.src})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const PortraitMobileContainer = styled.div`
    width: 100%;
    height: auto;
    z-index: 0;
    background-image: ${props => `url(${props.src})`};
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`

export default function Home (){

    let match = useRouteMatch()

    useEffect(() => {
        if(match.path === '/project'){
            scroller.scrollTo('project', {
                duration: 1200,
                delay: 50,
                smooth: true,
                offset: 0, 
            })
        }
    },[])

    const renderTextPart = () => (
        <MainLeftPane>
            <TextUpper>
                TORONTO
            </TextUpper>
            <TextMain>
                Web Developer
            </TextMain>
            <div style={{textAlign: 'right', maxWidth: 500}}>
                <TextMainSmall>and Designer.</TextMainSmall>
            </div>
            <TextDesc>
                I am Minsu Lee. A web developer who also has strong passion on design. Truly enjoying React.js at the moment and love to make simple and beautiful interface.
            </TextDesc>
            <br />
            <Link to="/about">
                <HyperLink>
                    About Me <img src="/images/more.png" width={12} />
                </HyperLink>
            </Link>
            <br /><br />
        </MainLeftPane>
    )

    return (
        <>
            <Row nogutter bottom="xs"
                style={{height: 'calc(100vh - 45px)', backgroundImage: `url('/images/main-background-text.png')`, backgroundPosition: 'top', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} 
            >
                <Col sm={12} md={6} style={{padding: '5%'}}>
                    <Visible xs sm>
                        <PortraitMobileContainer src="/images/main-portrait.png">
                            {renderTextPart()}
                        </PortraitMobileContainer>
                    </Visible>
                    <Visible md lg xl xxl>
                        {renderTextPart()}
                    </Visible>
                </Col>
                <Visible md lg xl xxl>
                    <Col sm={12} md={6}>
                        <PortraitContainer src="/images/main-portrait.png" />
                    </Col>
                </Visible>
            </Row>
            <div style={{marginBottom: '3rem'}} />
            <Element name="project" />
            <Projects />
        </>
    )
}