import React, { useEffect } from 'react'
import { Row, Col } from 'react-grid-system'
import styled from 'styled-components'
import { 
    TextMain, 
    FlexDRow, 
    FlexDCol, 
    DividerTitle, 
    Divider, 
    initialProps, 
    animateProps 
} from './StyledComponent'
import { projects } from '../data/projects'
import { Link, useLocation } from "react-router-dom"
import WorkTogether from './WorkTogether'
import { motion } from 'framer-motion'
import Scroll from 'react-scroll'
var Element  = Scroll.Element
var scroller = Scroll.scroller

const renderProjectPane = (prj, index) => (
    <Link to={`/project/${prj.title}`}>
        <ProjectPane
            initial={initialProps}
            animate={animateProps}
            transition={{ delay: 0.8 + (index * 0.2) }}
        >
            <ProjectImgHolder title={prj.title} />
            <ProjectTextHolder
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.2) }}
            >
                <FlexDRow>
                    <ProjectIcon src={`/images/projects/${prj.title}/icon.png`} />
                    <FlexDCol>
                        <ProjectYear>
                            {prj.year}
                        </ProjectYear>
                        <ProjectTitle>
                            {prj.title}
                        </ProjectTitle>
                    </FlexDCol>
                </FlexDRow>
            </ProjectTextHolder>
        </ProjectPane>
    </Link>
)

export default function Projects (){
    let { search } = useLocation()

    useEffect(() => {
        if(search === '') {
            window.scrollTo(0, 0)
        } else {
            scroller.scrollTo(search.slice(3), {
                duration: 1200,
                delay: 50,
                smooth: true,
                offset: - 60, 
            })
        }
    },[search])

    return (
        <Row nogutter justify="center">
            <Col xs={11} sm={11} md={11} >
                <TextMain
                    initial={initialProps}
                    animate={animateProps}
                    transition={{ delay: 0.4 }}
                >
                    Personal Projects
                </TextMain>

                <motion.div
                    initial={initialProps}
                    animate={animateProps}
                    transition={{ delay: 0.6 }}
                >
                    <DividerTitle>Running Services</DividerTitle>
                    <Divider />
                </motion.div>

                <Row nogutter>
                    {projects.filter(v => v.type === 'Production').map( (prj, index) => (
                        <Col sm={12} md={6} style={{padding: 8}} key={index}>
                            <Element name={prj.id.toString()} />
                            {renderProjectPane(prj, index)}
                        </Col>
                    ))}
                </Row>

                <DividerTitle>Toy Projects</DividerTitle>
                <Divider />

                <Row nogutter>
                    {projects.filter(v => v.type === 'Toy').map( (prj, index) => (
                        <Col sm={12} md={6} style={{padding: 8}} key={index}>
                            <Element name={prj.id.toString()} />
                            {renderProjectPane(prj, index)}
                        </Col>
                    ))}
                </Row>
                
                {/* <DividerTitle>Others</DividerTitle>
                <Divider /> */}
                <WorkTogether
                linkTo={`/about`}
                smallText="NEED A SELF-DIRECTED AND PASSIONATE WEB DEVELOPER?"
                bigText="Read About Me"
                />
            </Col>
        </Row>
    )
}

const ProjectPane = styled(motion.div)`
    background-color: black; //#fbfbfd;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    @media (max-width: 768px) {
        /* padding: 1rem; */
    }
    cursor: pointer;
`

const ProjectImgHolder = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${props => `url(/images/projects/${props.title.replace(' ','%20')}/banner.png)`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.3s linear;
    &:hover {
        transform: scale(1.05);
        filter: brightness(75%);
    }
`

const ProjectTextHolder = styled(motion.div)`
    position: absolute; 
    top: 2rem; 
    left: 2rem;
`

const ProjectIcon = styled.img`
    src: ${props => props.src};
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 16px;
    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`

const ProjectYear = styled.div`
    color: var(--mono-2);
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

const ProjectTitle = styled.span`
    color: var(--mono-1);
    font-size: 2.2rem;
    font-weight: 800;
    @media (max-width: 768px) {
        font-size: 1.6rem;
        font-weight: 800;
    }
`
