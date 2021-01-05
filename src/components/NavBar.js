import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system'
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

    const [ viewMobilePane, setViewMobilePane ] = useState(false)

    const goToProjects = () => scroller.scrollTo('project', {
        duration: 1200,
        delay: 50,
        smooth: true,
        offset: 0, 
    })

    return (
        <Row nogutter justify="center" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)', position: 'fixed', width: '100%', zIndex: 10}}>
            <Visible xs sm>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <MobileTab>
                        <MobileSides></MobileSides>
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
                            <Link to="/">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    GitHub
                                </MobileTabLine>
                            </Link>
                            <Link to="/">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    LinkedIn
                                </MobileTabLine>
                            </Link>
                            <Link to="/">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Instagram
                                </MobileTabLine>
                            </Link>
                        </MobileOpenedPane>
                    }
                </div>
            </Visible>
            <Visible md lg xl xxl>
                <Col sm={12} md={10} >
                    <NavigationPane>
                        <Link to="/"> <EachButton><img src="/images/logo.png" style={{width: 30}} /></EachButton> </Link>
                        <Link to="/projects"><EachButton>Projects</EachButton></Link>
                        <Link to="/about"><EachButton >About Me</EachButton></Link>
                        <Link to="/contact"><EachButton >Contact</EachButton></Link>
                    </NavigationPane>
                </Col>
            </Visible>
        </Row>
    )
}