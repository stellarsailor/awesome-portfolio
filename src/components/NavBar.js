import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Visible } from 'react-grid-system'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { initialProps, animateProps } from '../components/StyledComponent'
import { projects } from '../data/projects'

export default function NavBar(props) {
    const location = useLocation()

    const [ scrollPosition, setScrollPosition ] = useState(0)
    const [ backScrollId, setBackScrollId ] = useState(0)

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

    useEffect(() => {
        let urlArr = location.pathname.split('/')
        if(urlArr.length >= 3){
            let selectedPrj = projects.filter(v => v.title === urlArr[2])[0]
            setBackScrollId(selectedPrj.id)
        }
    },[location.pathname])

    const [ viewMobilePane, setViewMobilePane ] = useState(false)

    return (
        <Row nogutter justify="center" style={{position: 'fixed', width: '100%', zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 1)'}}>
            <Visible xs sm>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <MobileTab>
                        {
                            location.pathname.includes('/project/') && scrollPosition > 50 ? 
                            <MobileSides 
                                initial={initialProps}
                                animate={animateProps}
                                transition={{ delay: 0.08 }}
                            >
                                <Link to={`/projects?s=${backScrollId}`}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src="/images/more.png" style={{width: 20, height: 20, transform: 'rotate(180deg)', marginLeft: '2rem', marginRight: 4}} alt="Go Back" /> Back
                                    </div>
                                </Link>
                            </MobileSides>
                            :
                            <div style={{width: 50, height: 50, margin: '0px 8px'}}></div>
                        }
                        <Link to="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                            <img src="/images/logo.png" style={{width: 30}} onClick={() => setViewMobilePane(false)} alt="Logo" />
                        </Link>
                        <MobileSides onClick={() => setViewMobilePane(!viewMobilePane)}>
                            <img src="/images/icon_hamburger.png" style={{width: 25, height: 25}} alt="Menu" />
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
                            <Link to="/project">
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
                            <a href="https://drive.google.com/file/d/1e8b-BbIiDKbs0k6pzojxFjC1_myrprEd/view?usp=sharing" target="_blank" rel="noreferrer">
                                <MobileTabLine onClick={() => setViewMobilePane(false)}>
                                    Resume
                                </MobileTabLine>
                            </a>
                            {/* <a href="https://github.com/stellarsailor" target="_blank" rel="noreferrer">
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
                            </a> */}
                        </MobileOpenedPane>
                    }
                </div>
            </Visible>
            <Visible md lg xl xxl>
                <Col sm={12} md={11} style={{marginLeft: '0%'}}>
                    <NavigationPane>
                        <Link to="/"> <EachButton><img src="/images/logo.png" style={{width: 30}} alt="Logo" /></EachButton> </Link>
                        <Link to="/project"><EachButton>Projects</EachButton></Link>
                        <Link to="/about"><EachButton >About Me</EachButton></Link>
                        <Link to="/contact"><EachButton >Contact</EachButton></Link>
                        <a href="https://drive.google.com/file/d/1e8b-BbIiDKbs0k6pzojxFjC1_myrprEd/view?usp=sharing" target="_blank" rel="noreferrer" style={{position: 'absolute', right: 0}}>
                            <ResumeButton>
                                Resume
                            </ResumeButton>
                        </a>
                    </NavigationPane>
                </Col>
            </Visible>
        </Row>
    )
}

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

const MobileSides = styled(motion.div)`
    color: white; //var(--blue);
    font-size: 1.3rem;
    font-weight: 800;
    width: 50px;
    height: 50px;
    margin: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const EachButton = styled.div`
    width: 120px;
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

const ResumeButton = styled.div`
    color: #f5f5f7;
    font-size: 15px;
    /* border: 1px solid var(--mono-5); */
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
    opacity: 0.8;
    transition: opacity .3s cubic-bezier(0.25, 0.1, 0.25, 1);
    &:hover {
        color: white;
        opacity: 1;
        cursor: pointer;
    }
`
