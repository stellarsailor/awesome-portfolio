import React, { useEffect } from 'react'
import { Row, Col, Visible } from 'react-grid-system'
import styled from 'styled-components'
import { initialProps, animateProps, TextMain, TextDesc, TextMainTitle, TextSubTitle, FlexDRow, FlexDCol, TextUpper, TextMainSmall } from '../components/StyledComponent'
import { Link, useRouteMatch } from "react-router-dom"
import WorkTogether from '../components/WorkTogether'
import Scroll from 'react-scroll';
import Projects from './Projects'
import { motion } from 'framer-motion'

var Element  = Scroll.Element;
var scroller = Scroll.scroller;

const MainLeftPane = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 10;
`

const HyperLink = styled(motion.span)`
    font-size: 20px;
    color: var(--blue);
    &:hover{
        text-decoration-line: underline;
    }
`

const PortraitContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.src})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const PortraitMobileContainer = styled(motion.div)`
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
            <TextUpper
            initial={initialProps}
            animate={animateProps}
            transition={{ delay: 0.4 }}
            >
                TORONTO
            </TextUpper>
            <TextMain
            initial={initialProps}
            animate={animateProps}
            transition={{ delay: 0.6 }}
            >
                Web developer
            </TextMain>
            <div style={{textAlign: 'right', maxWidth: 565}}>
                <TextMain
                initial={initialProps}
                animate={animateProps}
                transition={{ delay: 0.8 }}
                >
                    and designer.
                </TextMain>
            </div>
            <TextDesc
            initial={initialProps}
            animate={animateProps}
            transition={{ delay: 1 }}
            >
                I am Minsu Lee. A web developer who also has strong passion on design. Truly enjoying React.js at the moment and love to make simple and beautiful interface.
            </TextDesc>
            <br />
            <Link to="/about">
                <HyperLink
                initial={initialProps}
                animate={animateProps}
                transition={{ delay: 1.5 }}
                >
                    About Me <img src="/images/more.png" width={12} />
                </HyperLink>
            </Link>
            <br /><br />
        </MainLeftPane>
    )

    return (
        <>
            <motion.div
            initial={{opacity: 0}}
            animate={animateProps}
            transition={{ duration: 1 }}
            >
                <Row 
                nogutter 
                bottom="xs"
                style={{height: 'calc(100vh - 45px)', backgroundImage: `url('/images/main-background-text.png')`, backgroundPosition: 'top', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} 
                >
                    <Col sm={12} md={6} style={{padding: '5%'}}>
                        <Visible xs sm>
                            <PortraitMobileContainer src="/images/main-portrait.png"
                            initial={{opacity: 0}}
                            animate={animateProps}
                            transition={{ delay: 0.4, duration: 1 }}
                            >
                                {renderTextPart()}
                            </PortraitMobileContainer>
                        </Visible>
                        <Visible md lg xl xxl>
                            {renderTextPart()}
                        </Visible>
                    </Col>
                    <Visible md lg xl xxl>
                        <Col sm={12} md={6}>
                            <PortraitContainer src="/images/main-portrait.png" 
                            initial={{opacity: 0}}
                            animate={animateProps}
                            transition={{ delay: 0.4, duration: 1 }}
                            />
                        </Col>
                    </Visible>
                </Row>
            </motion.div>
            <div style={{marginBottom: '3rem'}} />
            <Element name="project" />
            <Projects />
        </>
    )
}