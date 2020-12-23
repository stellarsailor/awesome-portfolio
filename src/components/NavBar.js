import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible, Hidden } from 'react-grid-system'
import styled from 'styled-components'
import Scroll from 'react-scroll'
var scroller = Scroll.scroller;

const NavigationPane = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
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
    background-color: rgba(0, 0, 0, 0.8);
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
`

const MobileSides = styled.div`
    width: 50px;
    height: 50px;
    margin: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EachButton = styled.div`
    width: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
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
        <Row nogutter>
            <Visible xs sm>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <MobileTab>
                        <MobileSides></MobileSides>
                        <Link to="/" style={{ textDecoration: 'none' }}> 
                            <img src="/images/logo.png" style={{width: 30}} onClick={() => setViewMobilePane(false)} />
                        </Link>
                        <MobileSides onClick={() => setViewMobilePane(!viewMobilePane)}>
                            <img src="/images/icon_hamburger.png" style={{width: 20, height: 20}} />
                        </MobileSides>
                    </MobileTab>
                    {
                        viewMobilePane && 
                        <MobileOpenedPane>
                            <Link to="/message" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    To. DWG
                                </MobileTabLine>
                            </Link>
                            <Link to="/fanart" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Fan Arts
                                </MobileTabLine>
                            </Link>
                            <Link to="/dadjoke" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Dad Joke
                                </MobileTabLine>
                            </Link>
                            <Link to="/article" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Articles
                                </MobileTabLine>
                            </Link>
                            <Link to="/highlight" style={{ textDecoration: 'none' }}>
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Highlights
                                </MobileTabLine>
                            </Link>
                        </MobileOpenedPane>
                    }
                </div>
            </Visible>
            <Visible md lg xl xxl>
                <NavigationPane>
                    <Link to="/"> <EachButton><img src="/images/logo.png" style={{width: 30}} /></EachButton> </Link>
                    <Link to="/project"><EachButton>Projects</EachButton></Link>
                    <Link to="/about"><EachButton >About Me</EachButton></Link>
                    <Link to="/contact"><EachButton >Contact</EachButton></Link>
                </NavigationPane>
            </Visible>
        </Row>
    )
}