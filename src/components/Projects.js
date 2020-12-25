import React from 'react'
import { Row, Col } from 'react-grid-system'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { TextMain, TextDesc, TextMainTitle, TextSubTitle, FlexDRow, FlexDCol, TextSticky } from '../components/StyledComponent'
import { projects } from '../datas/projects'
import { dynamicSort } from '../logics/dynamicSort'
import { Link } from "react-router-dom"
import StickyHeader from './StickyHeader'

const ProjectPane = styled.div`
    background-color: black; //#fbfbfd;
    height: 80vh;
    padding: 2rem;
    &:hover {
        background-color: white;
        opacity: 0.8;
        transition: 0.2s linear;
    }
    cursor: pointer;
`

const ProjectDuration = styled.div`
    color: var(--mono-2);
    font-size: 1.4rem;
    font-weight: 600;
`

const ProjectTitle = styled.span`
    color: var(--mono-1);
    font-size: 2rem;
    font-weight: 800;
`

export default function Projects (){

    return (
        <>
            <TextMain>Personal Projects</TextMain>

            <StickyHeader>
                <TextSticky>
                    Running Services
                </TextSticky>
            </StickyHeader>

            <Row nogutter>
                {projects.filter(v => v.type === 'Production').sort(dynamicSort('id')).map( prj => (
                    <Col sm={12} md={6} style={{padding: 24}}>
                        <Link to={`/project/${prj.title}`}>
                            <ProjectPane style={{backgroundImage: `url('/images/project-image.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <FlexDRow>
                                    <div style={{backgroundColor: 'aliceblue', width: 80, height: 80, borderRadius: 10, marginRight: 16}} />
                                    <FlexDCol>
                                        <ProjectDuration>
                                            {prj.duration}
                                        </ProjectDuration>
                                        <ProjectTitle>
                                            {prj.title}
                                        </ProjectTitle>
                                    </FlexDCol>
                                </FlexDRow>
                            </ProjectPane>
                        </Link>
                    </Col>
                ))}
            </Row>

            <StickyHeader>
                <TextSticky>
                    Toy Projects
                </TextSticky>
            </StickyHeader>

            <Row nogutter>
                {projects.filter(v => v.type === 'Toy').sort(dynamicSort('id')).map( prj => (
                    <Col sm={12} md={6} style={{padding: 24}}>
                    <Link to={`/project/${prj.title}`}>
                        <ProjectPane style={{backgroundImage: `url('/images/project-image.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                            <FlexDRow>
                                <div style={{backgroundColor: 'aliceblue', width: 80, height: 80, borderRadius: 10, marginRight: 16}} />
                                <FlexDCol>
                                    <ProjectDuration>
                                        {prj.duration}
                                    </ProjectDuration>
                                    <ProjectTitle>
                                        {prj.title}
                                    </ProjectTitle>
                                </FlexDCol>
                            </FlexDRow>
                        </ProjectPane>
                    </Link>
                </Col>
                ))}
            </Row>
            
            <StickyHeader>
                <TextSticky>
                    Others
                </TextSticky>
            </StickyHeader>
        </>
    )
}