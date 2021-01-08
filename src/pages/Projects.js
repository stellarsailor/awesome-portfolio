import React, { useEffect } from 'react'
import { Row, Col } from 'react-grid-system'
import styled from 'styled-components'
import { TextMain, TextDesc, TextMainTitle, TextSubTitle, FlexDRow, FlexDCol, TextSticky, DividerTitle, Divider } from '../components/StyledComponent'
import { projects } from '../datas/projects'
import { dynamicSort } from '../logics/dynamicSort'
import { Link, useLocation } from "react-router-dom"
import StickyHeader from '../components/StickyHeader'
import WorkTogether from '../components/WorkTogether'

const ProjectPane = styled.div`
    background-color: black; //#fbfbfd;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    /* padding: 2rem; */
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
    &:hover {
        transition: 0.3s linear;
        transform: scale(1.05);
        filter: brightness(80%);
    }
`

const ProjectTextHolder = styled.div`
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

export default function Projects (){
    let { search } = useLocation()

    useEffect(() => {
        console.log(search)
        window.scrollTo(0, 0)
    },[])

    return (
        <Row nogutter justify="center">
            <Col xs={11} sm={11} md={11} >
                <TextMain>Personal Projects</TextMain>

                <DividerTitle>Running Services</DividerTitle>
                <Divider />

                <Row nogutter>
                    {projects.filter(v => v.type === 'Production').map( prj => (
                        <Col sm={12} md={6} style={{padding: 8}}>
                            <Link to={`/project/${prj.title}`}>
                                <ProjectPane>
                                    <ProjectImgHolder title={prj.title} />
                                    <ProjectTextHolder>
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
                        </Col>
                    ))}
                </Row>

                <DividerTitle>Toy Projects</DividerTitle>
                <Divider />

                <Row nogutter>
                    {projects.filter(v => v.type === 'Toy').map( prj => (
                        <Col sm={12} md={6} style={{padding: 8}}>
                            <Link to={`/project/${prj.title}`}>
                                <ProjectPane>
                                    <ProjectImgHolder title={prj.title} />
                                    <ProjectTextHolder>
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
                        </Col>
                    ))}
                </Row>
                
                {/* <DividerTitle>Others</DividerTitle>
                <Divider /> */}
                <WorkTogether
                linkTo="/contact"
                smallText="NEED A WEB DEVELOPER WHO HAS A PASSION ON DESIGN AS WELL?"
                bigText="Let's Work Together"
                />
            </Col>
        </Row>
    )
}