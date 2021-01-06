import React, { useEffect } from 'react'
import { Row, Col } from 'react-grid-system'
import styled from 'styled-components'
import { TextMain, TextDesc, TextMainTitle, TextSubTitle, FlexDRow, FlexDCol, TextUpper } from '../components/StyledComponent'
import { Link, useRouteMatch } from "react-router-dom"
import WorkTogether from '../components/WorkTogether'
import Scroll from 'react-scroll';
import Projects from './Projects'
var Element  = Scroll.Element;
var scroller = Scroll.scroller;

const MainLeftPane = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const HyperLink = styled.div`
    color: var(--blue);
    &:hover{
        text-decoration-line: underline;
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

    return (
        <>
            <Row nogutter style={{height: 'calc(100vh - 45px)', backgroundImage: `url('/images/main-background-text.png')`}} bottom="xs">
                <Col sm={12} md={6} style={{padding: 24}}>
                    <MainLeftPane>
                        <TextUpper>
                            TORONTO
                        </TextUpper>
                        <TextMain>
                            Web Developer 
                        </TextMain>
                        <span style={{textAlign: 'right', fontSize: 24}}>and Designer.</span>
                        <TextDesc>
                            I am a web developer who also have strong passion on web design as well. Truly enjoying React.js at the moment and love to make simple and beautiful interface.
                        </TextDesc>
                        <Link to="/about">
                            <HyperLink>
                                About Me <img src="/images/more.png" width={10} />
                            </HyperLink>
                        </Link>
                    </MainLeftPane>
                </Col>
                <Col sm={12} md={6}>
                    <img src="/images/main-portrait.png" style={{width: '100%', height: '100%'}} />
                </Col>
            </Row>
            <div style={{marginBottom: '2rem'}} />
            <Element name="project" />
            <Projects />
        </>
    )
}