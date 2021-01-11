import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system'
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components'
import Scroll from 'react-scroll'
var scroller = Scroll.scroller;

const NavigationPane = styled.div`
    color: white;
    width: 100%;
    height: 45px;
    z-index: 10;
    display: flex;
    align-items: center;
`

const MobileTab = styled.div`
    width: 100%;
    height: 45px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MobileOpenedPane = styled.div`
    width: 100%;
    background-color: rgba(25, 25, 25, 1);
    position: fixed;
    top: 45px;
    z-index: 10;
`

const MobileTabLine = styled.div`
    width: 100%;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(60, 60, 60, 1);
    color: white;
`

const MobileSides = styled.div`
    color: white; //var(--blue);
    font-size: 20px;
    font-weight: 600;
    width: 50px;
    height: 50px;
    margin: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const EachButton = styled.div`
    width: 100px;
    font-size: 15px;
    color: #f5f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    transition: opacity .3s cubic-bezier(0.25, 0.1, 0.25, 1);
    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }
`

export default function NavBar(props) {
    const location = useLocation()

    const [ scrollPosition, setScrollPosition ] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
        
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [ viewMobilePane, setViewMobilePane ] = useState(false)

    const goToProjects = () => scroller.scrollTo('project', {
        duration: 1200,
        delay: 50,
        smooth: true,
        offset: 0, 
    })

    return (
        <Row nogutter justify="center" style={{position: 'fixed', width: '100%', zIndex: 10}}>
            <Visible xs sm>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 1)'}}>
                    <MobileTab>
                        {
                            location.pathname.includes('/project/') && scrollPosition > 50 ?
                            <MobileSides onClick={() => window.history.back()}>
                                <img src="/images/more.png" style={{width: 20, height: 20, transform: 'rotate(180deg)', marginLeft: 24}} /> Back
                            </MobileSides>
                            :
                            <div style={{width: 50, height: 50, margin: '0px 8px'}}></div>
                        }
                        <Link to="/"> 
                            <img src="/images/logo.png" style={{width: 30}} onClick={() => setViewMobilePane(false)} />
                        </Link>
                        <MobileSides onClick={() => setViewMobilePane(!viewMobilePane)}>
                            <img src="/images/icon_hamburger.png" style={{width: 25, height: 25}} />
                        </MobileSides>
                    </MobileTab>
                    {
                        viewMobilePane && 
                        <MobileOpenedPane>
                            <Link to="/">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Home
                                </MobileTabLine>
                            </Link>
                            <Link to="/projects">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Projects
                                </MobileTabLine>
                            </Link>
                            <Link to="/about">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    About Me
                                </MobileTabLine>
                            </Link>
                            <Link to="/contact">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Contact
                                </MobileTabLine>
                            </Link>
                            <a href="https://github.com/stellarsailor" target="_blank" rel="noreferrer">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    GitHub
                                </MobileTabLine>
                            </a>
                            <a href="https://www.linkedin.com/in/minsu-lee-b6818b198/" target="_blank" rel="noreferrer">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    LinkedIn
                                </MobileTabLine>
                            </a>
                            <a href="https://www.instagram.com/stellarsalior" target="_blank" rel="noreferrer">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Instagram
                                </MobileTabLine>
                            </a>
                        </MobileOpenedPane>
                    }
                </div>
            </Visible>
            <Visible md lg xl xxl>
                <div style={{width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
                    <Col sm={12} md={10} style={{marginLeft: '3%'}}>
                        <NavigationPane>
                            <Link to="/"> <EachButton><img src="/images/logo.png" style={{width: 30}} /></EachButton> </Link>
                            <Link to="/projects"><EachButton>Projects</EachButton></Link>
                            <Link to="/about"><EachButton >About Me</EachButton></Link>
                            <Link to="/contact"><EachButton >Contact</EachButton></Link>
                        </NavigationPane>
                    </Col>
                </div>
            </Visible>
        </Row>
    )
}